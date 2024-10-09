import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import Link from 'next/link';
import { Locale } from '@/i18/config';

type Props = {
  locale: Locale;
  className?: string;
  translations: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
};

export const HamburgerMenu = ({
  locale,
  className,
  translations: { home, about, projects, contact }
}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="link" size="icon">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-fit">
        <DropdownMenuItem>
          <Link href={`/${locale}`}>{home}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${locale}/about`}>{about}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${locale}/projects`}>{projects}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${locale}/contact`}>{contact}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
