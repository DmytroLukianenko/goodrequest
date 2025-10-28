'use client';

import { FC } from 'react';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import { StyledCheckboxWrapper } from './Checkbox.styles';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
};

export const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange, error }) => {
  return (
    <StyledCheckboxWrapper data-error={!!error}>
      <MantineCheckbox label={label} checked={checked} onChange={(event) => onChange(event.currentTarget.checked)} />
      {error && <span className='error-message'>{error}</span>}
    </StyledCheckboxWrapper>
  );
};
