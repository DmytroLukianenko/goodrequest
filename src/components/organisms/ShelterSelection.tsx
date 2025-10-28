'use client';

import { FC, useMemo, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebounce } from 'use-debounce';
import { SegmentedControl } from '@/components/molecules';
import { Title, SearchSelect } from '@/components/atoms';
import { useFormContext } from '@/contexts/FormContext';
import { useShelters } from '@/hooks/useShelters';
import { AmountSelection } from './AmountSelection';
import { ShelterSelectionContainer, LabelText, OptionalText } from './ShelterSelection.styles';
import { shelterSelectionSchema, type ShelterSelectionFormData } from '@/validators/shelterSelection.validator';

const enum ShelterSelections {
  one = 'one',
  all = 'all',
}

type ShelterSelectionProps = {
  onValidationChange?: (isValid: boolean) => void;
};

export const ShelterSelection: FC<ShelterSelectionProps> = ({ onValidationChange }) => {
  const { state, setSelectedShelterId, setSearchValue, setShelterSelectionType, registerTrigger } = useFormContext();
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
      <Title size='display2' as='h2'>
        Vyberte si možnosť, ako chcete pomôcť
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
            }}
            data={[
              { label: 'Prispieť konkrétnemu útulku', value: ShelterSelections.one },
              { label: 'Prispieť celej nadácii', value: ShelterSelections.all },
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
            placeholder='Vyberte útulok zo zoznamu'
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              setSelectedShelterId(value);
            }}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            data={items}
            isLoading={isLoading}
            isError={isError}
            required={isRequiredField}
            error={errors.selectedShelterId?.message}
          />
        )}
      />
      <AmountSelection />
    </ShelterSelectionContainer>
  );
};

function SelectLabel({ isRequired }: { isRequired: boolean }) {
  return (
    <>
      <LabelText>Útulok</LabelText>{' '}
      {!isRequired && <OptionalText>(Nepovinné)</OptionalText>}
    </>
  );
}
