'use client';

import { FC, useMemo, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebounce } from 'use-debounce';
import { useTranslations } from 'next-intl';
import { SegmentedControl } from '@/components/molecules';
import { Title, SearchSelect } from '@/components/atoms';
import { useFormContext } from '@/contexts/FormContext';
import { useShelters } from '@/hooks/useShelters';
import { AmountSelection } from './AmountSelection';
import { ShelterSelectionContainer, LabelText, OptionalText } from './ShelterSelection.styles';
import { shelterSelectionSchema, type ShelterSelectionFormData } from '@/validators/shelterSelection.validator';
import { Flex } from '@mantine/core';

const enum ShelterSelections {
  one = 'one',
  all = 'all',
}

type ShelterSelectionProps = {
  onValidationChange?: (isValid: boolean) => void;
};

export const ShelterSelection: FC<ShelterSelectionProps> = ({ onValidationChange }) => {
  const t = useTranslations('ShelterSelection');
  const { state, setSelectedShelterId, setSelectedShelterName, setSearchValue, setShelterSelectionType, setShelterSelectionLabel, registerTrigger } = useFormContext();
  const { selectedShelterId, searchValue, shelterSelectionType, amount } = state;

  const {
    control,
    formState: { errors, isValid },
    watch,
    trigger,
  } = useForm<ShelterSelectionFormData>({
    resolver: zodResolver(shelterSelectionSchema),
    defaultValues: {
      shelterSelectionType,
      selectedShelterId,
      amount,
    },
    mode: 'onChange',
  });

  const watchedShelterSelectionType = watch('shelterSelectionType');

  useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid, onValidationChange]);

  useEffect(() => {
    registerTrigger(trigger);
  }, [registerTrigger, trigger]);

  useEffect(() => {
    if (watchedShelterSelectionType === 'all') {
      trigger('selectedShelterId');
    }
  }, [watchedShelterSelectionType, trigger]);

  const [debouncedSearch] = useDebounce(searchValue, 300);

  const { data: shelters, isLoading, isError } = useShelters(debouncedSearch ? { search: debouncedSearch } : undefined);

  const items = useMemo(() => shelters?.map((s) => ({ label: s.name, value: String(s.id) })) ?? [], [shelters]);

  const isRequiredField = watchedShelterSelectionType === 'one';

  return (
    <ShelterSelectionContainer>
      <Title size='display2' as='h1' weight='bold'>
        {t('title')}
      </Title>
      <Controller
        name='shelterSelectionType'
        control={control}
        render={({ field }) => (
          <SegmentedControl
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              setShelterSelectionType(value as 'one' | 'all');
              setShelterSelectionLabel(value === 'one' ? t('labelOne') : t('labelAll'));
            }}
            data={[
              { label: t('optionOne'), value: ShelterSelections.one },
              { label: t('optionAll'), value: ShelterSelections.all },
            ]}
          />
        )}
      />
      <Controller
        name='selectedShelterId'
        control={control}
        render={({ field }) => (
          <SearchSelect
            label={<SelectLabel isRequired={isRequiredField} />}
            placeholder={t('selectShelter')}
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              setSelectedShelterId(value);
              const selectedShelter = shelters?.find((s) => String(s.id) === value);
              setSelectedShelterName(selectedShelter ? selectedShelter.name : null);
            }}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            data={items}
            isLoading={isLoading}
            isError={isError}
            error={errors.selectedShelterId?.message}
          />
        )}
      />
      <AmountSelection />
    </ShelterSelectionContainer>
  );
};

function SelectLabel({ isRequired }: { isRequired: boolean }) {
  const t = useTranslations('ShelterSelection');

  return (
    <Flex gap={'md'} direction={'column'}>
      <Title size='md' as='h2' weight='semibold'>
        {t('aboutProject')}
      </Title>
      <Flex align='center' gap='xs'>
        <LabelText>{t('shelter')}</LabelText>
        {!isRequired && <OptionalText>{t('optional')}</OptionalText>}
      </Flex>
    </Flex>
  );
}
