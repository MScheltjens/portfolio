'use client';

import { Fragment } from 'react';

import { useSectionInView } from '@/hooks/useSectionInView';
import { PROJECTS } from '@/lib/data';

import { Project } from './project';
import { SectionHeading } from './section-heading';

export const Projects = () => {
  const { ref } = useSectionInView('projects', 0.5);
  return (
    <section id='projects' ref={ref} className='mb-28 max-w-[55rem] scroll-mt-28'>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {PROJECTS.map((project) => (
          <Fragment key={project.title}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};
