import { ContactForm } from "@/components/forms/contact-form";
import { PageHeading } from "@/components/page-heading";
import { type Locale } from "@/i18/config";
import { getDictionary } from "@/i18/get-dictionary";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const { contactPage: contact } = await getDictionary(lang);

  return (
    <>
      <PageHeading title={contact.title} description={contact.description} />
      <section className="sm:px-6">
        <ContactForm dictionary={contact.contactForm} />
      </section>
    </>
  );
}
