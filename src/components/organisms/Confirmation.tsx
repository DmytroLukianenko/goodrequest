'use client';

import { FC, useEffect, useState } from 'react';
import { Stack, Divider } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { Title, Checkbox } from '@/components/atoms';
import { useFormContext } from '@/contexts/FormContext';
import { ConfirmationContainer, InfoBlock, InfoRow, InfoLabel, InfoValue } from './Confirmation.styles';

type ConfirmationProps = {
  onValidationChange?: (isValid: boolean) => void;
};

type InfoField = {
  label: string;
  value: string | number;
};

export const Confirmation: FC<ConfirmationProps> = ({ onValidationChange }) => {
  const t = useTranslations('Confirmation');
  const { state, setAgreedToTerms, registerTrigger } = useFormContext();
  const [agreedToTerms, setLocalAgreedToTerms] = useState(state.agreedToTerms);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    onValidationChange?.(agreedToTerms);
  }, [agreedToTerms, onValidationChange]);

  useEffect(() => {
    const trigger = async () => {
      if (!agreedToTerms) {
        setShowError(true);
        return false;
      }
      return true;
    };
    registerTrigger(trigger);
  }, [registerTrigger, agreedToTerms]);

  const handleCheckboxChange = (checked: boolean) => {
    setLocalAgreedToTerms(checked);
    setAgreedToTerms(checked);
    if (checked) {
      setShowError(false);
    }
  };

  const fullName = `${state.personalInfo.firstName} ${state.personalInfo.lastName}`.trim();

  const projectFields: InfoField[] = [
    { label: t('contributionType'), value: state.shelterSelectionLabel },
    { label: t('shelter'), value: state.selectedShelterName || t('notSelected') },
    { label: t('amount'), value: `${state.amount}€` },
  ];

  const personalFields: InfoField[] = [
    { label: t('fullName'), value: fullName },
    { label: t('email'), value: state.personalInfo.email },
    { label: t('phone'), value: state.personalInfo.phone },
  ];

  return (
    <ConfirmationContainer>
      <Title size='display2' as='h1' weight='bold'>
        {t('title')}
      </Title>

      <Stack gap={16}>
        <InfoBlock>
          <Title size='md' as='h2' weight='semibold'>
            {t('summary')}
          </Title>
          {projectFields.map((field) => (
            <InfoRow key={field.label}>
              <InfoLabel>{field.label}</InfoLabel>
              <InfoValue>{field.value || '—'}</InfoValue>
            </InfoRow>
          ))}
        </InfoBlock>

        <Divider />

        <InfoBlock>
          {personalFields.map((field) => (
            <InfoRow key={field.label}>
              <InfoLabel>{field.label}</InfoLabel>
              <InfoValue>{field.value || '—'}</InfoValue>
            </InfoRow>
          ))}
        </InfoBlock>

        <Divider />

        <Checkbox
          label={t('agreement')}
          checked={agreedToTerms}
          onChange={handleCheckboxChange}
          error={showError ? t('agreementError') : undefined}
        />
      </Stack>
    </ConfirmationContainer>
  );
};
