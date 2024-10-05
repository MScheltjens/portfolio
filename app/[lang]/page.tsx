import { Intro } from '@/components/Intro';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-4xl">
        <Intro
          profession1={dictionary['intro'].title1}
          profession2={dictionary['intro'].title2}
          description={dictionary['intro'].description}
        />
      </div>
    </section>
  );
}
