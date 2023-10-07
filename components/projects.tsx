'use client';

import { PROJECTS } from '@/lib/data';

import { Project } from './project';
import { SectionHeading } from './section-heading';
import { useSectionInView } from '@/hooks/useSectionInView';
import { Fragment } from 'react';

export const Projects = () => {
  const { ref } = useSectionInView('projects');

  return (
    <section id='projects' ref={ref} className='mb-28 scroll-mt-28'>
      <SectionHeading>Projects</SectionHeading>
      <div className='mt-12'>
        {PROJECTS.map((project, i) => (
          <Fragment key={i}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};
