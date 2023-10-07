'use client';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SKILLS } from '@/lib/data';

import { SectionHeading } from './section-heading';

export const Skills = () => {
  const { ref } = useSectionInView('skills', 0.5);
  return (
    <section id='skills' ref={ref} className='mb-28 scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading>Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg'>
        {SKILLS.map((skill) => (
          <li key={skill} className='rounded-full border border-black/10 bg-white px-4 py-1'>
            <p className=''>{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
