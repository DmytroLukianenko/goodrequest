'use client';

import { FC } from 'react';
import { StyledTextInput } from './FormInput.styles';

type FormInputProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  success?: boolean;
  type?: 'text' | 'email';
};

export const FormInput: FC<FormInputProps> = ({ label, placeholder, value, onChange, error, success, type = 'text' }) => {
  return (
    <StyledTextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      error={error}
      type={type}
      data-error={!!error}
      data-success={success && !error}
      withAsterisk={false}
    />
  );
};
