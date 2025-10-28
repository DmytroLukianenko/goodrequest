'use client';

import { FC } from 'react';
import { Flex } from '@mantine/core';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/atoms';

type StepNavigationProps = {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isLoading?: boolean;
};

export const StepNavigation: FC<StepNavigationProps> = ({ currentStep, onNext, onPrev, isFirstStep = false, isLastStep = false, isLoading = false }) => {
  const navigationButtons = [
    {
      label: 'Späť',
      variant: 'secondary' as const,
      icon: <FiArrowLeft size={20} />,
      iconPosition: 'left' as const,
      onClick: onPrev,
      disabled: isFirstStep || currentStep === 0 || isLoading,
      loading: false,
    },
    {
      label: isLastStep ? 'Odoslať formulár' : 'Pokračovať',
      variant: 'primary' as const,
      icon: !isLastStep ? <FiArrowRight size={20} /> : undefined,
      iconPosition: 'right' as const,
      onClick: onNext,
      disabled: false,
      loading: isLoading,
    },
  ];

  return (
    <Flex justify='space-between' w='100%' mt='auto'>
      {navigationButtons.map((button) => (
        <Button
          key={button.label}
          variant={button.variant}
          leftSection={button.iconPosition === 'left' ? button.icon : undefined}
          rightSection={button.iconPosition === 'right' ? button.icon : undefined}
          disabled={button.disabled}
          loading={button.loading}
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      ))}
    </Flex>
  );
};
