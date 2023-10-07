
'use client';


import { TSectionName } from '@/types';
import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react'


type TActiveSectionContext = {
  activeSection: TSectionName | null;
  setActiveSection: Dispatch<SetStateAction<TSectionName>>;
};

const ActiveSectionContext = createContext<TActiveSectionContext>({
    activeSection: 'home',
    setActiveSection: () => {}
});


export const ActiveSectionProvider = ({children}: PropsWithChildren) => {
    const [activeSection, setActiveSection] = useState<TSectionName>('home');

  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection}}>{children}</ActiveSectionContext.Provider>
  )
}

export const useActiveSectionContext = () => useContext(ActiveSectionContext)

