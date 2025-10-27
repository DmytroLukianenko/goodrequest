'use client';

import { FC } from 'react';
import { StyledAmountInput } from './AmountInput.styles';
import { Icon } from './Icon';

type AmountInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export const AmountInput: FC<AmountInputProps> = ({ value, onChange }) => {
  const handleChange = (val: string | number) => {
    const numValue = typeof val === 'number' ? val : Number(val);
    onChange(numValue);
  };

  return (
    <StyledAmountInput 
      value={value} 
      onChange={handleChange} 
      min={0}
      max={1000}
      hideControls 
      allowDecimal 
      decimalScale={2} 
      aria-label='Amount to donate'
      rightSection={<Icon type='local' src='/icons/euro.svg' size={17} alt='euro' />}
    />
  );
};
