import Image from 'next/image';
import authorImage from '@/public/images/me.jpeg';

type Props = {
  title1: string;
  title2: string;
};

export const Intro = ({ title1, title2 }: Props) => (
  <section className="mx-auto flex flex-col justify-around gap-x-10 gap-y-4 md:flex-row md:items-center">
    <div className="flex flex-col">
      <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-6xl">
        Mathias <span className="text-accent">Scheltjens</span>
      </h1>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        <span className="text-accent">{title1}</span> <span>{title2}</span>
      </h3>
    </div>
    <div className="relative">
      <Image
        className="w-full opacity-80 grayscale"
        src={authorImage}
        alt="Mathias S."
        width={220}
        height={220}
        priority
      />
    </div>
  </section>
);
