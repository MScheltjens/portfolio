import { PageHeading } from '@/components/page-heading';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon
} from '@radix-ui/react-icons';
import Image from 'next/image';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="container max-w-5xl pt-24 md:pt-36">
      <PageHeading
        title={dictionary['projectsPage'].title}
        description={dictionary['projectsPage'].description}
      />
      <BentoGrid className="mt-12 lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </main>
  );
}

const features = [
  {
    Icon: FileTextIcon,
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '/',
    cta: 'Learn more',
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3'
  },
  {
    Icon: InputIcon,
    name: 'Full text search',
    description: 'Search through all your files in one place.',
    href: '/',
    cta: 'Learn more',
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3'
  },
  {
    Icon: GlobeIcon,
    name: 'Multilingual',
    description: 'Supports 100+ languages and counting.',
    href: '/',
    cta: 'Learn more',
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4'
  },
  {
    Icon: CalendarIcon,
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    href: '/',
    cta: 'Learn more',
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2'
  },
  {
    Icon: BellIcon,
    name: 'Notifications',
    description:
      'Get notified when someone shares a file or mentions you in a comment.',
    href: '/',
    cta: 'Learn more',
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4'
  }
];
