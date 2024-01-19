import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "../utils/helper";

const Clients = () => {
  return (
    <section aria-labelledby="Clients">
      <div className="container mx-auto">
        <Swiper
          loop={true}
          speed={1500}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={false}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client1}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client2}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client3}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client4}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client5}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client6}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client2}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img
              src={client5}
              alt="client"
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
