import styled from '@emotion/styled';
import { Stepper as MantineStepper } from '@mantine/core';

export const StyledStepper = styled(MantineStepper)(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    width: '100%',

    '.mantine-Stepper-stepLabel': {
      ...typography?.md.regular,
    },
    '.mantine-Stepper-stepIcon': {
      ...typography?.md.regular,
    },
    '.mantine-Stepper-step .mantine-Stepper-stepIcon': {
      backgroundColor: 'transparent',
      borderColor: colors?.base.content.quintarny,
      color: colors?.base.content.quintarny,
    },
    '.mantine-Stepper-step[data-progress] .mantine-Stepper-stepIcon': {
      backgroundColor: colors?.base.action.primary.default,
      borderColor: colors?.base.action.primary.default,
      color: colors?.base.surface.primary,
    },
    '.mantine-Stepper-step[data-completed] .mantine-Stepper-stepIcon': {
      backgroundColor: 'transparent',
      borderColor: colors?.base.action.primary.default,
      color: colors?.base.action.primary.default,
    },
    '.mantine-Stepper-separator': {
      backgroundColor: colors?.base.content.quintarny,
    },
    '.mantine-Stepper-separatorActive': {
      backgroundColor: colors?.base.action.primary.default,
    },
  };
});
