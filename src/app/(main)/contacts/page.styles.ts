import styled from '@emotion/styled';

export const BackButton = styled.button(({ theme }) => ({
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

export const ImageWrapper = styled.div(({ theme }) => ({
  width: '100%',
  borderRadius: theme.radius?.xl,
  overflow: 'hidden',
  marginTop: theme.spacing?.xxl,

  img: {
    display: 'block',
    borderRadius: theme.radius?.xl,
  },
}));
