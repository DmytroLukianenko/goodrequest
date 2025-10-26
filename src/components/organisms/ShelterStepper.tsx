'use client';
import { FC, useState } from 'react';
import { Stepper } from '@/components/molecules';
import { STEPPER_STEPS } from '@/components/molecules/Stepper.constants';

export const ShelterStepper: FC = () => {
  const [active, setActive] = useState(0);

  const nextStep = () => setActive((current) => (current < STEPPER_STEPS.length - 1 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const renderStepContent = () => {
    switch (active) {
      case 0:
        return <div>Výber útulku content</div>;
      case 1:
        return <div>Osobné údaje content</div>;
      case 2:
        return <div>Potvrdenie content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper steps={STEPPER_STEPS} active={active} onStepClick={setActive} />
      <div>{renderStepContent()}</div>
      <button onClick={nextStep}>next step</button>
      <button onClick={prevStep}>prev step</button>
    </div>
  );
};
