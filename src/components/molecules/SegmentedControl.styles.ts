import styled from '@emotion/styled';
import { SegmentedControl } from '@mantine/core';

export const StyledSegmentedControl = styled(SegmentedControl)(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    width: '100%',
    backgroundColor: colors?.base.surface.secondary,
    border: `1px solid ${colors?.base.content.quintarny}`,
    borderRadius: theme.radius?.md,
    padding: theme.spacing?.xs,

    '.mantine-SegmentedControl-label': {
      ...typography?.sm.medium,
      height: '52px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px',
    },

    '.mantine-SegmentedControl-indicator': {
      backgroundColor: colors?.base.action.primary.default,
      border: `1px solid ${colors?.base.action.primary.default}`,
      borderRadius: theme.radius?.sm,
      height: '52px',
    },

    '.mantine-SegmentedControl-control[data-active] .mantine-SegmentedControl-label': {
      color: colors?.inverse.content.primary,
    },
  };
});
