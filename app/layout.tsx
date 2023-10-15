import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import { Footer, Header } from '@/components';
import { ThemeSwitch } from '@/components';
import { Providers } from '@/context/providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mathias Scheltjens' Portfolio",
  description: 'A summary about me and the work I have done',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} relative bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50  dark:text-opacity-80`}>
        <div className='absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]' />
        <div className='absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]' />
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right' />
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
