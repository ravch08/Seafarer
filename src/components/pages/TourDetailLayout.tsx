import { Outlet } from "react-router-dom";
import { PageBanner, TourBooking, aboutBanner } from "../utils/helper";

const TourDetailLayout = () => {
  return (
    <main>
      <PageBanner
        page="Tour detail"
        imgSrc={aboutBanner}
        description="loremispum"
      />
      <div className="flex items-start justify-between gap-8">
        <Outlet />
        <TourBooking />
      </div>
    </main>
  );
};

export default TourDetailLayout;
