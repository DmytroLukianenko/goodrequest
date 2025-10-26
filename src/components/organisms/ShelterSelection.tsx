'use client';
import { FC, useState } from 'react';
import { SegmentedControl } from '@/components/molecules';
import { Title } from '@/components/atoms';
import { ShelterSelectionContainer } from './ShelterSelection.styles';

const enum ShelterSelections {
  one = 'one',
  all = 'all',
}
export const ShelterSelection: FC = () => {
  const [shelterSelection, setShelterSelection] = useState<ShelterSelections>(ShelterSelections.one);

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
    </ShelterSelectionContainer>
  );
};
