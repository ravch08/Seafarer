import {
  About,
  OurCrew,
  PageBanner,
  Testimonials,
  aboutBanner,
} from "../utils/helper";

const AboutUs = () => {
  return (
    <main>
      <PageBanner
        page="About Us"
        imgSrc={aboutBanner}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolores tenetur debitis, aperiam dolorem architecto sapiente repellendus fuga ad quia?"
      />
      <About />
      <Testimonials />
      <OurCrew />
    </main>
  );
};

export default AboutUs;
