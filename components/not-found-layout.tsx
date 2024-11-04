"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { PageHeading } from "./page-heading";
import { type Locale } from "@/i18/config";

export const NotFoundLayout = ({ locale }: { locale: Locale }) => {
  const router = useRouter();
  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [count, router]);

  return (
    <html lang={locale}>
      <body className="flex h-screen flex-col items-center justify-center">
        <PageHeading title="Something went wrong" />
        <div className="mt-5 flex justify-center">
          <p>
            Redirecting in
            <span className="ml-1 text-xl font-bold text-primary">
              {count}
            </span>{" "}
            seconds...
          </p>
        </div>
      </body>
    </html>
  );
};
