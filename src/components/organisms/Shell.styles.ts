import styled from '@emotion/styled';
import { AppShell, Container, Grid, Box } from '@mantine/core';

export const StyledAppShell = styled(AppShell)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.other?.colors?.base.surface.primary,
  padding: '20px',
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

export const LeftGridCol = styled(Grid.Col)({
  minHeight: '100vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ContentBox = styled(Box)<{ children?: React.ReactNode }>({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
});

export const RightGridCol = styled(Grid.Col)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing?.md,
  minHeight: '100vh',
  overflow: 'hidden',

  img: {
    height: '100%',
    width: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
    borderRadius: theme.radius?.lg,
    display: 'block',
  },
}));
