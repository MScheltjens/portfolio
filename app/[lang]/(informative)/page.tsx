import { Hero } from "@/components/hero";
import { getDictionary } from "@/i18/get-dictionary";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  const { homePage } = await getDictionary(lang);

  return (
    <section>
      <Hero {...homePage} />
    </section>
  );
}
