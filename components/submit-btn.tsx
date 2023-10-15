'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='hover:disabled:bg-opacity-65 dark:hover:text-white-/80dark:active:scale-105 group inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 px-4 py-2 capitalize text-white transition-all hover:scale-110 hover:cursor-pointer hover:bg-gray-800 focus:scale-110 active:scale-105 disabled:scale-100 dark:border dark:border-gray-800 dark:hover:scale-110  dark:hover:cursor-pointer dark:hover:bg-gray-800 dark:disabled:scale-100'
    >
      {pending ? (
        <div className='full h-5 w-5 animate-spin rounded-full border-b-2  border-white'></div>
      ) : (
        <>
          Submit <FaPaperPlane className='hover: text-sm opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
        </>
      )}
    </button>
  );
};
