import styled from '@emotion/styled';
import { Text as MantineText } from '@mantine/core';
import { type TextProps } from '@/components/atoms/Text';

export const StyledText = styled(MantineText)<TextProps>(({ theme, variant }) => {
  const colors = theme.other?.colors;
  const typography = theme.other?.typography?.md?.regular;

  const variantColors = {
    primary: colors?.base.content.primary,
    secondary: colors?.base.content.tertiary,
    accent: colors?.base.action.primary.default,
  };

  return {
    ...typography,
    color: variantColors[variant || 'primary'],
    margin: 0,
  };
});
