'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale, i18n } from '@/i18/config';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export const LocaleSwitcher = () => {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const currentLocale = pathName.split('/')[1] as Locale;

  return (
    <div>
      <ul className="flex gap-4">
        {i18n.locales.map((locale) => {
          return (
            <li
              key={locale}
              className={cn(
                buttonVariants({ size: 'icon' }),
                currentLocale === locale && 'hidden'
              )}
            >
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
