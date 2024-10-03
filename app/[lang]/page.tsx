import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="w-screen h-screen flex justify-center items-center container mx-auto">
      <main>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">Mathias S.</h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-2">
          <span className="text-green-400">{dictionary['developer'].fullStack}</span> <span className="text-green-400">{dictionary['developer'].dev}</span>
        </h3>
      </main>
    </div>
  );
}
