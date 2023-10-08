"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Doctor from "@/components/cards/Doctor";

import "swiper/swiper-bundle.min.css";

export default function PopularDoctorSlider({ t, popular_doctors }) {
  return (
    <Swiper
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={3}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="ms-popular-doctor"
    >
      {popular_doctors.map((item) => (
        <SwiperSlide>
          <Doctor t={t} pageData={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
