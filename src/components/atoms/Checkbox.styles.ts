import styled from '@emotion/styled';

export const StyledCheckboxWrapper = styled.div(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing?.xs,

    '.mantine-Checkbox-root': {
      display: 'flex',
      alignItems: 'center',
    },

    '.mantine-Checkbox-label': {
      ...typography?.md.regular,
      color: colors?.base.content.primary,
      cursor: 'pointer',
    },

    '.mantine-Checkbox-input': {
      cursor: 'pointer',
      border: `2px solid ${colors?.base.action.primary.default}`,
      backgroundColor: 'transparent',
      borderRadius: '4px',

      '&:hover': {
        borderColor: colors?.base.action.primary.default,
      },

      '&:checked': {
        backgroundColor: colors?.base.action.primary.bg,
        borderColor: colors?.base.action.primary.default,

        '&::before': {
          backgroundColor: colors?.base.action.primary.bg,
        },
      },
    },

    '.mantine-Checkbox-icon': {
      color: colors?.base.action.primary.default,
    },

    '.error-message': {
      ...typography?.sm.regular,
      color: colors?.base.state.error.fg,
    },

    '&[data-error="true"]': {
      '.mantine-Checkbox-input': {
        borderColor: colors?.base.state.error.fg,
        backgroundColor: colors?.base.state.error.bg,
      },

      '.mantine-Checkbox-label': {
        color: colors?.base.state.error.fg,
      },
    },
  };
});
