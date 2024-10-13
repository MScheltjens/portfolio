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
    <>
      <PageHeading
        title={dictionary['contactPage'].title}
        description={dictionary['contactPage'].description}
      />
      <section className="sm:px-6">
        <ContactForm dictionary={dictionary['contactForm']} />
      </section>
    </>
  );
}
