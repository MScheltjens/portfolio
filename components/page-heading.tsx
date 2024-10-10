type Props = {
  title: string;
  description: string;
};

export const PageHeading = ({ title, description }: Props) => (
  <>
    <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0">
      {title}
    </h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
  </>
);
