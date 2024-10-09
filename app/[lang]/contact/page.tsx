import { ContactForm } from '@/components/forms/contact-form';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  const formData = {
    name: dictionary['contactForm'].name,
    email: dictionary['contactForm'].email,
    message: dictionary['contactForm'].message,
    send: dictionary['contactForm'].send,
    submitting: dictionary['contactForm'].submitting,
    toast: {
      success: dictionary['contactForm'].toast.success,
      error: dictionary['contactForm'].toast.error
    }
  };

  return (
    <section className="container max-w-4xl py-36">
      <h2 className="w-fit scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {dictionary['contact'].title}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {dictionary['contact'].description}
      </p>
      <ContactForm {...formData} />
    </section>
  );
}
