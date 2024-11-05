"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  label: string;
  href: string;
  value: string;
};

export const NavigationLink = ({ label, href, value }: Props) => {
  // Get the active segment from the layout, because of the caching behaviour of Nextjs the url may not be acurate!
  const activeSegment = useSelectedLayoutSegment();
  const isActive = activeSegment === label;

  return (
    <li className="transition-colors hover:text-primary">
      <Link href={href}>
        <div
          className={cn(
            "cursor-pointer px-2 py-1",
            isActive &&
              "border-b-2 border-primary text-primary transition-all duration-300 ease-in-out",
          )}
        >
          <p>{value}</p>
        </div>
      </Link>
    </li>
  );
};
