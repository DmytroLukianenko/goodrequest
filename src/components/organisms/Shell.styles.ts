import styled from '@emotion/styled';
import { AppShell, Container, Grid, Box } from '@mantine/core';

export const StyledAppShell = styled(AppShell)({
  minHeight: '100vh',
  backgroundColor: 'var(--color-base-surface-primary)',
  padding: 'var(--mantine-spacing-md)',
});

export const StyledContainer = styled(Container)({
  height: '100%',
  display: 'flex',
  padding: 0,
});

export const StyledGrid = styled(Grid)({
  width: '100%',
  margin: 0,
  minHeight: '100vh',
});

export const LeftGridCol = styled(Grid.Col)({
  minHeight: '100vh',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ContentBox = styled(Box)<{ children?: React.ReactNode }>({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const RightGridCol = styled(Grid.Col)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--mantine-spacing-md)',
  minHeight: '100vh',
  overflow: 'hidden',

  img: {
    height: '100%',
    width: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
    borderRadius: 'var(--mantine-radius-lg)',
    display: 'block',
  },
});
