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
      <Skeleton className="flex h-48 items-center justify-center">
        <div>
          <p className="mt-12 w-full text-xl capitalize">
            {dictionary['construction'].title}
          </p>
        </div>
      </Skeleton>
    </main>
  );
}
