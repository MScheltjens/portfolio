import { PageHeading } from '@/components/page-heading';
import { Skeleton } from '@/components/ui/skeleton';
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
    <main className="md container max-w-4xl py-24 text-foreground md:py-36">
      <PageHeading
        title={dictionary['aboutPage'].title}
        description={dictionary['aboutPage'].description}
      />
      <Skeleton className="mt-6 flex h-56 w-full items-center justify-center">
        <p className="mt-12 text-xl capitalize">
          {dictionary['construction'].title}
        </p>
      </Skeleton>
    </main>
  );
}
