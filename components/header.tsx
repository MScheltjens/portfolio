import { type Locale } from "@/i18/config";
import { LocaleSwitcher } from "./locale-switcher";
import { ModeToggler } from "./mode-toggler";
import Link from "next/link";
import { type Dictionary } from "@/i18/get-dictionary";
import { HamburgerMenu } from "./hamburger-menu";

export type NavProps = {
  translations: Dictionary["navigation"];
  locale: Locale;
};

export const Header = ({ translations, locale }: NavProps) => (
  <header className="fixed inset-x-0 top-0 z-50 border border-b-primary bg-background/75 py-2 backdrop-blur-sm lg:py-4">
    <div className="max-w-8xl container flex items-center justify-between">
      <h2 className="hidden scroll-m-20 pb-2 pr-3 text-3xl font-semibold tracking-wide first:mt-0 md:block">
        MS<span className="text-primary">_</span>
      </h2>

      <HamburgerMenu locale={locale} translations={translations} />

      <nav>
        <ul className="hidden items-center gap-6 font-light text-muted-foreground sm:flex sm:gap-10">
          <li className="transition-colors hover:text-primary">
            <Link href={`/${locale}`}>{translations.home}</Link>
          </li>
          <li className="transition-colors hover:text-primary">
            <Link href={`/${locale}/about`}>{translations.about}</Link>
          </li>
          <li className="transition-colors hover:text-primary">
            <Link href={`/${locale}/projects`}>{translations.projects}</Link>
          </li>
          <li className="transition-colors hover:text-primary">
            <Link href={`/${locale}/contact`}>{translations.contact}</Link>
          </li>
        </ul>
      </nav>

      <div className="flex">
        <LocaleSwitcher />
        <ModeToggler />
      </div>
    </div>
  </header>
);
