'use client';

import { Fragment } from 'react';

import { PROJECTS } from '@/lib/data';

import { Project } from './project';
import { SectionHeading } from './section-heading';

export const Projects = () => {
  return (
    <section id='projects' className='mb-28 h-fit scroll-mt-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {PROJECTS.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};
