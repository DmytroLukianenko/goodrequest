'use client';
import { FC, useState, useMemo } from 'react';
import { useDebounce } from 'use-debounce';
import { SegmentedControl } from '@/components/molecules';
import { Title, SearchSelect } from '@/components/atoms';
import { useFormContext } from '@/contexts/FormContext';
import { useShelters } from '@/hooks/useShelters';
import { ShelterSelectionContainer } from './ShelterSelection.styles';

const enum ShelterSelections {
  one = 'one',
  all = 'all',
}

export const ShelterSelection: FC = () => {
  const [shelterSelection, setShelterSelection] = useState<ShelterSelections>(ShelterSelections.one);
  const [searchValue, setSearchValue] = useState('');
  const { selectedShelterId, setSelectedShelterId } = useFormContext();

  const [debouncedSearch] = useDebounce(searchValue, 300);

  const { data: shelters, isLoading, isError } = useShelters(debouncedSearch ? { search: debouncedSearch } : undefined);

  const items = useMemo(() => shelters?.map((s) => ({ label: s.name, value: String(s.id) })) ?? [], [shelters]);

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
        label={<SelectLabel />}
        placeholder='Vyberte útulok zo zoznamu'
        value={selectedShelterId}
        onChange={setSelectedShelterId}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        data={items}
        isLoading={isLoading}
        isError={isError}
      />
    </ShelterSelectionContainer>
  );
};

function SelectLabel() {
  return (
    <>
      <span style={{ fontSize: 14, fontWeight: 500, color: 'inherit' }}>Útulok</span>{' '}
      <span style={{ fontSize: 13, color: 'var(--color-base-content-quaternary)' }}>(Nepovinné)</span>
    </>
  );
}
