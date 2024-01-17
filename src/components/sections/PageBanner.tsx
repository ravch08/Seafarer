import { PageBannerProps } from "../../types/types";

const PageBanner = ({ page, imgSrc, description }: PageBannerProps) => {
  return (
    <section
      aria-labelledby={`${page} Banner`}
      className="relative overflow-hidden p-0"
    >
      <figure className="h-[400px] overflow-hidden">
        <img src={imgSrc} alt={page} />
      </figure>
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
      <div className="absolute top-[30%] w-full text-center">
        <h1 className="mb-4 text-6xl font-bold uppercase text-white">{page}</h1>
        <p className="mx-auto w-1/2 text-white">{description}</p>
      </div>
    </section>
  );
};

export default PageBanner;
