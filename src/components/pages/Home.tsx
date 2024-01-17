import { About, Banner, Clients, MidBanner, Pricing } from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <MidBanner />
      <Pricing />
      <Clients />
    </main>
  );
};

export default Home;
