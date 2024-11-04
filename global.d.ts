import { type Locale } from "./i18/config";

export {};

declare global {
  type TParams = Promise<{
    lang: Locale;
  }>;

  export type PageProps<T = object> = T & {
    params: TParams;
  };

  export type LayoutProps<T = Readonly<object>> = T &
    Readonly<{
      params: TParams;
      children: React.ReactNode;
    }>;
}
