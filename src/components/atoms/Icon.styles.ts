import Image from 'next/image';
import styled from '@emotion/styled';

export const StyledImage = styled(Image)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.2s ease',

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));
