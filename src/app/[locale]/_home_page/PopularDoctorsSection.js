"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "swiper/swiper-bundle.min.css";
import Doctor from "@/components/cards/Doctor";

export default () => {
  return (
    <section className="relative pb-36 bg-gradient-to-t from-slate-500/10">
      <div className="container">
        <div className="text-center py-8">
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            Popular Doctors
          </h1>
        </div>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={3}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
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
          <SwiperSlide>
            <Doctor />
          </SwiperSlide>
          <SwiperSlide>
            <Doctor />
          </SwiperSlide>
          <SwiperSlide>
            <Doctor />
          </SwiperSlide>
          <SwiperSlide>
            <Doctor />
          </SwiperSlide>
          <SwiperSlide>
            <Doctor />
          </SwiperSlide>
          <SwiperSlide>
            <Doctor />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
