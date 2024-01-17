import { CrewProps } from "../sections/OurCrew";

const CrewItem = ({ imgSrc, name, designation }: CrewProps) => {
  return (
    <div className="text-center">
      <img src={imgSrc} alt={name} className="border border-primary p-2" />
      <h3 className="pb-1 pt-4 text-xl font-semibold">{name}</h3>
      <span className="font-sans text-sm uppercase text-primary">
        {designation}
      </span>
    </div>
  );
};

export default CrewItem;
