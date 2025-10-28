'use client';
import { FC, useState, useTransition } from 'react';
import { Flex } from '@mantine/core';
import { Stepper, StepNavigation } from '@/components/molecules';
import { STEPPER_STEPS } from '@/constants/stepper.constants';
import { ShelterSelection } from './ShelterSelection';
import { PersonalInfo } from './PersonalInfo';
import { Confirmation } from './Confirmation';
import { useFormContext } from '@/contexts/FormContext';
import { sheltersApi } from '@/services/api';
import type { ContributeRequest } from '@/types/api';

export const ShelterStepper: FC = () => {
  const [active, setActive] = useState(0);
  const [isShelterSelectionValid, setIsShelterSelectionValid] = useState(false);
  const [isPersonalInfoValid, setIsPersonalInfoValid] = useState(false);
  const [isConfirmationValid, setIsConfirmationValid] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { state, triggerValidation } = useFormContext();

  const canProceedToNextStep = () => {
    if (active === 0) return isShelterSelectionValid;
    if (active === 1) return isPersonalInfoValid;
    if (active === 2) return isConfirmationValid;
    return true;
  };

  const handleSubmit = async () => {
    const requestData: ContributeRequest = {
      contributors: [
        {
          firstName: state.personalInfo.firstName,
          lastName: state.personalInfo.lastName,
          email: state.personalInfo.email,
          phone: state.personalInfo.phone,
        },
      ],
      value: state.amount,
    };

    if (state.shelterSelectionType === 'one' && state.selectedShelterId) {
      requestData.shelterID = parseInt(state.selectedShelterId, 10);
    }

    try {
      const response = await sheltersApi.contribute(requestData);
      console.log('Contribution successful:', response);
    } catch (error) {
      console.error('Contribution failed:', error);
    }
  };

  const nextStep = async () => {
    await triggerValidation();
    if (!canProceedToNextStep()) return;

    if (active === STEPPER_STEPS.length - 1) {
      startTransition(() => {
        handleSubmit();
      });
    } else {
      setActive((current) => (current < STEPPER_STEPS.length - 1 ? current + 1 : current));
    }
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const renderStepContent = () => {
    switch (active) {
      case 0:
        return <ShelterSelection onValidationChange={setIsShelterSelectionValid} />;
      case 1:
        return <PersonalInfo onValidationChange={setIsPersonalInfoValid} />;
      case 2:
        return <Confirmation onValidationChange={setIsConfirmationValid} />;
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
      <StepNavigation currentStep={active} onNext={nextStep} onPrev={prevStep} isLastStep={active === STEPPER_STEPS.length - 1} isLoading={isPending} />
    </Flex>
  );
};
