import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSectionContext } from '@/context/active-section-context';
import type { TSectionName } from '@/types';

export const useSectionInView = (sectionName: TSectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  useEffect(() => {
    console.log('useSectionInView', sectionName);
  }, [sectionName]);

  return {
    ref,
    inView,
  };
};
