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
    <main className="container max-w-4xl py-24 md:py-36">
      <Intro {...dictionary['intro']} />
    </main>
  );
}
