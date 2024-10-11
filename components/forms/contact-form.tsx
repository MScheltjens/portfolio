'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, ContactFormInputs } from './contact-form-schema';
import { toast } from 'sonner';
import { sendEmail } from '@/lib/actions';
import { getDictionary } from '@/i18/get-dictionary';

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['contactForm'];
};

export const ContactForm = ({
  dictionary: {
    name,
    email,
    message,
    toast: { error, success },
    send,
    submitting
  }
}: Props) => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-6 max-w-4xl lg:flex-auto"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="col-span-2 md:col-span-1">
          <Input
            id="name"
            type="text"
            placeholder={name}
            autoComplete="given-name"
            className="rounded-none"
            {...register('name')}
          />
          {errors.name?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="col-span-2 md:col-span-1">
          <Input
            id="email"
            type="email"
            placeholder={email}
            autoComplete="given-email"
            className="rounded-none"
            {...register('email')}
          />
          {errors.name?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="col-span-2">
          <Textarea
            id="message"
            placeholder={message}
            className="rounded-none"
            {...register('message')}
          />
          {errors.message?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="default"
        disabled={isSubmitting}
        className="mt-4 w-full rounded-none hover:bg-accent/80 disabled:opacity-50"
      >
        {isSubmitting ? submitting : send}
      </Button>
    </form>
  );
};
