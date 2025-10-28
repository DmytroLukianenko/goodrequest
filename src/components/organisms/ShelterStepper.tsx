'use client';
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Flex } from '@mantine/core';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { Stepper, StepNavigation } from '@/components/molecules';
import { ToastMessage } from '@/components/atoms';
import { ShelterSelection } from './ShelterSelection';
import { PersonalInfo } from './PersonalInfo';
import { Confirmation } from './Confirmation';
import { useFormContext } from '@/contexts/FormContext';
import { useContribute } from '@/hooks';
import type { ContributeRequest } from '@/types/api';

const REDIRECT_TIMEOUT = 5;
const TOAST_ID = 'success-toast';

export const ShelterStepper: FC = () => {
  const t = useTranslations('Toast');
  const tStepper = useTranslations('Stepper');
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [isShelterSelectionValid, setIsShelterSelectionValid] = useState(false);
  const [isPersonalInfoValid, setIsPersonalInfoValid] = useState(false);
  const [isConfirmationValid, setIsConfirmationValid] = useState(false);
  const { state, triggerValidation, resetForm } = useFormContext();

  const { mutate: contribute, isPending, isSuccess, data: successResponse } = useContribute();

  const STEPPER_STEPS = [{ label: tStepper('step1') }, { label: tStepper('step2') }, { label: tStepper('step3') }];

  useEffect(() => {
    if (isSuccess && successResponse) {
      const title = successResponse.messages[0]?.message || t('success');
      const description = t('redirecting');

      const handleComplete = () => {
        toast.dismiss(TOAST_ID);
        resetForm();
        setActive(0);

        setTimeout(() => {
          if (state.shelterSelectionType === 'one' && state.selectedShelterId) {
            router.push(`/about?shelter=${state.selectedShelterId}`);
          } else {
            router.push('/about');
          }
        }, 0);
      };

      toast.success(
        <div>
          <ToastMessage title={title} initialSeconds={REDIRECT_TIMEOUT} onComplete={handleComplete} />
          <div style={{ marginTop: '8px', fontSize: '14px', opacity: 0.9 }}>{description}</div>
        </div>,
        {
          toastId: TOAST_ID,
          autoClose: 1000 * 5,
          closeButton: false,
          draggable: false,
        }
      );
    }
  }, [isSuccess, successResponse, router, resetForm, state.shelterSelectionType, state.selectedShelterId]);

  const canProceedToNextStep = () => {
    if (active === 0) return isShelterSelectionValid;
    if (active === 1) return isPersonalInfoValid;
    if (active === 2) return isConfirmationValid;
    return true;
  };

  const handleSubmit = () => {
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

    contribute(requestData);
  };

  const nextStep = async () => {
    await triggerValidation();
    if (!canProceedToNextStep()) return;

    if (active === STEPPER_STEPS.length - 1) {
      handleSubmit();
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
      <StepNavigation currentStep={active} onNext={nextStep} onPrev={prevStep} isLastStep={active === STEPPER_STEPS.length - 1} isLoading={isPending} isSubmitted={isSuccess} />
    </Flex>
  );
};
