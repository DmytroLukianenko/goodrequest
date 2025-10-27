import styled from '@emotion/styled';
import NextLink from 'next/link';

export const StyledLink = styled(NextLink)(() => ({
  color: 'var(--color-base-content-primary)',
  textDecoration: 'none',
  fontSize: '14px',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: 'var(--color-base-action-primary-default)',
  },
}));
