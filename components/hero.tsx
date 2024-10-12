import Image from 'next/image';
import authorImage from '@/public/images/me.jpeg';
import { IconLink } from './icon-link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Dictionary } from '@/i18/get-dictionary';

export const Hero = ({
  title1,
  title2,
  download,
  description
}: Dictionary['homePage']) => (
  <section className="mx-auto flex flex-col justify-around gap-x-10 gap-y-4 md:flex-row md:items-center">
    <div className="flex flex-col justify-between gap-y-3">
      <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-6xl">
        Mathias <span className="text-primary">Scheltjens</span>
      </h1>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        <span className="text-primary">{title1}</span> <span>{title2}</span>
        <span className="text-primary">_</span>
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
      <div className="mt-2 flex gap-3">
        <IconLink href="https://github.com/MScheltjens">
          <Linkedin />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/mathias-scheltjens/">
          <Github />
        </IconLink>
        <Button>{download}</Button>
      </div>
    </div>
    <div className="relative">
      <Image
        className="w-full rounded opacity-80 grayscale"
        src={authorImage}
        alt="Mathias S."
        width={220}
        height={220}
        priority
      />
    </div>
  </section>
);
