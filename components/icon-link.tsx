import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const IconLink = ({ href, children }: Props) => (
  <Link href={href} target="_blank">
    <div className={buttonVariants({ size: "icon" })}>{children}</div>
  </Link>
);
