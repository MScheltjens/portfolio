'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, Inputs } from '../schemas/contact-form-schema';
import { Form } from './ui/form';

export const ContactForm = () => {
  const form =
    //  {
    //     register,
    //     handleSubmit,
    //     // reset,
    //     formState: { errors, isSubmitting }
    //   }
    useForm<Inputs>({
      resolver: zodResolver(ContactFormSchema),
      defaultValues: { name: '', email: '', message: '' }
    });

  const {
    register,
    handleSubmit: forhandleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  const processForm: SubmitHandler<Inputs> = async (data) => {
    // const result = await sendEmail(data);
    console.log('processing', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={forhandleSubmit(processForm)} noValidate>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
          <div>
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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Contact Me'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
