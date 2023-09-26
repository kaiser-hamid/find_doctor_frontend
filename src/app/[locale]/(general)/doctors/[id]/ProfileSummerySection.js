import Rating from "@/components/ui/Rating";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { FaEye } from "react-icons/fa";

export default ({ data }) => {
  const format = useFormatter();
  const t = useTranslations("general");
  const locale = useLocale();
  return (
    <section className="pt-8 sm:py-12">
      <div className="container">
        <div className="pt-24 sm:pb-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              {t("Dr")} {data.name[locale]}
            </h2>
            <div className="flex justify-center gap-4 py-4">
              {data.speciality?.map((sp) => (
                <span className="text-base p-1 px-2 rounded text-indigo-600 bg-indigo-200">
                  {sp}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6 justify-center items-center sm:border-y sm:py-4 lg:py-4">
          <div className="w-full py-4">
            <div className="border-l-8 border-l-blue-500 pl-8 h-14">
              <p>{t("BMDC Reg")}</p>
              <h4>{data.reg_no}</h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-teal-500 pl-8 h-14 capitalize">
              <p>{t("experience")}</p>
              <h4>{data.experience[locale]}</h4>
            </div>
          </div>

          <div className="w-full py-4">
            <div className="border-l-8 border-l-yellow-500 pl-8 h-14">
              <p>{t("education")}</p>
              <h4>{data.education.join(", ")}</h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-green-400 pl-8 h-14">
              <p>{t("Total Viewed")}</p>
              <h4 className="flex items-center gap-1">
                <FaEye className="inline text-blue-500" />{" "}
                {format.number(data.total_views)}
                <span className="text-2xl">+</span>
              </h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-orange-500 pl-8 h-14 capitalize">
              <p>{t("rating")}</p>
              <Rating data={data.rating} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
