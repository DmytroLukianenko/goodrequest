import styled from '@emotion/styled';
import { SimpleGrid } from '@mantine/core';

export const ContactInfoGrid = styled(SimpleGrid)(({ theme }) => ({
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing?.xxl,
  width: '100%',
  padding: theme.spacing?.lg,
  justifyItems: 'center',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    padding: theme.spacing?.md,
  },
}));
