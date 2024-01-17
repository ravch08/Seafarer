import { Link } from "react-router-dom";
import { SocailIcons, logoLight } from "../utils/helper";

const Footer = () => {
  return (
    <footer className="bg-darkBlue py-20">
      <div className="container mx-auto flex items-start justify-between gap-12">
        <div className="flex w-1/4 flex-col items-start gap-4">
          <Link to="/">
            <img alt="Seafarer" className="w-32" src={logoLight} />
          </Link>
          <p className="mb-8 text-sm text-white">
            Seafarer, a WP theme equipped with the utmost practical features for
            your yacht & boat rental business.
          </p>
          <SocailIcons />
        </div>
        <div className="flex w-1/4 flex-col items-start gap-4">
          <span className="ftr-heading">Our Company</span>
          <Link to="#!" className="ftr-link">
            About Our Charter
          </Link>
          <Link to="#!" className="ftr-link">
            Customer Testimonials{" "}
          </Link>
          <Link to="#!" className="ftr-link">
            Latest Weather Report{" "}
          </Link>
          <Link to="#!" className="ftr-link">
            All Inclusive day trip
          </Link>
          <Link to="#!" className="ftr-link">
            Book Online Now
          </Link>
          <Link to="#!" className="ftr-link">
            Get in Touch
          </Link>
        </div>
        <div className="flex w-1/4 flex-col items-start gap-4">
          <span className="ftr-heading">Contact Details</span>
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
        <div className="flex w-1/4 flex-col items-start gap-4">
          <span className="ftr-heading">Subscribe</span>
          <p className="ftr-link">
            Subscribe to our newsletter for regular updates on our seasonal
            promotions, offers & lots more.
          </p>
          <form className="relative mt-4 w-full">
            <label htmlFor="email">
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="Your email..."
              />
            </label>
            <button
              type="submit"
              className="absolute right-0 top-0 z-20 flex h-10 w-10 items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-primary hover:fill-black"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
