import styled from '@emotion/styled';

export const ShelterSelectionContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing?.xxl,
  width: '100%',
  minWidth: 0, // Allow shrinking below content size

  '@media (max-width: 768px)': {
    gap: theme.spacing?.lg,
  },
}));

export const LabelText = styled.span({
  fontSize: 14,
  fontWeight: 500,
  color: 'inherit',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
});

export const OptionalText = styled.span(({ theme }) => ({
  fontSize: 13,
  color: theme.other?.colors?.base?.content?.quaternary,
}));
