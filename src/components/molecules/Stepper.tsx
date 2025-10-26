'use client';
import { FC, ReactNode } from 'react';
import { FiCheck } from 'react-icons/fi';
import { Stepper as MantineStepper, useMantineTheme } from '@mantine/core';
import { StyledStepper } from './Stepper.styles';

type Step = {
  label: string;
  content?: ReactNode;
};

type StepperProps = {
  steps: Step[];
  active: number;
  onStepClick?: (stepIndex: number) => void;
};

export const Stepper: FC<StepperProps> = ({ steps, active, onStepClick }) => {
  const theme = useMantineTheme();
  return (
    <StyledStepper iconSize={32} active={active} onStepClick={onStepClick} completedIcon={<FiCheck size={16} color={theme.other.colors.base.action.primary.default} />}>
      {steps.map((step, index) => (
        <MantineStepper.Step key={index} label={step.label}>
          {step.content}
        </MantineStepper.Step>
      ))}
    </StyledStepper>
  );
};
