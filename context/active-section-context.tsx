'use client';

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

import { TSectionName } from '@/types';

type TActiveSectionContext = {
  activeSection: TSectionName | null;
  setActiveSection: Dispatch<SetStateAction<TSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<TActiveSectionContext>({
  activeSection: 'home',
  setActiveSection: () => {},
  timeOfLastClick: 0,
  setTimeOfLastClick: () => {},
});

export const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<TSectionName>('home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>{children}</ActiveSectionContext.Provider>;
};

export const useActiveSectionContext = () => useContext(ActiveSectionContext);
