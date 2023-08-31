"use client";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowRight,
  FaMap,
  FaMapMarker,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1n gap-6 items-center">
          <div
            className="order-2 lg:order-1 2xl:w-9/12"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
              <FaMap className="text-blue-500" />
            </div>
            <h1 className="text-3xl/tight font-medium mt-6 mb-4">
              Hospital near you
            </h1>
            <p className="text-gray-500">
              YNo hospital found near you. Shown popular hospital instead.
              Alternate text!
            </p>
            <div className="flex items-center mt-12">
              <a href="#" className="text-primary">
                Explore more <FaArrowRight className="inline-block" />{" "}
                <i className="fa-solid fa-arrow-right ms-2" />{" "}
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="hidden sm:block">
              <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8 after:bg-[url('/assets/images/pattern/dot2.svg')]" />
              <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('/assets/images/pattern/dot5.svg')]" />
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <div className="px-14">
                  <div className="border rounded-md p-8">
                    <h1 className="text-xl mb-3">Popula Diagonstics</h1>
                    <p className="text-gray-500">
                      Don't find suitable opening? We'd still love to learn more
                      about you. Explore and we'll reach out to have interesting
                      conversation!
                    </p>
                    <button className="mt-10 flex items-center">
                      <a
                        href="#"
                        className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                      >
                        Explore
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-14">
                  <div className="border rounded-md p-8">
                    <h1 className="text-xl mb-3">Chevron</h1>
                    <p className="text-gray-500">
                      Learn more about us and who all work at Prompt. You will
                      get chance to work with everyone in the team.
                    </p>
                    <button className="mt-10 flex items-center">
                      <Link
                        href="/"
                        className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                      >
                        Explore
                      </Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
