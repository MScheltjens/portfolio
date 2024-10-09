import '../globals.css';

import type { Metadata } from 'next';

import { type Locale, i18n } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';
import { Header } from '@/components/header';
import { Providers } from '@/components/providers';
import { Footer } from '@/components/footer';

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
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <Providers>
          <Header
            translations={{
              work: dictionary['navigation'].work,
              contact: dictionary['navigation'].contact
            }}
            locale={params.lang}
          />
          <main className="grow"> {children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
