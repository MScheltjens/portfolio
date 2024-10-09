import { Locale } from '@/i18/config';
import { LocaleSwitcher } from './locale-switcher';
import { ModeToggler } from './mode-toggler';
import Link from 'next/link';
import { HamburgerMenu } from './hamburger-menu';

type Props = {
  translations: { work: string; contact: string };
  locale: Locale;
};

export const Header = ({ translations: { work, contact }, locale }: Props) => (
  <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
    <nav className="container flex max-w-4xl items-center justify-between">
      <Link
        href={`/${locale}`}
        className="hidden text-2xl font-bold text-foreground sm:block"
      >
        <h2 className="scroll-m-20 pb-2 pr-3 text-3xl font-semibold tracking-wide first:mt-0">
          MS<span className="text-accent">.</span>
        </h2>
      </Link>

      <HamburgerMenu
        locale={locale}
        translations={{ work, contact }}
        className="sm:hidden"
      />

      <ul className="hidden items-center gap-6 font-light text-muted-foreground sm:flex sm:gap-10">
        <li className="transition-colors hover:text-accent">
          <Link href={`/${locale}/work`}>{work}</Link>
        </li>
        <li className="transition-colors hover:text-accent">
          <Link href={`/${locale}/contact`}>{contact}</Link>
        </li>
      </ul>

      <div className="flex">
        <LocaleSwitcher />
        <ModeToggler />
      </div>
    </nav>
  </header>
);
