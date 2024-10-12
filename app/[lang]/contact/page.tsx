import { ContactForm } from '@/components/forms/contact-form';
import { PageHeading } from '@/components/page-heading';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="container py-24 md:max-w-6xl md:py-36">
      <PageHeading
        title={dictionary['contactPage'].title}
        description={dictionary['contactPage'].description}
      />
      <section className="sm:px-6">
        <ContactForm dictionary={dictionary['contactForm']} />
      </section>
    </main>
  );
}
