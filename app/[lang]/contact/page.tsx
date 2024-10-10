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
    <main className="container max-w-7xl py-24 md:py-36">
      <PageHeading
        title={dictionary['contactPage'].title}
        description={dictionary['contactPage'].description}
      />
      <ContactForm dictionary={dictionary['contactForm']} />
    </main>
  );
}
