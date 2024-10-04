import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const IconLink = ({ href, children }: Props) => (
  <Link href={href} target="_blank">
    <div className={buttonVariants({ size: 'icon' })}>{children}</div>
  </Link>
);
