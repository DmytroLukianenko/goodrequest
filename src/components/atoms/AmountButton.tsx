'use client';

import { FC } from 'react';
import { Icon } from './Icon';
import { StyledAmountButton } from './AmountButton.styles';

type AmountButtonProps = {
  amount: number;
  isActive: boolean;
  onClick: () => void;
};

export const AmountButton: FC<AmountButtonProps> = ({ amount, isActive, onClick }) => {
  return (
    // @ts-expect-error - Emotion styled typing issue with Mantine components
    <StyledAmountButton onClick={onClick} data-active={isActive} rightSection={<Icon type='local' src='/icons/euro.svg' size={12} alt='euro' />} aria-pressed={isActive}>
      {amount}
    </StyledAmountButton>
  );
};
