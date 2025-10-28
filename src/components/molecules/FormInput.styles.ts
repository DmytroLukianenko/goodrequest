import styled from '@emotion/styled';
import { TextInput } from '@mantine/core';

export const StyledTextInput = styled(TextInput)(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    '.mantine-TextInput-label': {
      ...typography?.sm.medium,
      color: colors?.base.content.primary,
      marginBottom: theme.spacing?.sm,
    },

    '.mantine-TextInput-input': {
      ...typography?.md.regular,
      backgroundColor: colors?.base.surface.tertiary,
      border: `2px solid ${colors?.base.surface.tertiary}`,
      borderRadius: theme.radius?.sm,
      padding: theme.spacing?.md,
      height: 'auto',

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

    '.mantine-TextInput-error': {
      ...typography?.sm.regular,
      color: colors?.base.state.error.fg,
      marginTop: theme.spacing?.xs,
    },

    '&[data-error="true"] .mantine-TextInput-input': {
      borderColor: colors?.base.state.error.fg,
    },

    '&[data-success="true"] .mantine-TextInput-input': {
      borderColor: colors?.base.state.success.fg,
    },
  };
});
