import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import '@mantine/core/styles.css';
import { AppProviders } from '@/providers/AppProviders';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GoodRequst test task',
  description: 'by Dmytro Lukianenko',
  openGraph: {
    title: 'GoodRequst test task',
    description: 'by Dmytro Lukianenko',
    type: 'website',
    locale: 'sk_SK',
    siteName: 'GoodRequst',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoodRequst test task',
    description: 'by Dmytro Lukianenko',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang='sk' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
