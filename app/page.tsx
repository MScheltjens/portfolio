import { Intro } from '@/components';
import { SectionDivider } from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  );
}
