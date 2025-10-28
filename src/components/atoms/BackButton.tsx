'use client';

import { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';

const StyledButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing?.sm,
  background: 'none',
  border: 'none',
  color: theme.other?.colors?.base.action.primary.default,
  cursor: 'pointer',
  padding: 0,
  ...theme.other?.typography?.md?.medium,
  transition: 'opacity 0.2s ease',

  '&:hover': {
    opacity: 0.8,
  },

  '&:focus-visible': {
    outline: `2px solid ${theme.other?.colors?.base.action.primary.default}`,
    outlineOffset: '2px',
    borderRadius: '2px',
  },
}));

type BackButtonProps = {
  children: ReactNode;
  href?: string;
};

export const BackButton: FC<BackButtonProps> = ({ children, href = '/' }) => {
  const router = useRouter();

  return (
    <StyledButton onClick={() => router.push(href)}>
      {children}
    </StyledButton>
  );
};
