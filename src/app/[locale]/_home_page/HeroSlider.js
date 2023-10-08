"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";

export default function HeroSlider() {
  return (
    <div className="relative">
      <div className="hidden sm:block">
        <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('/assets/images/pattern/dot2.svg')]" />
        <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('/assets/images/pattern/dot5.svg')]" />
      </div>
      <div
        id="swiper_one"
        className="swiper border-[6px] border-white bg-white 2xl:w-[140%] shadow"
        data-aos="fade-left"
        data-aos-duration={1000}
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              src="assets/images/demo/home-app.jpg"
              alt="saas1"
              className="w-full h-full rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/images/demo/home-portfolio.jpg"
              alt="saas3"
              className="w-full h-full rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/images/demo/home-saas.jpg"
              alt="saas2"
              className="w-full h-full rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/images/demo/home-marketing.jpg"
              alt="saas3"
              className="w-full h-full rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/images/demo/home-saas2.jpg"
              alt="saas3"
              className="w-full h-full rounded-md"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
