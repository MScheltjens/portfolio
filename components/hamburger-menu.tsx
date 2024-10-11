import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import Link from 'next/link';
import { NavProps } from './header';

export const HamburgerMenu = ({ locale, translations }: NavProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild className="md:hidden">
      <Button variant="link" size="icon">
        <MenuIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-fit">
      <DropdownMenuItem>
        <Link href={`/${locale}`}>{translations['home']}</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href={`/${locale}/about`}>{translations['about']}</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href={`/${locale}/projects`}>{translations['projects']}</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href={`/${locale}/contact`}>{translations['contact']}</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
