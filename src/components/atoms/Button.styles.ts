import styled from '@emotion/styled';
import { Button as MantineButton } from '@mantine/core';
import { type ButtonProps } from '@/components/atoms/Button';

export const StyledButton = styled(MantineButton)<ButtonProps>(({ theme, variant }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  const isPrimary = variant === 'primary';

  return {
    width: '180px',
    height: '56px',
    borderRadius: theme.radius?.sm,
    padding: `${theme.spacing?.md} ${theme.spacing?.lg}`,
    gap: theme.spacing?.sm,
    border: 'none',
    ...typography?.md.medium,

    backgroundColor: isPrimary ? colors?.base.action.primary.default : colors?.base.action.secondary.default,

    color: isPrimary ? colors?.inverse.content.primary : colors?.base.content.secondary,

    '&:hover:not([disabled])': {
      backgroundColor: isPrimary ? colors?.base.action.primary.hover : colors?.base.action.secondary.hover,
    },

    '&:active:not([disabled])': {
      backgroundColor: isPrimary ? colors?.base.action.primary.active : colors?.base.action.secondary.active,
    },

    '&[disabled]': {
      backgroundColor: isPrimary ? colors?.base.action.primary.disable : colors?.base.action.secondary.disable,
      opacity: 0.9,
      cursor: 'not-allowed',
    },
  };
});
