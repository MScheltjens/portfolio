'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { LINKS } from '@/lib/data';
import { cn } from '@/utils/cn';
import { useState } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  return(
  <nav className='fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
    <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
      {LINKS.map(({ name, hash }) => (
        <motion.li key={hash} className='relative flex h-3/4 items-center justify-center' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Link href={hash} onClick={() => setActiveSection(name)} className={cn('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950', {
            'text-gray-950': activeSection === name,
          })}>
            {name}
            {activeSection === name &&  <span className='bg-gray-100 rounded-full absolute inset-0 -z-10'></span>}
           
          </Link>
        </motion.li>
      ))}
    </ul>
  </nav>
)}
