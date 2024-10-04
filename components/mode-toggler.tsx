'use client';

import { Lightbulb, LightbulbOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ModeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState<boolean>();

  // we need tpo make sure the layout (server) is loaded before we can load this component (client) in order to prevent hydration errors
  // https://nextjs.org/docs/messages/react-hydration-error

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient === true && (
      <Button
        size="icon"
        onClick={() => setTheme(theme && theme === 'light' ? 'dark' : 'light')}
      >
        {theme && theme === 'dark' ? <Lightbulb /> : <LightbulbOff />}
      </Button>
    )
  );
};
