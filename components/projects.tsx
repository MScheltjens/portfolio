import React from 'react';

import { PROJECTS } from '@/lib/data';

import { Project } from './project';
import { SectionHeading } from './section-heading';

export const Projects = () => (
  <section id='projects' className='scroll-mt-28 mb-28'>
    <SectionHeading>Projects</SectionHeading>
    <div className='mt-12'>
      {PROJECTS.map((project, i) => (
        <React.Fragment key={i}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  </section>
);
