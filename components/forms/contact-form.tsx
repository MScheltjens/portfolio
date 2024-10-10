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
import { Card } from '../ui/card';

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
    <Card className="mt-6 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-g mx-auto max-w-4xl lg:flex-auto"
      >
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

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-50"
        >
          {isSubmitting ? submitting : send}
        </Button>
      </form>
    </Card>
  );
};
