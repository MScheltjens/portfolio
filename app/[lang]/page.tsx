import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="container mx-auto flex h-screen w-screen items-center justify-center">
      <main>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Mathias S.
        </h1>
        <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          <span className="text-green-400">
            {dictionary['developer'].fullStack}
          </span>{' '}
          <span className="text-green-400">{dictionary['developer'].dev}</span>
        </h3>
      </main>
    </div>
  );
}
