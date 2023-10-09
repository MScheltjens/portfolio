'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

import { useSectionInView } from '@/hooks/useSectionInView';
import { sendMail } from '@/server-actions/actions';

import { SectionHeading } from './section-heading';

export const Contact = () => {
  const { ref } = useSectionInView('contact', 0.5);

  return (
    <motion.section id='contact' ref={ref} className='mb-28 scroll-mt-28' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <SectionHeading>Contact</SectionHeading>
      <p className='-mt-6 text-gray-700'>
        Please, contact me directly on{' '}
        <a className='font-semibold underline' href='mailto:mathias.scheltjens@gmail.com'>
          mathias.scheltjens@gmail.com
        </a>{' '}
        or via the contact form below.
      </p>
      <form action={async (formData: FormData) => sendMail(formData)} className='mt-16 flex flex-col gap-6'>
        <label hidden htmlFor='email'>
          Email
        </label>
        <input id='email' name='email' maxLength={50} required type='email' placeholder='example@mail.com' className='formInput' />
        <label hidden htmlFor='message'>
          Message
        </label>
        <textarea required id='message' name='message' maxLength={5000} rows={10} placeholder='Please enter your message' className='formInput' />
        <button
          type='submit'
          className='hover: group inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 px-4 py-2 capitalize text-white hover:scale-110 hover:cursor-pointer hover:bg-gray-800 focus:scale-110 active:scale-105'
        >
          Submit <FaPaperPlane className='hover: text-sm opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
        </button>
      </form>
    </motion.section>
  );
};
