import { Intro } from '@/components/Intro';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <section className="container max-w-4xl">
      <Intro
        title1={dictionary['intro'].title1}
        title2={dictionary['intro'].title2}
      />
    </section>
  );
}
