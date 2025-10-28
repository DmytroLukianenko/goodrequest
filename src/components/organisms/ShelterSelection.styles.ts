import styled from '@emotion/styled';

export const ShelterSelectionContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing?.xxl,
  width: '100%',
}));

export const LabelText = styled.span({
  fontSize: 14,
  fontWeight: 500,
  color: 'inherit',
});

export const OptionalText = styled.span(({ theme }) => ({
  fontSize: 13,
  color: theme.other?.colors?.base?.content?.quaternary,
}));
