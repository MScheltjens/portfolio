import type { Metadata } from 'next';
import '../globals.css';

import { i18n, type Locale } from '../../i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'Mathias S. | Web Developer',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
