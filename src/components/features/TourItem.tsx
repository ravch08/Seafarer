import { Link } from "react-router-dom";
import { TourProps } from "../pages/Tours";

const TourItem = (props: TourProps) => {
  const { guests, cabins, price, distance, type, name, imgSrc, description } =
    props;

  return (
    <div className="mb-8 w-[25%]">
      <figure className="border border-primary p-2">
        <img src={imgSrc} alt={name} />
      </figure>
      <div className="flex flex-col px-2 py-6">
        <span className="text-sm text-primary">${price} /per day</span>
        <Link to="#!" className="py-2 text-2xl">
          <h3>{name}</h3>
        </Link>
        <p className="line-clamp-4 text-sm">{description}</p>
      </div>
      <ul className="flex items-center gap-2 border-y border-gray-200">
        <li className="tour-feature font-semibold uppercase">{type}</li>
        <li className="tour-feature ">|</li>
        <li className="tour-feature uppercase">{guests} guests</li>
        <li className="tour-feature ">|</li>
        <li className="tour-feature uppercase">{cabins} cabins</li>
        <li className="tour-feature ">|</li>
        <li className="tour-feature uppercase">{distance} Km</li>
      </ul>
    </div>
  );
};

export default TourItem;
