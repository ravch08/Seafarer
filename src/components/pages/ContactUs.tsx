import {
  PageBanner,
  SectionHeading,
  aboutBanner,
  anchor,
} from "../utils/helper";

const ContactUs = () => {
  return (
    <main>
      <PageBanner
        page="Contact Us"
        imgSrc={aboutBanner}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem necessitatibus aut!"
      />
      <section aria-labelledby="Contact" className="text-center">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6">
          <img src={anchor} alt="anchor" />
          <SectionHeading
            bgText="Discover"
            superHeading="Nautical Company"
            heading="Feel free to contact us"
            description="Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhoncus. Maecenas tempus, tellus eget…"
          />
        </div>
      </section>

      <section aria-labelledby="Google location" className="p-0">
        <div className="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25170.61172438896!2d23.62671809055732!3d37.94616254718705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bbebb7ac3147%3A0xd820da95ff30fdf7!2sPiraeus%2C%20Greece!5e0!3m2!1sen!2sus!4v1705513286309!5m2!1sen!2sus"
            width="600"
            height="450"
            loading="lazy"
            className="w-full"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section aria-labelledby="Addresses" className="bg-midBanner-02">
        <div className="container mx-auto flex items-start justify-center gap-6">
          <div className="flex w-[20%] flex-col items-start gap-4">
            <span className="ftr-heading">DUBROVNIK</span>
            <a href="tel:00123-456-789" className="ftr-link">
              +00123-456-789
            </a>
            <a href="mailto:seafarer@qodeinteractive.com" className="ftr-link">
              seafarer@qodeinteractive.com
            </a>
            <p className="ftr-link">
              Roadtown Street, The Yacht <br /> Building, British Virgin Islands
            </p>
            <p className="ftr-link">Mon - Fri, 9.00am until 6.30pm</p>
            <p className="ftr-link">We reply within 24 hrs</p>
          </div>

          <div className="flex w-[20%] flex-col items-center gap-4">
            <span className="ftr-heading">ATHENS</span>
            <a href="tel:123456" className="ftr-link">
              +31 555 777 83
            </a>
            <a href="mailto:seafarer@qodeinteractive.com" className="ftr-link">
              seafarer@qodeinteractive.com
            </a>
            <p className="ftr-link">
              Roadtown Street, The Yacht <br /> Building, British Virgin Islands
            </p>
            <p className="ftr-link">Mon - Fri, 9.00am until 6.30pm</p>
            <p className="ftr-link">We reply within 24 hrs</p>
          </div>

          <div className="flex w-[20%] flex-col items-end gap-4">
            <span className="ftr-heading">NAPLES</span>
            <a href="tel:123456" className="ftr-link">
              +31 555 777 83
            </a>
            <a href="mailto:seafarer@qodeinteractive.com" className="ftr-link">
              seafarer@qodeinteractive.com
            </a>
            <p className="ftr-link">
              Roadtown Street, The Yacht <br /> Building, British Virgin Islands
            </p>
            <p className="ftr-link">Mon - Fri, 9.00am until 6.30pm</p>
            <p className="ftr-link">We reply within 24 hrs</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
