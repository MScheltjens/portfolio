import { PageHeading } from "@/components/page-heading";
import { getDictionary } from "@/i18/get-dictionary";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const { projectsPage: projects } = await getDictionary(lang);

  return (
    <>
      <PageHeading title={projects.title} description={projects.description} />
      <p className="my-4 font-bold text-red-500">
        ...THIS PAGE IS STILL UNDER CONSTRUCTION...
      </p>
      <section className="sm:px-6"></section>
    </>
  );
}
