'use client';

import { FC } from 'react';
import PhoneInputLib from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import type { Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { StyledPhoneInputWrapper, StyledLabel, StyledErrorMessage } from './PhoneInput.styles';

type PhoneInputProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  defaultCountry?: Country;
};

export const PhoneInput: FC<PhoneInputProps> = ({ label, value, onChange, error, defaultCountry = 'SK' }) => {
  return (
    <StyledPhoneInputWrapper data-error={!!error}>
      <StyledLabel>{label}</StyledLabel>
      <PhoneInputLib
        flags={flags}
        international
        defaultCountry={defaultCountry}
        countries={['SK', 'CZ']}
        value={value}
        onChange={(val) => onChange?.(val || '')}
        placeholder='+421 900 000 000'
      />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledPhoneInputWrapper>
  );
};
