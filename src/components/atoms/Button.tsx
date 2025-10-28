'use client';

import { FC, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: FC<ButtonProps> = ({ children, variant = 'primary', leftSection, rightSection, onClick, disabled = false, loading = false, type = 'button' }) => {
  return (
    <StyledButton variant={variant} leftSection={leftSection} rightSection={rightSection} onClick={onClick} disabled={disabled || loading} loading={loading} type={type}>
      {children}
    </StyledButton>
  );
};
