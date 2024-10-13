import { PageHeading } from '@/components/page-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const { aboutPage: about } = await getDictionary(lang);

  return (
    <>
      <PageHeading title={about.title} description={about.description} />

      <section className="mt-6 sm:px-6">
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="technical">{about.tabs.technical}</TabsTrigger>
            <TabsTrigger value="personal">{about.tabs.personal}</TabsTrigger>
          </TabsList>
          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>{about.profession.title}</CardTitle>
                {/* <CardDescription>{about.technical.}</CardDescription> */}
              </CardHeader>
              <CardContent>
                <h3>{about.profession.frontend}</h3>
                <h3>{about.profession.backend}</h3>
                <h3>{about.profession.tools}</h3>
                <h3>{about.profession.teamwork}</h3>
                <h3>{about.profession.problemSolving}</h3>
                <h3>{about.profession.timeManagement}</h3>
              </CardContent>
              {/* <CardFooter>Footer here</CardFooter> */}
            </Card>
          </TabsContent>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>{about.personal.title}</CardTitle>
                {/* <CardDescription>description here</CardDescription> */}
              </CardHeader>
              <CardContent></CardContent>
              {/* <CardFooter>Footer here </CardFooter> */}
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
