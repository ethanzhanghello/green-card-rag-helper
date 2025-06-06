import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Green Card Eligibility Screener',
  description: 'Determine which U.S. green card category you may qualify for. Available in English and Chinese.',
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params: { locale } }: Props) {
  // Default to English if locale is not supported
  const supportedLocales = ['en', 'zh'];
  const currentLocale = supportedLocales.includes(locale) ? locale : 'en';
  
  const messages = (await import(`@/messages/${currentLocale}.json`)).default;

  return (
    <html lang={currentLocale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 