import { Hero } from '@/components/hero';
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
    <main className="container max-w-5xl py-24 md:py-36 lg:max-w-6xl">
      <section>
        <Hero {...dictionary['homePage']} />
      </section>
    </main>
  );
}
