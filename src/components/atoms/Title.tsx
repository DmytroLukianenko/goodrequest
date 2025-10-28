import { FC, ReactNode } from 'react';
import { useMantineTheme } from '@mantine/core';
import { StyledTitle } from './Title.styles';
import { typography } from '@/styles/typography';

type TypographySize = keyof typeof typography;
type TypographyWeight = keyof (typeof typography)[TypographySize];

type TitleProps = {
  children: ReactNode;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title: FC<TitleProps> = ({ children, size = 'xl', weight = 'regular', color, as = 'h1' }) => {
  const theme = useMantineTheme();
  const titleColor = color || theme.other.colors.base.content.primary;

  return (
    <StyledTitle as={as} size={size} weight={weight} color={titleColor}>
      {children}
    </StyledTitle>
  );
};
