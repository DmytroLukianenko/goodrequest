import styled from '@emotion/styled';
import { Select } from '@mantine/core';

export const StyledSearchSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  '.mantine-Select-wrapper': {
    width: '100%',
  },
  '.mantine-Select-input': {
    backgroundColor: theme.other?.colors?.base.surface.tertiary,
    borderRadius: 8,
    borderColor: theme.other?.colors?.base.surface.tertiary,
  },
  '.mantine-Select-root': {
    borderRadius: 8,
    border: `1px solid ${theme.other?.colors?.base.content.quintarny}`,
  },
}));
