import "../globals.css";

import type { Metadata } from "next";
import { i18n } from "@/i18/config";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/i18/get-dictionary";

// build all pages for all locales at build time
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Mathias S. | Portfolio",
};

export default async function RootLayout({ params, children }: LayoutProps) {
  const { lang } = await params;
  const { navigation } = await getDictionary(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col antialiased">
            <Header translations={{ ...navigation }} locale={lang} />
            <main className="container max-w-5xl grow py-24 md:py-36 lg:max-w-6xl">
              {children}
            </main>
            <Footer />
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              className={cn(
                "mask-image:radial-gradient(500px_circle_at_center,white)] fixed inset-0 z-[-1] h-full w-full overflow-hidden",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
          <div className="grow">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
