import styled from '@emotion/styled';

export const PersonalInfoContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing?.xxl,
  width: '100%',
}));

export const FormRow = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing?.lg,
  width: '100%',
  marginBottom: theme.spacing?.lg,

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
}));

export const FormField = styled.div({
  flex: 1,
});

export const FormFieldFull = styled.div(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing?.lg,
}));
