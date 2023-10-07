import { About, Intro, SectionDivider, Projects, Skills } from '@/components';

export default function Home() {
  return (
    <main className='mx-auto flex max-w-[56rem] flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
    </main>
  );
}
