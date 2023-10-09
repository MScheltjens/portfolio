import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

// internal links

export const LINKS = [
  { name: 'home', hash: '#home' },
  { name: 'about', hash: '#about' },
  { name: 'projects', hash: '#projects' },
  { name: 'skills', hash: '#skills' },
  { name: 'experience', hash: '#experience' },
  { name: 'contact', hash: '#contact' },
] as const;

// projects

export const PROJECTS = [
  {
    title: 'Stad Antwerpen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto repellendus illo earum illum ea quibusdam labore impedit incidunt maiores!',
    tags: ['Next.js', 'React', 'TypeScript', 'Jest', 'CSS-modules', 'redux', 'Next-auth'],
    imgUrl: '',
  },
  {
    title: 'DRG Supermarkten',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto repellendus illo earum illum ea quibusdam labore impedit incidunt maiores!',
    tags: ['React.js', 'TypeScript', 'Vite', 'React-Query', 'styled-components', 'Zustand', 'React-query'],
    imgUrl: '',
  },
  {
    title: "Tour d'icapps",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto repellendus illo earum illum ea quibusdam labore impedit incidunt maiores!',
    tags: ['React.js', 'Firebase', 'TypeScript', 'React-hook-form', 'React-query'],
    imgUrl: '',
  },
  {
    title: 'VDAB - rijbewijs proefexamen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto repellendus illo earum illum ea quibusdam labore impedit incidunt maiores!',
    tags: ['React.js', 'TypeScript', 'Redux', 'React-Query'],
    imgUrl: '',
  },
  {
    title: 'NRJ Travel',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto repellendus illo earum illum ea quibusdam labore impedit incidunt maiores!',
    tags: ['Next.js', 'React', 'TypeScript', 'SCSS', 'React-Query', 'Next-auth', 'React-hook-form', 'Zod'],
    imgUrl: '',
  },
  {
    title: 'Lab Gizmo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto repellendus illo earum illum ea quibusdam labore impedit incidunt maiores!',
    tags: ['Nextjs', 'React', 'TypeScript', 'TailwindCSS', 'Next-auth', 'React-hook-form', 'Zod', 'Zustand', 'Server-actions'],
    imgUrl: '',
  },
] as const;

export const SKILLS = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'PostgreSQL',
  'Redux',
  'Express',
  'Framer Motion',
  'AuthO',
  'Zod',
  'React-hook-form',
  'React-query',
  'Jest',
  'React-testing-library',
  'Next.js Server-actions',
] as const;

export const EXPERIENCE = [
  {
    title: 'Full Stack Developer (internship)',
    location: 'Yellow Jersey, Kontich',
    description: 'jkflmsaqdqf fdsqjklmj fdjklmq jklmjlmq jklmjklmq jkomjklmqsf kjlmjklmq jklmjklmj',
    icon: React.createElement(LuGraduationCap),
    date: 'Feb - May 2022',
    type: 'education',
  },
  {
    title: 'Full Stack Developer Graduation',
    location: 'iCapps, Antwerp',
    description: 'jkflmsaqdqf fdsqjklmj fdjklmq jklmjlmq jklmjklmq jkomjklmqsf kjlmjklmq jklmjklmj',
    icon: React.createElement(LuGraduationCap),
    date: 'Aug 2022',
    type: 'education',
  },
  {
    title: 'Frontend Web(App) Developer',
    location: 'iCapps, Antwerp',
    description: 'jkfldmsjfgksqlfm fjkqsdjmgjsdqklmfjdkslqfgjdlskj fjlkds fdqfsfkld fdsqfdq',
    icon: React.createElement(FaReact),
    date: 'Aug 2022 - Aug 2023',
    type: 'work',
  },
] as const;
