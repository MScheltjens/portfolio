'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, Inputs } from './contact-form-schema';
import { toast } from 'sonner';

export const ContactForm = () => {
  const form = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: '', email: '', message: '' }
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-16 lg:flex-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            autoComplete="given-name"
            {...register('name')}
          />
          {errors.name?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="given-email"
            {...register('email')}
          />
          {errors.name?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <Textarea
            id="message"
            placeholder="Message"
            {...register('message')}
          />
          {errors.message?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Contact Me'}
        </Button>
      </div>
    </form>
  );
};
