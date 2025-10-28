import styled from '@emotion/styled';
import { AppShell, Container, Grid, Box } from '@mantine/core';

export const StyledAppShell = styled(AppShell)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.other?.colors?.base.surface.primary,
  padding: theme.spacing?.lg,
}));

export const StyledContainer = styled(Container)({
  height: '100%',
  display: 'flex',
  padding: 0,
  maxWidth: '1440px',
});

export const StyledGrid = styled(Grid)({
  width: '100%',
  margin: 0,
  minHeight: '100vh',
});

export const SingleGridCol = styled(Grid.Col)(({ theme }) => ({
  minHeight: '1024px',
  padding: theme.spacing?.xxl,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const ContentBox = styled(Box)<{ children?: React.ReactNode }>(({ theme }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  padding: theme.spacing?.lg,
}));
