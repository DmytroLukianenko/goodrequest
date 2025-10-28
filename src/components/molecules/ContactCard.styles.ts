import styled from '@emotion/styled';
import { Flex, type FlexProps } from '@mantine/core';
import NextLink from 'next/link';
import { typography } from '@/styles/typography';

export const CardContainer = styled(Flex)<FlexProps>(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing?.lg,
  alignItems: 'center',
  textAlign: 'center',
}));

export const IconWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '10px',
  backgroundColor: theme.other?.colors?.base.action.primary.bg10,
  color: theme.other?.colors?.base.action.primary.default,
}));

export const ContentWrapper = styled(Flex)<FlexProps>(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing?.sm,
  alignItems: 'center',
}));

export const TitleText = styled.div(({ theme }) => ({
  ...typography.xl.semibold,
  color: theme.other?.colors?.base.content.primary,
}));

export const DescriptionText = styled.div(({ theme }) => ({
  ...typography.md.regular,
  color: theme.other?.colors?.base.content.tertiary,
}));

export const LinkText = styled(NextLink)(({ theme }) => ({
  ...typography.md.medium,
  color: theme.other?.colors?.base.action.primary.default,
  textDecoration: 'none',
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
