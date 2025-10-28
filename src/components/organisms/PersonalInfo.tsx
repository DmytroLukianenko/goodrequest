'use client';

import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '@/components/atoms';
import { FormInput, PhoneInput } from '@/components/molecules';
import { useFormContext } from '@/contexts/FormContext';
import { personalInfoSchema, type PersonalInfoFormData } from '@/validators/personalInfo.validator';
import { PersonalInfoContainer, FormRow, FormField, FormFieldFull } from './PersonalInfo.styles';

type PersonalInfoProps = {
  onValidationChange?: (isValid: boolean) => void;
};

export const PersonalInfo: FC<PersonalInfoProps> = ({ onValidationChange }) => {
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
      <Title size='display2' as='h2'>
        Potrebujeme od Vás zopár informácií
      </Title>

      <div>
        <Title size='md' as='h3'>
          O vás
        </Title>

        <FormRow>
          <FormField>
            <Controller
              name='firstName'
              control={control}
              render={({ field }) => (
                <FormInput
                  label='Meno'
                  placeholder='Zadajte Vaše meno'
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
                  label='Priezvisko'
                  placeholder='Zadajte Vaše priezvisko'
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
                label='E-mailová adresa'
                placeholder='Zadajte Váš e-mail'
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
                label='Telefónne číslo'
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
