import { NavLink, Outlet } from "react-router-dom";
import { PageBanner, TourBooking, aboutBanner } from "../utils/helper";

const TourDetailLayout = () => {
  return (
    <main>
      <PageBanner
        page="Tour detail"
        imgSrc={aboutBanner}
        description="loremispum"
      />
      <section
        aria-labelledby="Nav Links"
        className="border-b border-gray-100 p-0"
      >
        <div className="container mx-auto flex items-center gap-2">
          <NavLink to="." className="filter-links" end>
            Description
          </NavLink>
          <NavLink to="plan" className="filter-links">
            Location & Plan
          </NavLink>
          <NavLink to="reviews" className="filter-links">
            Reviews
          </NavLink>
        </div>
      </section>
      <div className="container mx-auto flex items-start justify-between gap-8">
        <Outlet />
        <TourBooking bookingClass="w-[28%]" />
      </div>
    </main>
  );
};

export default TourDetailLayout;
