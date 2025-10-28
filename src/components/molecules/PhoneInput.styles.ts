import styled from '@emotion/styled';

export const StyledPhoneInputWrapper = styled.div(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing?.sm,
    width: '100%',

    '.PhoneInput': {
      display: 'flex',
      gap: theme.spacing?.sm,
    },

    '.PhoneInputCountry': {
      width: '64px',
      height: '48px',
      padding: theme.spacing?.sm,
      backgroundColor: colors?.base.surface.tertiary,
      border: `2px solid ${colors?.base.surface.tertiary}`,
      borderRadius: theme.radius?.sm,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        borderColor: colors?.base.action.primary.default,
      },

      '&:focus': {
        borderColor: colors?.base.action.primary.default,
      },

      '&:active': {
        borderColor: colors?.base.action.primary.active,
      },
    },

    '.PhoneInputCountryIcon': {
      width: '32px !important',
      height: '24px !important',
      boxShadow: 'none !important',
      border: 'none !important',
      background: 'none !important',
    },

    '.PhoneInputInput': {
      ...typography?.md.regular,
      flex: 1,
      height: '48px',
      padding: theme.spacing?.md,
      backgroundColor: colors?.base.surface.tertiary,
      border: `2px solid ${colors?.base.surface.tertiary}`,
      borderRadius: theme.radius?.sm,
      color: colors?.base.content.primary,
      outline: 'none',

      '&::placeholder': {
        ...typography?.md.regular,
        color: colors?.base.content.quaternary,
      },

      '&:hover': {
        borderColor: colors?.base.action.primary.default,
      },

      '&:focus': {
        borderColor: colors?.base.action.primary.default,
      },

      '&:active': {
        borderColor: colors?.base.action.primary.active,
      },
    },

    '&[data-error="true"]': {
      '.PhoneInputCountry, .PhoneInputInput': {
        borderColor: colors?.base?.state?.error?.fg,
      },
    },
  };
});

export const StyledLabel = styled.label(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    ...typography?.sm.medium,
    color: colors?.base.content.secondary,
  };
});

export const StyledErrorMessage = styled.span(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    ...typography?.sm.regular,
    color: colors?.base?.state?.error?.fg,
    marginTop: theme.spacing?.xs,
  };
});
