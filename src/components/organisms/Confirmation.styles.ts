import styled from '@emotion/styled';

export const ConfirmationContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing?.xxl,
  width: '100%',
}));

export const InfoBlock = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing?.md,
}));

export const InfoRow = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing?.md,
}));

export const InfoLabel = styled.span(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    ...typography?.md.regular,
    color: colors?.base.content.secondary,
  };
});

export const InfoValue = styled.span(({ theme }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography;

  return {
    ...typography?.md.semibold,
    color: colors?.base.content.primary,
    textAlign: 'right',
  };
});
