import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";
import { About, Banner, Clients, MidBanner, Pricing } from "../utils/helper";

const Home = () => {
  const contextValue = useContext(themeContext);

  if (!contextValue) return <div>Error: themeContext value is null</div>;
  const { darkTheme } = contextValue;

  return (
    <main className={darkTheme ? "bg-darkBlue-400" : "bg-white"}>
      <Banner />
      <About />
      <MidBanner />
      <Pricing />
      <Clients />
    </main>
  );
};

export default Home;
