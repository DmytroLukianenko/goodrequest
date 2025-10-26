'use client';

import { createTheme, MantineProvider } from '@mantine/core';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme as themeOverride, cssVariablesResolver } from '@/styles/theme';

const theme = createTheme(themeOverride);

type AppTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </MantineProvider>
  );
}
