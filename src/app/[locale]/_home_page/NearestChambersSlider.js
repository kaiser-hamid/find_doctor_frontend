"use client";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocale } from "next-intl";

export default ({ t, nearest_chambers }) => {
  const locale = useLocale();
  return (
    <div className="relative">
      <div className="hidden sm:block">
        <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8 after:bg-[url('/assets/images/pattern/dot2.svg')]" />
        <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('/assets/images/pattern/dot5.svg')]" />
        <div className="absolute -top-8 right-14">
          <dvi className="flex items-center gap-2 text-white">
            <span className="swiper-nav-prev bg-primary rounded py-1 px-4 cursor-pointer">
              <FaChevronLeft />
            </span>
            <span className="swiper-nav-next bg-primary rounded py-1 px-4 cursor-pointer">
              <FaChevronRight />
            </span>
          </dvi>
        </div>
      </div>
      <div className="sm:hidden absolute -top-8 right-0">
        <dvi className="flex items-center gap-2 text-white">
          <span className="swiper-nav-prev bg-primary rounded py-1 px-4 cursor-pointer">
            <FaChevronLeft />
          </span>
          <span className="swiper-nav-next bg-primary rounded py-1 px-4 cursor-pointer">
            <FaChevronRight />
          </span>
        </dvi>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".swiper-nav-next",
          prevEl: ".swiper-nav-prev",
        }}
        modules={[Navigation]}
      >
        {nearest_chambers?.map((item) => (
          <SwiperSlide>
            <div className="border rounded-md p-8">
              <h1 className="text-xl mb-3">{item.name[locale]}</h1>
              <p className="text-gray-400">{item.area[locale]} </p>
              <p className="text-gray-700 py-8">
                {item.operating_hours[locale]}{" "}
              </p>
              <button className="mt-10 flex items-center">
                <a
                  href="#"
                  className="border border-primary capitalize text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                >
                  {t["explore"]}
                </a>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
