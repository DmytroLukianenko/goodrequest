import styled from '@emotion/styled';
import { NumberInput } from '@mantine/core';

export const StyledAmountInput = styled(NumberInput)(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    '.mantine-NumberInput-wrapper': {
      width: '160px',
      padding: theme.spacing?.sm,
    },

    '.mantine-NumberInput-input': {
      border: 'none',
      borderRadius: 0,
      borderBottom: `2px solid ${colors?.base.action.primary.default}`,
      textAlign: 'center',
      ...typography?.display2.regular,
      color: colors?.base.content.quaternary,
      backgroundColor: 'transparent',
      height: 'auto',
      minHeight: 'auto',

      '&:focus': {
        borderBottom: `2px solid ${colors?.base.action.primary.default}`,
      },
    },

    '.mantine-NumberInput-section': {
      transform: 'translate(-10px, 10px)',
      pointerEvents: 'none',
    },
  };
});
