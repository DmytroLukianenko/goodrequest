'use client';

import { createTheme, MantineProvider } from '@mantine/core';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme as themeOverride, cssVariablesResolver } from '@/styles/theme';
import { QueryProvider } from './QueryProvider';
import { FormProvider } from '@/contexts/FormContext';

const theme = createTheme(themeOverride);

type AppTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <EmotionThemeProvider theme={theme}>
          <FormProvider>{children}</FormProvider>
        </EmotionThemeProvider>
      </MantineProvider>
    </QueryProvider>
  );
}
