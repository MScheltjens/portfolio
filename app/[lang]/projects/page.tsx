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
    <main className="container max-w-4xl py-24 md:py-36">
      <PageHeading
        title={dictionary['projectsPage'].title}
        description={dictionary['projectsPage'].description}
      />
    </main>
  );
}
