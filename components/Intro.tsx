import Image from 'next/image';
import authorImage from '@/public/images/me.jpeg';

type Props = {
  profession1: string;
  profession2: string;
  description: string;
};

export const Intro = ({ profession1, profession2, description }: Props) => {
  return (
    <div className="mx-auto mt-24 flex flex-col-reverse gap-x-10 gap-y-4 md:mt-36 md:flex-row md:items-center">
      <div className="flex flex-1 flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Mathias S<span className="text-accent">.</span>
        </h1>
        <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          <span className="text-accent">{profession1}</span>{' '}
          <span>{profession2}</span>
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
      </div>
      <div className="relative">
        <Image
          className="w-full flex-1 grayscale"
          src={authorImage}
          alt="Mathias S."
          width={220}
          height={220}
          priority
        />
      </div>
    </div>
  );
};
