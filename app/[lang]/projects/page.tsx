import { PageHeading } from '@/components/page-heading';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

import { ProjectsLayout } from '@/components/projects-layout';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <PageHeading
        title={dictionary['projectsPage'].title}
        description={dictionary['projectsPage'].description}
        className="container max-w-5xl pt-24 md:pt-36"
      />
      <ProjectsLayout />
    </main>
  );
}
