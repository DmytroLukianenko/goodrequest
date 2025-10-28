import styled from '@emotion/styled';

export const StyledFooter = styled.footer(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginTop: 'auto',
  padding: `${theme.spacing?.lg} 0`,
  borderTop: `1px solid ${theme.other?.colors?.base.content.quintarny}`,

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing?.lg,
    padding: `${theme.spacing?.md} 0`,
  },
}));

export const IconsContainer = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing?.md,
  alignItems: 'center',
}));

export const LinksContainer = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing?.lg,
  alignItems: 'center',
}));

export const ActionsRow = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing?.xl,
  alignItems: 'center',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: theme.spacing?.md,
    alignItems: 'center',
  },
}));
