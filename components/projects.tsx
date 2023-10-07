import React from 'react';
import { SectionHeading } from './section-heading';
import { PROJECTS } from '@/lib/data';
import { Project } from './project';

export const Projects = () => (
  <section id='projects' className='mb-28'>
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
