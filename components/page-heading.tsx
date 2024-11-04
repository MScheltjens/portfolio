import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  className?: string;
};

export const PageHeading = ({ title, description, className }: Props) => (
  <section
    className={cn(
      "mx-auto max-w-6xl border-b border-primary sm:p-6 sm:pt-0",
      className,
    )}
  >
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {title}
    </h2>
    {description && <p className="mt-4 leading-7">{description}</p>}
  </section>
);
