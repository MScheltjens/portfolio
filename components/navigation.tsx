import { type Locale } from "@/i18/config";
import { type Dictionary } from "@/i18/get-dictionary";
import Link from "next/link";

export const Navigation = ({
  locale,
  translations,
}: {
  locale: Locale;
  translations: Dictionary["navigation"];
}) => (
  <nav>
    <ul className="hidden items-center gap-6 font-light text-muted-foreground sm:flex sm:gap-10">
      <li className="transition-colors hover:text-primary">
        <Link href={`/${locale}`}>{translations.home}</Link>
      </li>
      <li className="transition-colors hover:text-primary">
        <Link href={`/${locale}/about`}>{translations.about}</Link>
      </li>
      <li className="transition-colors hover:text-primary">
        <Link href={`/${locale}/projects`}>{translations.projects}</Link>
      </li>
      <li className="transition-colors hover:text-primary">
        <Link href={`/${locale}/contact`}>{translations.contact}</Link>
      </li>
    </ul>
  </nav>
);
