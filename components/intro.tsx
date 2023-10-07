'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

import { useSectionInView } from '@/hooks/useSectionInView';

export const Intro = () => {
  const { ref } = useSectionInView('home');
  return (
    <section id='home' ref={ref} className='mb-28 h-screen scroll-mt-[100rem] pt-24 text-center sm:pt-32'>
      <div className='flex h-full w-full flex-col items-center justify-around'>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'tween',
                duration: 0.5,
              }}
            >
              <Image
                src='/me.jpeg'
                alt='Mathias portrait'
                width='192'
                height='192'
                quality='95'
                priority={true}
                className='h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl sm:h-52 sm:w-52'
              />
            </motion.div>
          </div>
        </div>

        <motion.h1 className='px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
          {`Hi! I'm `}
          <span className='font-bold'>Mathias. </span>
          {`I'm a `}
          <span className='font-bold'>Full-Stack developer</span> creating pleasing and practical <span className='italic'>user interfaces</span> with{' '}
          <span className='font-bold'>React and Next.js</span>
        </motion.h1>

        <motion.div
          className='text-large flex flex-col items-center justify-center gap-4 px-4 font-medium sm:flex-row'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Link
            href='#contact'
            className='group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105'
          >
            Contact me here <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' />
          </Link>

          <a
            className='group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-black/10 focus:scale-110 active:scale-105 dark:bg-white/10'
            href='/FSD-Mathias-Scheltjens.pdf'
            download
          >
            Download CV <HiDownload className='opacity-60 transition group-hover:translate-y-1' />
          </a>
          <div className='flex gap-2'>
            <a
              className='flex cursor-pointer  items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-black/10 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60'
              href='https://linkedin.com/in/mathias-scheltjens'
              target='_blank'
            >
              <BsLinkedin />
            </a>

            <a
              className='flex cursor-pointer  items-center gap-2 rounded-full bg-white p-3 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-black/10 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60'
              href='https://github.com/MScheltjens'
              target='_blank'
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
