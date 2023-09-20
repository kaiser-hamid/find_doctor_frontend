import { FaArrowRight, FaMap } from "react-icons/fa";
import NearestChambersSlider from "./NearestChambersSlider";
import { useTranslations } from "next-intl";

export default ({ nearest_chambers }) => {
  const t = useTranslations("general");
  const t_home = useTranslations("home");
  const nc = {
    explore: t("explore"),
  };
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div
            className="2xl:w-9/12"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            <div className="flex lg:justify-start justify-center">
              <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
                <FaMap className="text-blue-500" />
              </div>
            </div>
            <div className=" text-center lg:text-left">
              <h1 className="text-3xl/tight font-medium mt-6 mb-4">
                {t_home("Chambers near you")}
              </h1>
              <p className="text-gray-500">
                {t_home("No chamber found near you")}{" "}
                {t_home("Shown popular chambers instead")}
              </p>
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center py-4 lg:py-0 lg:mt-12">
                  <a href="#" className="text-primary">
                    {t("Explore more")}{" "}
                    <FaArrowRight className="inline-block" />{" "}
                    <i className="fa-solid fa-arrow-right ms-2" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <NearestChambersSlider t={nc} nearest_chambers={nearest_chambers} />
        </div>
      </div>
    </section>
  );
};
