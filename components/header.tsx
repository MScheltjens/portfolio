import { LocaleSwitcher } from './locale-switcher';
import { ModeToggler } from './mode-toggler';
import Link from 'next/link';

export const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 flex p-2">
    <nav className="container mx-auto flex max-w-4xl flex-1 items-center justify-between p-3">
      <div>
        <ul className="flex items-center gap-3 text-foreground">
          <li>
            <Link href="/">
              <h2 className="scroll-m-20 border-b pb-2 pr-3 text-3xl font-semibold tracking-tight first:mt-0">
                MS <span className="text-green-400">.</span>
              </h2>
            </Link>
          </li>
          <li className="transition-colors hover:text-accent">
            <Link href="/work">Work</Link>
          </li>
          <li className="transition-colors hover:text-accent">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <ModeToggler />
        <LocaleSwitcher />
      </div>
    </nav>
  </header>
);
