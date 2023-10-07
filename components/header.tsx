'use client';
import { motion } from 'framer-motion';

import { Navbar } from './navbar';

export const Header = () => (
  <header className='relative z-[999]'>
    <motion.div
      className='fixed left-1/2 top-0 h-[4.5rem] w-full min-w-[48rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
    ></motion.div>
    <Navbar />
  </header>
);
