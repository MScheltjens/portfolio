import { ContactForm } from '@/components/forms/contact-form';

export default function Page() {
  return (
    <section className="container max-w-4xl py-24">
      <h2 className="w-fit scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Contact
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If you have any questions, feel free to contact me using the form below.
        I will get back to you as soon as possible
      </p>
      <ContactForm />
    </section>
  );
}
