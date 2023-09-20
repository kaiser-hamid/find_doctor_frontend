import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaArrowAltCircleUp,
  FaFirstAid,
  FaHeartbeat,
  FaHospital,
  FaLightbulb,
  FaStethoscope,
} from "react-icons/fa";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";

export default ({ tips }) => {
  const t = useTranslations("home");
  const locale = useLocale();
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
            {t("Tips")}
          </span>
          <h2 className="md:text-3xl text-xl font-semibold my-5">
            {t("Some Trendy Tips")}
          </h2>
          <p className="text-slate-500">
            {t("The benefits that will make you comfort")}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {tips?.map((item) => (
            <div className="bg-white p-6 rounded">
              <div className="flex gap-5">
                <div>
                  <div className="flex justify-center items-center bg-yellow-50 rounded-md w-12 h-12">
                    <HiOutlineLightBulb className="text-3xl text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2">{item.title[locale]}</h5>
                  <p>{item.details[locale]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
