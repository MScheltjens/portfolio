import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { getDictionary } from "@/i18/get-dictionary";
import { cn } from "@/lib/utils";

{
  /* this layout is created for all the informative pages, in case I want to scale up (ex: auth etc) I can create another (auth) folder with another layout */
}

export default async function InformativeLayout({
  params,
  children,
}: LayoutProps) {
  const { lang } = await params;
  const { navigation } = await getDictionary(lang);
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header translations={{ ...navigation }} locale={lang} />
      <main className="container max-w-5xl grow py-24 md:py-36 lg:max-w-6xl">
        {children}
      </main>
      <Footer />
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-image:radial-gradient(500px_circle_at_center,white)] fixed inset-0 z-[-1] h-full w-full overflow-hidden",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
