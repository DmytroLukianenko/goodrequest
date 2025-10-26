import styled from '@emotion/styled';
import { typography } from '@/styles/typography';

type TypographySize = keyof typeof typography;

export const StyledTitle = styled.h1<{ size: TypographySize; color: string }>(({ size, color }) => ({
  margin: 0,
  ...typography[size].semibold,
  color,
}));
