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
    <section>
      <Hero {...dictionary['homePage']} />
    </section>
  );
}
