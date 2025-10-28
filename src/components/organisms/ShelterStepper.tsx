'use client';
import { FC, useState } from 'react';
import { Flex } from '@mantine/core';
import { Stepper, StepNavigation } from '@/components/molecules';
import { STEPPER_STEPS } from '@/constants/stepper.constants';
import { ShelterSelection } from './ShelterSelection';

export const ShelterStepper: FC = () => {
  const [active, setActive] = useState(0);

  const nextStep = () => setActive((current) => (current < STEPPER_STEPS.length - 1 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const renderStepContent = () => {
    switch (active) {
      case 0:
        return <ShelterSelection />;
      case 1:
        return <div>Osobné údaje content</div>;
      case 2:
        return <div>Potvrdenie content</div>;
      default:
        return null;
    }
  };

  return (
    <Flex direction='column' h='100%' gap='xxl' p={'lg'}>
      <Stepper steps={STEPPER_STEPS} active={active} onStepClick={setActive} />
      <Flex direction='column' gap='xxl' style={{ flex: 1, minHeight: 0 }}>
        {renderStepContent()}
      </Flex>
      <StepNavigation currentStep={active} onNext={nextStep} onPrev={prevStep} isLastStep={active === STEPPER_STEPS.length - 1} />
    </Flex>
  );
};
