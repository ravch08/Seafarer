import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";
import {
  About,
  OurCrew,
  PageBanner,
  Testimonials,
  aboutBanner,
} from "../utils/helper";

const AboutUs = () => {
  const contextValue = useContext(themeContext);

  if (!contextValue) return <div>Error: themeContext value is null</div>;

  const { darkTheme } = contextValue;

  return (
    <main className={darkTheme ? "bg-darkBlue-400" : "bg-white"}>
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
