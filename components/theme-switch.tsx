'use client';

import { BsMoon, BsSun } from 'react-icons/bs';

import { useThemeContext } from '@/context/theme-context';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950'
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};
