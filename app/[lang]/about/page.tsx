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
    <main className="container max-w-5xl py-24 text-foreground md:max-w-6xl md:py-36">
      <PageHeading
        title={dictionary['aboutPage'].title}
        description={dictionary['aboutPage'].description}
      />

      <section className="sm:px-6">
        <p className="mt-12 w-full text-xl capitalize">
          {dictionary['construction'].title}
        </p>
      </section>
    </main>
  );
}
