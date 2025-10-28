'use client';

import { FC, ReactNode } from 'react';
import { StyledText } from './Text.styles';

type TextVariant = 'primary' | 'secondary' | 'accent';

type TextProps = {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
};

export const Text: FC<TextProps> = ({ children, variant = 'primary', className }) => {
  return (
    <StyledText variant={variant} className={className}>
      {children}
    </StyledText>
  );
};
