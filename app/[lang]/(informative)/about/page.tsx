import { PageHeading } from '@/components/page-heading';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Locale } from '@/i18/config';
import { getDictionary } from '@/i18/get-dictionary';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <PageHeading
        title={dictionary['aboutPage'].title}
        description={dictionary['aboutPage'].description}
      />

      <section className="mt-6 sm:px-6">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>
          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technical</CardTitle>
                <CardDescription>description here</CardDescription>
              </CardHeader>
              <CardContent>Content here</CardContent>
              <CardFooter>Footer here</CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal</CardTitle>
                <CardDescription>description here</CardDescription>
              </CardHeader>
              <CardContent>Content here</CardContent>
              <CardFooter>Footer here </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
