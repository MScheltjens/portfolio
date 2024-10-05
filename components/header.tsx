import { Linkedin, Github } from 'lucide-react';
import { IconLink } from './icon-link';
import { LocaleSwitcher } from './locale-switcher';
import { ModeToggler } from './mode-toggler';
import Link from 'next/link';

export const Header = () => (
  // <header className="flex p-5">
  //   <nav className="container mx-auto flex flex-1 items-center justify-between gap-2">
  // <div className="flex gap-2">
  //   <IconLink href="http://www.linkedin.com">
  //     <Linkedin />
  //   </IconLink>
  //   <IconLink href="http://www.github.com">
  //     <Github />
  //   </IconLink>
  // </div>
  // <ul className="flex gap-2">
  //   <li>
  //     <Link href="/past">Past</Link>
  //   </li>
  //   <li>
  //     <Link href="/past">Present</Link>
  //   </li>
  //   <li>
  //     <Link href="/past">Future</Link>
  //   </li>
  // </ul>
  // <div className="flex gap-2">
  //   <ModeToggler />
  //   <LocaleSwitcher />
  // </div>
  //   </nav>
  // </header>
  <header className="fixed inset-x-0 top-0 z-50 flex p-2">
    <nav className="container mx-auto flex max-w-4xl flex-1 items-center justify-between p-3">
      <div>
        <ul className="flex gap-3 text-foreground">
          <li className="transition-colors hover:text-accent">
            <Link href="/">Home</Link>
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
        <IconLink href="http://www.linkedin.com">
          <Linkedin />
        </IconLink>
        <IconLink href="http://www.github.com">
          <Github />
        </IconLink>
        <ModeToggler />
        <LocaleSwitcher />
      </div>
    </nav>
  </header>
);
