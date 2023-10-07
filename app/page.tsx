import { About, Intro, Projects, SectionDivider } from '@/components';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4 max-w-[56rem] mx-auto'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  );
}
