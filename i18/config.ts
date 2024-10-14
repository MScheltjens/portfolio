export const i18n = {
  defaultLocale: 'en',
  locales: ['nl', 'en', 'fr', 'de']
} as const;

export type Locale = (typeof i18n)['locales'][number];
