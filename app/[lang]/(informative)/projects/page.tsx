import { PageHeading } from "@/components/page-heading";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { type Locale } from "@/i18/config";
import { getDictionary } from "@/i18/get-dictionary";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const { projectsPage: projects } = await getDictionary(lang);

  return (
    <>
      <PageHeading title={projects.title} description={projects.description} />
      <p className="my-4 font-bold text-red-500">
        ...THIS PAGE IS STILL UNDER CONSTRUCTION...
      </p>
      <section className="sm:px-6">
        <BentoGrid className="mt-6 w-full lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>
    </>
  );
}

const features = [
  {
    Icon: FileTextIcon,
    name: "Dummy",
    description: "dummy-description",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Dummy",
    description: "dummy-description",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Dummy",
    description: "dummy-description",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Dummy",
    description: "dummy-description",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Dummy",
    description: "dummy-description",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        className="absolute -right-20 -top-20 opacity-60"
        alt="bg-image"
        src=""
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];
