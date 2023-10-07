'use client';

import { Fragment } from 'react';

import { useSectionInView } from '@/hooks/useSectionInView';
import { PROJECTS } from '@/lib/data';

import { Project } from './project';
import { SectionHeading } from './section-heading';

export const Projects = () => {
  const { ref } = useSectionInView('projects', 0.5);
  return (
    <section ref={ref} id='projects' className='mb-28 scroll-mt-28'>
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
