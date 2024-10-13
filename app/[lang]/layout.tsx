import '../globals.css';

import type { Metadata } from 'next';

import { i18n, type Locale } from '@/i18/config';

import { Providers } from '@/components/providers';

// build all pages for all locales at build time
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'Mathias S. | Portfolio'
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="grow">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
