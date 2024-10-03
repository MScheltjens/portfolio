import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="w-screen h-screen flex justify-center items-center container mx-auto">
      <main>
        <h1>Mathias S. | {dictionary['web-developer'].title}</h1>
      </main>
    </div>
  );
}
