// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

import { NotFoundLayout } from "@/components/not-found-layout";
import { i18n } from "@/i18/config";
import "./globals.css";

export default function GlobalNotFound() {
  return <NotFoundLayout locale={i18n.defaultLocale} />;
}
