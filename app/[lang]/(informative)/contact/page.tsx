import { ContactForm } from "@/components/forms/contact-form";
import { PageHeading } from "@/components/page-heading";
import { getDictionary } from "@/i18/get-dictionary";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
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
