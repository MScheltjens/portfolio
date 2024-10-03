'use client';

import { Button } from '@/components/ui/button';
import { Lightbulb, LightbulbOff } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ModeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button size="icon" onClick={() => setTheme(theme && theme === 'light' ? 'dark' : 'light')}>
      {theme && theme === 'dark' ? <Lightbulb /> : <LightbulbOff />}
    </Button>
  );
};
