"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "../ui/sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
  >
    {children}
    <ToastProvider />
  </ThemeProvider>
);

const ToastProvider = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      closeButton
    />
  );
};
