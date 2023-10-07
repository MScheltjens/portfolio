'use client';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView';
import { SKILLS } from '@/lib/data';

import { SectionHeading } from './section-heading';

export const Skills = () => {
  const { ref } = useSectionInView('skills', 0.5);
  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center'>
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {SKILLS.map((skill, i) => (
          <motion.li
            className='borderBlack rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80'
            key={i}
            variants={animationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

const animationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i } }),
};
