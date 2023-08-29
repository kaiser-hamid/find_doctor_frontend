"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default () => {
  return (
    <section className="py-12">
      <div className="container">
        <div class="text-center">
          <h1 class="text-3xl/tight font-medium mt-3 mb-4">
            Hospital near you
          </h1>
          <p class="text-slate-400">
            No hospital found near you. Shown popular hospital instead
          </p>
        </div>
        <div className="mt-14">
          <Swiper
            slidesPerView={2}
            spaceBetween={2}
            loop={true}
            autoplay={true}
          >
            <SwiperSlide>
              <div>
                <div className="border rounded-md p-8">
                  <h1 className="text-xl mb-3">Get in touch</h1>
                  <p className="text-gray-500">
                    Don't find suitable opening? We'd still love to learn more
                    about you. Contact us and we'll reach out to have
                    interesting conversation!
                  </p>
                  <button className="mt-10 flex items-center">
                    <a
                      href="#"
                      className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                    >
                      Contact Us
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="border rounded-md p-8">
                  <h1 className="text-xl mb-3">Meet the team</h1>
                  <p className="text-gray-500">
                    Learn more about us and who all work at Prompt. You will get
                    chance to work with everyone in the team.
                  </p>
                  <button className="mt-10 flex items-center">
                    <Link
                      href="/"
                      className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                    >
                      Contact Us
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="border rounded-md p-8">
                  <h1 className="text-xl mb-3">Get in touch</h1>
                  <p className="text-gray-500">
                    Don't find suitable opening? We'd still love to learn more
                    about you. Contact us and we'll reach out to have
                    interesting conversation!
                  </p>
                  <button className="mt-10 flex items-center">
                    <Link
                      href="/"
                      className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                    >
                      Contact Us
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="border rounded-md p-8">
                  <h1 className="text-xl mb-3">Meet the team</h1>
                  <p className="text-gray-500">
                    Learn more about us and who all work at Prompt. You will get
                    chance to work with everyone in the team.
                  </p>
                  <button className="mt-10 flex items-center">
                    <Link
                      href="/"
                      className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                    >
                      Contact Us
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
