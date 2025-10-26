import { FC, ReactNode } from 'react';
import { useMantineTheme } from '@mantine/core';
import { StyledTitle } from './Title.styles';
import { typography } from '@/styles/typography';

type TypographySize = keyof typeof typography;

type TitleProps = {
  children: ReactNode;
  size?: TypographySize;
  color?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title: FC<TitleProps> = ({ children, size = 'xl', color, as = 'h1' }) => {
  const theme = useMantineTheme();
  const titleColor = color || theme.other.colors.base.content.primary;

  return (
    <StyledTitle as={as} size={size} color={titleColor}>
      {children}
    </StyledTitle>
  );
};
