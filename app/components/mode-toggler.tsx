'use client';

import { Button } from '@/components/ui/button';
import { Lightbulb, LightbulbOff } from 'lucide-react';
import { useTheme } from 'next-themes';

type Props = {
  className: string;
};

export const ModeToggler = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button size="icon" onClick={() => setTheme(theme && theme === 'light' ? 'dark' : 'light')} className={className}>
      {theme && theme === 'dark' ? <Lightbulb /> : <LightbulbOff />}
    </Button>
  );
};
