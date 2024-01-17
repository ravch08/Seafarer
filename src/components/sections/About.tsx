import {
  SectionHeading,
  about01,
  about02,
  about03,
  anchor,
} from "../utils/helper";

const About = () => {
  return (
    <section aria-labelledby="About our company">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img src={anchor} alt="anchor" />
          <SectionHeading
            bgText="Explore"
            superHeading="YACHTING COMPANY"
            heading="DAILY SAILING SINCE 1971."
            description="Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget…"
          />
        </div>

        <figure className="mt-12 flex h-[400px] w-full items-center justify-center gap-6">
          <img
            src={about01}
            alt="boats"
            loading="lazy"
            className="h-full border border-primary p-2"
          />
          <img
            src={about02}
            alt="boats"
            loading="lazy"
            className="h-full border border-primary p-2"
          />
          <img
            src={about03}
            alt="boats"
            loading="lazy"
            className="h-full border border-primary p-2"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
