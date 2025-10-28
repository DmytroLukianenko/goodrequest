'use client';

import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Title } from '@/components/atoms';
import { FormInput, PhoneInput } from '@/components/molecules';
import { useFormContext } from '@/contexts/FormContext';
import { personalInfoSchema, type PersonalInfoFormData } from '@/validators/personalInfo.validator';
import { PersonalInfoContainer, FormRow, FormField, FormFieldFull } from './PersonalInfo.styles';
import { Box } from '@mantine/core';

type PersonalInfoProps = {
  onValidationChange?: (isValid: boolean) => void;
};

export const PersonalInfo: FC<PersonalInfoProps> = ({ onValidationChange }) => {
  const t = useTranslations('PersonalInfo');
  const { state, setPersonalInfo, registerTrigger } = useFormContext();

  const {
    control,
    formState: { errors, isValid },
    trigger,
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: state.personalInfo,
    mode: 'onChange',
  });

  useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid, onValidationChange]);

  useEffect(() => {
    registerTrigger(trigger);
  }, [registerTrigger, trigger]);

  const handleFieldChange = (field: keyof PersonalInfoFormData, value: string) => {
    setPersonalInfo({
      ...state.personalInfo,
      [field]: value,
    });
  };

  return (
    <PersonalInfoContainer>
      <Title size='display2' as='h2' weight='bold'>
        {t('title')}
      </Title>

      <div>
        <Box mb='md'>
          <Title size='md' as='h2' weight='semibold'>
            {t('aboutYou')}
          </Title>
        </Box>
        <FormRow>
          <FormField>
            <Controller
              name='firstName'
              control={control}
              render={({ field }) => (
                <FormInput
                  label={t('firstName')}
                  placeholder={t('firstNamePlaceholder')}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    handleFieldChange('firstName', value);
                  }}
                  error={errors.firstName?.message}
                />
              )}
            />
          </FormField>

          <FormField>
            <Controller
              name='lastName'
              control={control}
              render={({ field }) => (
                <FormInput
                  label={t('lastName')}
                  placeholder={t('lastNamePlaceholder')}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    handleFieldChange('lastName', value);
                  }}
                  error={errors.lastName?.message}
                />
              )}
            />
          </FormField>
        </FormRow>

        <FormFieldFull>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <FormInput
                label={t('email')}
                placeholder={t('emailPlaceholder')}
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  handleFieldChange('email', value);
                }}
                error={errors.email?.message}
                type='email'
              />
            )}
          />
        </FormFieldFull>

        <FormFieldFull>
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <PhoneInput
                label={t('phone')}
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  handleFieldChange('phone', value);
                }}
                error={errors.phone?.message}
                defaultCountry='SK'
              />
            )}
          />
        </FormFieldFull>
      </div>
    </PersonalInfoContainer>
  );
};
