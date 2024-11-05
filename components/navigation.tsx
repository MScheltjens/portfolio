import { type NavProps } from "./header";
import { NavigationLink } from "./navigation-link";

export const Navigation = ({ translations, locale }: NavProps) => (
  <nav>
    <ul className="hidden items-center gap-10 font-light text-muted-foreground sm:flex md:gap-24">
      {Object.entries(translations)
        .filter(([key]) => key !== "home") // remove the home link from the navigation
        .map(([key, value]) => (
          <NavigationLink
            key={key}
            label={key}
            href={`/${locale}/${key === "home" ? "" : key}`}
            value={value}
          />
        ))}
    </ul>
  </nav>
);
