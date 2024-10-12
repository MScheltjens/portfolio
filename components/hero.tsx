import Image from 'next/image';
import authorImage from '@/public/images/me.jpeg';
import { IconLink } from './icon-link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Dictionary } from '@/i18/get-dictionary';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

export const Hero = ({
  title1,
  title2,
  download,
  description
}: Dictionary['homePage']) => (
  <Card className="flex flex-col-reverse justify-around md:flex-row md:items-center">
    <div className="flex flex-1 flex-col justify-between gap-y-3">
      <CardHeader>
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl">
          Mathias <span className="text-primary">Scheltjens</span>
        </h1>
        <h3 className="mt-2 scroll-m-20 text-2xl tracking-tight">
          <span className="text-primary">{title1}</span> <span>{title2}</span>
          <span className="text-primary">_</span>
        </h3>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="gap-x-4">
        <IconLink href="https://github.com/MScheltjens">
          <Linkedin />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/mathias-scheltjens/">
          <Github />
        </IconLink>
        <Button>{download}</Button>
      </CardFooter>
    </div>
    <div className="relative md:p-2 lg:p-6">
      <Image
        className="w-full rounded-xl rounded-b-none opacity-80 grayscale md:rounded-b-xl"
        src={authorImage}
        alt="Mathias S."
        width={220}
        height={220}
        priority
      />
    </div>
  </Card>
);
