import { LocaleSwitcher } from './locale-switcher';
import { ModeToggler } from './mode-toggler';
import Link from 'next/link';

export const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 flex p-2">
    <nav className="container mx-auto flex max-w-4xl flex-1 items-center justify-between p-3">
      <ul className="flex items-center gap-6 text-foreground">
        <li>
          <Link href="/">
            <h2 className="scroll-m-20 pb-2 pr-3 text-3xl font-semibold tracking-wide first:mt-0">
              MS<span className="text-accent">.</span>
            </h2>
          </Link>
        </li>
        <div className="flex gap-5 text-lg">
          <li className="transition-colors hover:text-accent">
            <Link href="/work">Work</Link>
          </li>
          <li className="transition-colors hover:text-accent">
            <Link href="/contact">Contact</Link>
          </li>
        </div>
      </ul>

      <div className="flex gap-2">
        <LocaleSwitcher />
        <ModeToggler />
      </div>
    </nav>
  </header>
);
