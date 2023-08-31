"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FaArrowAltCircleUp } from "react-icons/fa";

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
          pagination={{
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={3}
          rewind={true}
          modules={[Autoplay]}
          className="ms-popular-doctor"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-between border border-gray-300 p-4 bg-white rounded-lg min-h-[380px] hover:shadow-lg transition duration-150">
              <div>
                <div className="flex items-center justify-center px-20 py-4">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/avatars/img-2.jpg"
                    alt="Doctor image"
                    className="rounded-full h-36 w-36 border border-gray-300 p-1"
                  />
                </div>
                <div className="text-center py-4">
                  <h2 className="text-xl mb-3">Dr Nowrin Khan</h2>
                  <p>Medical Executive</p>
                  <p>MBBS, BCS, FFC(UK)</p>
                </div>
              </div>

              <div className="flex justify-end px-4">
                <Link
                  href={`/doctors/uuid`}
                  className="text-primary hover:underline text-xs font-semibold transition duration-250"
                >
                  View details <FaArrowAltCircleUp className="inline-block" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between border border-gray-300 p-4 bg-white rounded-lg min-h-[380px] hover:shadow-lg transition duration-150">
              <div>
                <div className="flex items-center justify-center px-20 py-4">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/avatars/img-2.jpg"
                    alt="Doctor image"
                    className="rounded-full h-36 w-36 border border-gray-300 p-1"
                  />
                </div>
                <div className="text-center py-4">
                  <h2 className="text-xl mb-3">Dr Nowrin Khan</h2>
                  <p>Medical Executive</p>
                  <p>MBBS, BCS, FFC(UK)</p>
                </div>
              </div>

              <div className="flex justify-end px-4">
                <Link
                  href={`/doctors/uuid`}
                  className="text-primary hover:underline text-xs font-semibold transition duration-250"
                >
                  View details <FaArrowAltCircleUp className="inline-block" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between border border-gray-300 p-4 bg-white rounded-lg min-h-[380px] hover:shadow-lg transition duration-150">
              <div>
                <div className="flex items-center justify-center px-20 py-4">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/avatars/img-2.jpg"
                    alt="Doctor image"
                    className="rounded-full h-36 w-36 border border-gray-300 p-1"
                  />
                </div>
                <div className="text-center py-4">
                  <h2 className="text-xl mb-3">Dr Nowrin Khan</h2>
                  <p>Medical Executive</p>
                  <p>MBBS, BCS, FFC(UK)</p>
                </div>
              </div>

              <div className="flex justify-end px-4">
                <Link
                  href={`/doctors/uuid`}
                  className="text-primary hover:underline text-xs font-semibold transition duration-250"
                >
                  View details <FaArrowAltCircleUp className="inline-block" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between border border-gray-300 p-4 bg-white rounded-lg min-h-[380px] hover:shadow-lg transition duration-150">
              <div>
                <div className="flex items-center justify-center px-20 py-4">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/avatars/img-2.jpg"
                    alt="Doctor image"
                    className="rounded-full h-36 w-36 border border-gray-300 p-1"
                  />
                </div>
                <div className="text-center py-4">
                  <h2 className="text-xl mb-3">Dr Nowrin Khan</h2>
                  <p>Medical Executive</p>
                  <p>MBBS, BCS, FFC(UK)</p>
                </div>
              </div>

              <div className="flex justify-end px-4">
                <Link
                  href={`/doctors/uuid`}
                  className="text-primary hover:underline text-xs font-semibold transition duration-250"
                >
                  View details <FaArrowAltCircleUp className="inline-block" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between border border-gray-300 p-4 bg-white rounded-lg min-h-[380px] hover:shadow-lg transition duration-150">
              <div>
                <div className="flex items-center justify-center px-20 py-4">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/images/avatars/img-2.jpg"
                    alt="Doctor image"
                    className="rounded-full h-36 w-36 border border-gray-300 p-1"
                  />
                </div>
                <div className="text-center py-4">
                  <h2 className="text-xl mb-3">Dr Nowrin Khan</h2>
                  <p>Medical Executive</p>
                  <p>MBBS, BCS, FFC(UK)</p>
                </div>
              </div>

              <div className="flex justify-end px-4">
                <Link
                  href={`/doctors/uuid`}
                  className="text-primary hover:underline text-xs font-semibold transition duration-250"
                >
                  View details <FaArrowAltCircleUp className="inline-block" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
