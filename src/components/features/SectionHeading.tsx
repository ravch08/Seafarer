import { SectionHeadingProps } from "../../types/types";

const SectionHeading = ({
  superHeading,
  heading,
  description,
  bgText,
}: SectionHeadingProps) => {
  return (
    <div className="relative mx-auto flex w-1/2 flex-col text-center">
      <span className="absolute w-full font-serif text-8xl font-bold uppercase text-primary opacity-10">
        {bgText}
      </span>
      <span className="font-sans text-sm font-medium uppercase text-primary">
        {superHeading}
      </span>
      <h2 className="font-h2 uppercase">{heading}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
