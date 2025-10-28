'use client';

import { createTheme, MantineProvider } from '@mantine/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer position='bottom-right' autoClose={false} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable theme='light' />
        <EmotionThemeProvider theme={theme}>
          <FormProvider>{children}</FormProvider>
        </EmotionThemeProvider>
      </MantineProvider>
    </QueryProvider>
  );
}
