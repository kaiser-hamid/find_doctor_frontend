import Link from "next/link";
import {
  FaArrowAltCircleUp,
  FaFirstAid,
  FaHeartbeat,
  FaHospital,
  FaStethoscope,
} from "react-icons/fa";

export default () => {
  return (
    <section
      className="py-14 md:py-20 bg-primary/10 relative"
      data-aos="fade-up"
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container relative">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Tips
          </span>
          <h2 className="md:text-3xl text-xl font-semibold my-5">
            Some Trendy Tips
          </h2>
          <p className="text-slate-500">
            The benefits that will make you comfort
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
          <div className="bg-white p-6 rounded">
            <div className="flex gap-5">
              <div>
                <div className="flex justify-center items-center bg-primary/10 rounded-md w-12 h-12">
                  <FaStethoscope className="text-2xl text-teal-500" />
                </div>
              </div>
              <div>
                <h5 className="mb-2">High-Speed Wireless</h5>
                <p>
                  We've watched Tailwind grow up over the years and understand
                  it better than almost anyone.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded">
            <div className="flex gap-5">
              <div>
                <div className="flex justify-center items-center bg-primary/10 rounded-md w-12 h-12">
                  <FaHeartbeat className="text-2xl text-pink-500" />
                </div>
              </div>
              <div>
                <h5 className="mb-2">High-Speed Wireless</h5>
                <p>
                  We've watched Tailwind grow up over the years and understand
                  it better than almost anyone.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded">
            <div className="flex gap-5">
              <div>
                <div className="flex justify-center items-center bg-primary/10 rounded-md w-12 h-12">
                  <FaFirstAid className="text-2xl text-red-500" />
                </div>
              </div>
              <div>
                <h5 className="mb-2">High-Speed Wireless</h5>
                <p>
                  We've watched Tailwind grow up over the years and understand
                  it better than almost anyone.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded">
            <div className="flex gap-5">
              <div>
                <div className="flex justify-center items-center bg-primary/10 rounded-md w-12 h-12">
                  <FaHospital className="text-2xl text-emerald-500" />
                </div>
              </div>
              <div>
                <h5 className="mb-2">High-Speed Wireless</h5>
                <p>
                  We've watched Tailwind grow up over the years and understand
                  it better than almost anyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
