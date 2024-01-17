import { PricingProps } from "../sections/Pricing";

const PricingItem = ({
  serviceType,
  price,
  listItem1,
  listItem2,
  listItem3,
}: PricingProps) => {
  return (
    <div className="border border-primary p-4">
      <div className="flex flex-col">
        <h3>{serviceType}</h3>
        <p className="flex flex-col items-end">
          <span>${price}</span>
          <span>/per month</span>
        </p>
        <p>{listItem1}</p>
        <p>{listItem2}</p>
        <p>{listItem3}</p>
        <button className="btn-text">
          <span>MAKE BOOKING</span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PricingItem;
