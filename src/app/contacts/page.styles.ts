import styled from '@emotion/styled';

export const ImageWrapper = styled.div(({ theme }) => ({
  width: '100%',
  maxWidth: '1120px',
  height: '380px',
  margin: `${theme.spacing?.xxl} auto 0`,
  borderRadius: theme.radius?.xl,
  overflow: 'hidden',

  img: {
    display: 'block',
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    borderRadius: theme.radius?.xl,
  },

  '@media (max-width: 1200px)': {
    maxWidth: '100%',
    padding: `0 ${theme.spacing?.lg}`,
  },

  '@media (max-width: 768px)': {
    padding: `0 ${theme.spacing?.md}`,
    height: '280px',

    img: {
      height: '280px',
    },
  },
}));
