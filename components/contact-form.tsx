'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, Inputs } from '../schemas/contact-form-schema';
import { Form } from './ui/form';
import { toast } from 'sonner';

export const ContactForm = () => {
  const form = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: '', email: '', message: '' }
  });

  const {
    reset,
    register,
    handleSubmit: forhandleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  const processForm: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    // toast.success('Message sent successfully!');
    toast.success('Message sent successfully!');
    console.log(data);
    reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={forhandleSubmit(processForm)} noValidate>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              autoComplete="given-name"
              {...register('name')}
              {...(errors.name?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.name.message}
                </p>
              ))}
            />
          </div>

          {/* Email */}
          <div>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="given-email"
              {...register('email')}
              {...(errors.name?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.name.message}
                </p>
              ))}
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <Textarea
              id="message"
              placeholder="Message"
              {...register('message')}
              {...(errors.message?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.message.message}
                </p>
              ))}
            />
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
    </Form>
  );
};
