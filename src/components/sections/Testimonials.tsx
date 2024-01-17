import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import { number, string, z } from "zod";
import { getTestimonials } from "../utils/api";

export const TestimonialSchema = z.object({
  id: number().optional(),
  author: string().min(5, {
    message: "Author must have atleast 5 characters.",
  }),
  designation: string().min(5, {
    message: "Designation must have atleast 5 characters.",
  }),
  quote: string().min(5, {
    message: "Quote must have atleast 5 characters.",
  }),
});

export type TestimonialProps = z.infer<typeof TestimonialSchema>;

const Testimonials = () => {
  const { data, status } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  return (
    <section aria-labelledby="Testimonials" className="bg-midBanner-02">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <span className="font-sans text-sm font-medium uppercase text-primary">
            Testimonials
          </span>
          <h2 className="font-h2 uppercase text-white ">People about us</h2>
        </div>

        <Swiper
          loop={true}
          speed={1500}
          spaceBetween={30}
          grabCursor={true}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {status === "pending" ? <h2>Loading...</h2> : null}
          {status === "error" ? <h2>Something went wrong!</h2> : null}
          {status === "success"
            ? data?.map((item: TestimonialProps) => (
                <SwiperSlide key={item.id}>
                  <div className="mx-auto w-[60%] text-center">
                    <p className="mb-8 font-normal text-white">{item.quote}</p>
                    <p className="flex items-baseline justify-center gap-2 text-white">
                      <span className="font-serif text-lg font-bold uppercase">
                        {item.author}
                      </span>
                      <span>|</span>
                      <span className="text-sm uppercase text-primary">
                        {item.designation}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
