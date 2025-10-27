'use client';

import { FC, useState, useMemo } from 'react';
import { useDebounce } from 'use-debounce';
import { Flex } from '@mantine/core';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { SegmentedControl } from '@/components/molecules';
import { Title, SearchSelect, Button } from '@/components/atoms';
import { useFormContext } from '@/contexts/FormContext';
import { useShelters } from '@/hooks/useShelters';
import { AmountSelection } from './AmountSelection';
import { ShelterSelectionContainer } from './ShelterSelection.styles';

const enum ShelterSelections {
  one = 'one',
  all = 'all',
}

type ShelterSelectionProps = {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
};

export const ShelterSelection: FC<ShelterSelectionProps> = ({ currentStep, onNext, onPrev }) => {
  const [shelterSelection, setShelterSelection] = useState<ShelterSelections>(ShelterSelections.one);
  const { selectedShelterId, setSelectedShelterId, searchValue, setSearchValue } = useFormContext();

  const [debouncedSearch] = useDebounce(searchValue, 300);

  const { data: shelters, isLoading, isError } = useShelters(debouncedSearch ? { search: debouncedSearch } : undefined);

  const items = useMemo(() => shelters?.map((s) => ({ label: s.name, value: String(s.id) })) ?? [], [shelters]);

  const isRequiredField = shelterSelection === ShelterSelections.one;

  const navigationButtons = [
    {
      label: 'Späť',
      variant: 'secondary' as const,
      icon: <FiArrowLeft size={20} />,
      iconPosition: 'left' as const,
      onClick: onPrev,
      disabled: currentStep === 0,
    },
    {
      label: 'Pokračovať',
      variant: 'primary' as const,
      icon: <FiArrowRight size={20} />,
      iconPosition: 'right' as const,
      onClick: onNext,
    },
  ];

  return (
    <ShelterSelectionContainer>
      <Title size='display2' as='h2'>
        Vyberte si možnosť, ako chcete pomôcť
      </Title>
      <SegmentedControl
        value={shelterSelection.toString()}
        onChange={(value) => setShelterSelection(value as ShelterSelections)}
        data={[
          { label: 'Prispieť konkrétnemu útulku', value: ShelterSelections.one },
          { label: 'Prispieť celej nadácii', value: ShelterSelections.all },
        ]}
      />
      <SearchSelect
        label={<SelectLabel isRequired={isRequiredField} />}
        placeholder='Vyberte útulok zo zoznamu'
        value={selectedShelterId}
        onChange={setSelectedShelterId}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        data={items}
        isLoading={isLoading}
        isError={isError}
        required={isRequiredField}
      />
      <AmountSelection />

      <Flex justify='space-between' w='100%' mt='auto'>
        {navigationButtons.map((button) => (
          <Button
            key={button.label}
            variant={button.variant}
            leftSection={button.iconPosition === 'left' ? button.icon : undefined}
            rightSection={button.iconPosition === 'right' ? button.icon : undefined}
            disabled={button.disabled}
            onClick={button.onClick}
          >
            {button.label}
          </Button>
        ))}
      </Flex>
    </ShelterSelectionContainer>
  );
};

function SelectLabel({ isRequired }: { isRequired: boolean }) {
  return (
    <>
      <span style={{ fontSize: 14, fontWeight: 500, color: 'inherit' }}>Útulok</span>{' '}
      {!isRequired && <span style={{ fontSize: 13, color: 'var(--color-base-content-quaternary)' }}>(Nepovinné)</span>}
    </>
  );
}
