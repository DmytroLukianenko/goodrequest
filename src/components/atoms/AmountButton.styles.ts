import styled from '@emotion/styled';
import { Button } from '@mantine/core';

export const StyledAmountButton = styled(Button)(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    border: 'none',
    borderRadius: theme.radius?.sm,
    padding: `${theme.spacing?.md} ${theme.spacing?.xl}`,
    height: 'auto',
    ...typography?.md.medium,

    '&[data-active="true"]': {
      backgroundColor: colors?.base.action.primary.default,
      color: colors?.inverse.content.primary,

      '&:hover': {
        backgroundColor: colors?.base.action.primary.hover,
      },

      '&:active': {
        backgroundColor: colors?.base.action.primary.active,
      },

      '.mantine-Button-section[data-position="right"] img': {
        filter: 'brightness(0) saturate(100%) invert(100%)',
      },
    },

    '&[data-active="false"]': {
      backgroundColor: colors?.base.action.secondary.default,
      color: colors?.base.content.secondary,

      '&:hover': {
        backgroundColor: colors?.base.action.secondary.hover,
      },

      '&:active': {
        backgroundColor: colors?.base.action.secondary.active,
      },

      '.mantine-Button-section[data-position="right"] img': {
        filter: 'brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(500%) hue-rotate(180deg)',
      },
    },
  };
});
