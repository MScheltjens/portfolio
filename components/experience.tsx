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
    <section id='experience' ref={ref} className='mb-28 w-full scroll-mt-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor='' animate={true}>
        {EXPERIENCE.map(({ title, location, description, icon, date, type }) => (
          <React.Fragment key={title}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderTop: `2px solid ${type === 'work' ? '#3b82f6' : 'red'}`,
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={date}
              icon={icon}
              iconStyle={{
                background: type === 'work' ? '#3b82f6' : 'red',
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
