import { Link } from "react-router-dom";
import { banner } from "../utils/helper";

const Banner = () => {
  return (
    <section aria-labelledby="Home Banner" className="pt-0">
      <figure className="h-[700px] w-full overflow-hidden rounded-lg">
        <img src={banner} alt="Banner" />
      </figure>
      <div className="absolute left-36 top-1/4 w-1/3">
        <span className="font-sans text-sm uppercase tracking-wider text-white">
          Nautical COmpany
        </span>
        <h1 className="pb-6 pt-2 text-7xl font-medium uppercase text-white">
          Yatching
        </h1>
        <p className="text-white ">
          Modern design sports cruisers for those who crave adventure &amp;
          grandeur yachts for relaxing travels with your loved ones. We offer
          diverse and fully equipped yachts.
        </p>
        <Link to="tours" className="btn-primary">
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Banner;
