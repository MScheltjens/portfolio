import { useActiveSectionContext } from '@/context/active-section-context';
import { TSectionName } from '@/types';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useSectionInView = (sectionName: TSectionName) => {
  //TODO: threshold not working for projects...
  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [setActiveSection, inView, sectionName, timeOfLastClick]);

  return { ref };
};
