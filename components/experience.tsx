'use client';

import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { useSectionInView } from '@/hooks/useSectionInView';
import { EXPERIENCE } from '@/lib/data';

import { SectionHeading } from './section-heading';

export const Experience = () => {
  const { ref } = useSectionInView('experience');

  return (
    <section id='experience' ref={ref} className='w-full scroll-mt-28'>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor='' animate={true}>
        {EXPERIENCE.map(({ title, location, description, icon, date, type }) => (
          <React.Fragment key={title}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderTop: `2px solid ${type === 'work' ? '#3b82f6' : 'red'}`,
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={date}
              icon={icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
                color: 'white',
              }}
            >
              <h3 className='font-semibold capitalize'>{title}</h3>
              <p className='!mt-0 font-normal'>{location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
