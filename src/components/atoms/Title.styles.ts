import styled from '@emotion/styled';
import { typography } from '@/styles/typography';

type TypographySize = keyof typeof typography;
type TypographyWeight = keyof (typeof typography)[TypographySize];

export const StyledTitle = styled.h1<{ size: TypographySize; weight: TypographyWeight; color: string }>(({ size, weight, color }) => ({
  margin: 0,
  ...typography[size][weight],
  color,
}));
