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
    work: string;
    contact: string;
    home: string;
  };
};

export const HamburgerMenu = ({
  locale,
  className,
  translations: { home, work, contact }
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
          <Link href={`/${locale}/work`}>{work}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${locale}/contact`}>{contact}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
