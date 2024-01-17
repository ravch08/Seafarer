import { PricingProps } from "../sections/Pricing";

const PricingItem = ({
  serviceType,
  price,
  listItem1,
  listItem2,
  listItem3,
}: PricingProps) => {
  const pricingOuter = "border border-primary w-[25%] p-4";
  const pricingInner =
    "flex flex-col gap-6 border border-gray-300 px-12 text-center";

  return (
    <div
      className={
        serviceType === "Deluxe"
          ? `${pricingOuter} border-opacity-100`
          : `${pricingOuter} border-opacity-20`
      }
    >
      <div
        className={
          serviceType === "Deluxe"
            ? `${pricingInner} py-20`
            : `${pricingInner} py-12`
        }
      >
        <h3 className="font-serif text-2xl font-bold uppercase">
          {serviceType}
        </h3>
        <p className="flex flex-col items-center justify-end gap-2 text-black">
          <span className="font-serif text-5xl font-black dark:text-white">
            ${price}
          </span>
          <span className="text-sm dark:text-white">/per month</span>
        </p>
        <p className="text-sm">{listItem1}</p>
        <p className="text-sm">{listItem2}</p>
        <p className="text-sm">{listItem3}</p>
        <button className="btn-text mt-8 flex items-center justify-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-wider hover:text-primary">
            MAKE BOOKING
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
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
