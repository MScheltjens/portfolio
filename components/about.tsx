'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView';

import { SectionHeading } from './section-heading';

export const About = () => {
  const { ref } = useSectionInView('about', 0.5);

  return (
    <motion.section id='about' ref={ref} className='mb-28 max-w-[55rem] scroll-mt-28 text-center' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      <SectionHeading>About me</SectionHeading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eligendi, quibusdam ipsam reiciendis perspiciatis vitae repellat reprehenderit consequatur vel. In magni reiciendis accusamus
        unde enim modi neque minima voluptatem ipsam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae omnis, magnam reprehenderit architecto explicabo adipisci atque autem nemo.
        Vero dicta ad maxime nulla quam. Itaque exercitationem maiores soluta excepturi illo?{' '}
      </p>
    </motion.section>
  );
};
