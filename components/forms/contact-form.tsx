'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, ContactFormInputs } from './contact-form-schema';
import { toast } from 'sonner';
import { sendEmail } from '@/lib/actions';

type Toast = {
  success: string;
  error: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
  send: string;
  submitting: string;
  toast: Toast;
};

export const ContactForm = ({
  name,
  email,
  message,
  send,
  submitting,
  toast: { success, error }
}: FormData) => {
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: '', email: '', message: '' }
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    const response = await sendEmail(data);

    if (response?.error) {
      toast.error(error);
      return;
    }
    toast.success(success);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-16 lg:flex-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}

        <Input
          id="name"
          type="text"
          placeholder={name}
          autoComplete="given-name"
          {...register('name')}
        />
        {errors.name?.message && (
          <p className="ml-1 mt-2 text-sm text-rose-400">
            {errors.name.message}
          </p>
        )}

        {/* Email */}

        <Input
          id="email"
          type="email"
          placeholder={email}
          autoComplete="given-email"
          {...register('email')}
        />
        {errors.name?.message && (
          <p className="ml-1 mt-2 text-sm text-rose-400">
            {errors.name.message}
          </p>
        )}

        {/* Message */}
        <Textarea
          id="message"
          className="sm:col-span-2"
          placeholder={message}
          {...register('message')}
        />
        {errors.message?.message && (
          <p className="ml-1 mt-2 text-sm text-rose-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-50"
        >
          {isSubmitting ? submitting : send}
        </Button>
      </div>
    </form>
  );
};
