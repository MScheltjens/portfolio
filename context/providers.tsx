'use client';

import { PropsWithChildren } from 'react';

import { ActiveSectionProvider } from './active-section-context';
import { ThemeContextProvider } from './theme-context';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeContextProvider>
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </ThemeContextProvider>
  );
};
