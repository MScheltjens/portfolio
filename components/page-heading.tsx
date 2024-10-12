import { cn } from '@/lib/utils';

type Props = {
  title: string;
  description: string;
  className?: string;
};

export const PageHeading = ({ title, description, className }: Props) => (
  <div
    className={cn('border-b border-primary pb-4 backdrop-blur-sm', className)}
  >
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {title}
    </h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
  </div>
);
