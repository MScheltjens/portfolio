import { LocaleSwitcher } from './locale-switcher';
import { ModeToggler } from './mode-toggler';
import Link from 'next/link';

export const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
    <nav className="container flex max-w-4xl items-center justify-between">
      <div>
        <Link href="/" className="text-2xl font-bold">
          <h2 className="scroll-m-20 pb-2 pr-3 text-3xl font-semibold tracking-wide first:mt-0">
            MS<span className="text-accent">.</span>
          </h2>
        </Link>
      </div>

      <ul className="flex items-center gap-6 font-light text-muted-foreground sm:gap-10">
        <li className="transition-colors hover:text-accent">
          <Link href="/work">Work</Link>
        </li>
        <li className="transition-colors hover:text-accent">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex gap-2">
        <LocaleSwitcher />
        <ModeToggler />
      </div>
    </nav>
  </header>
);
