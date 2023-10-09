'use server';

import React from 'react';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, resend, validateString } from '@/utils';

export const sendMail = async (formData: FormData) => {
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  if (!validateString(senderEmail, 50)) return { error: 'invalid email' };
  if (!validateString(message, 5000)) return { error: 'invalid message' };

  try {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mathias.scheltjens@gmail.com',
      subject: 'contact form message',
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
