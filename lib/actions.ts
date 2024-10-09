'use server';

import {
  ContactFormInputs,
  ContactFormSchema
} from '@/components/forms/contact-form-schema';
import { Resend } from 'resend';
import { ContactFormEmail } from '../emails/contact-form-email';

export const sendEmail = async (data: ContactFormInputs) => {
  // instantiate a new Resend instance with the API key
  const resend = new Resend(process.env.RESEND_API_KEY);

  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      // todo: when domain verified, continue!
      from: 'mathias.scheltjens@gmail.com',
      to: [email],
      cc: ['mathias.scheltjens@gmail.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    });

    if (!data || error) {
      return { error: 'Failed to send email' };
    }
  } catch (error) {
    return { error };
  }
};
