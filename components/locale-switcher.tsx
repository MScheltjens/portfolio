'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale, i18n } from '@/i18/config';

export const LocaleSwitcher = () => {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      <ul className="flex gap-4">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
