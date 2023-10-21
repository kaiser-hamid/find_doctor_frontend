import CopyToClipboard from "@/components/ui/CopyToClipboard";
import Rating from "@/components/ui/Rating";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { FaCheck, FaEye, FaRegHandPointRight } from "react-icons/fa";

export default function ProfileSummerySection({ data }) {
  const format = useFormatter();
  const t = useTranslations("general");
  const locale = useLocale();
  return (
    <section className="pt-8 sm:py-12">
      <div className="container">
        <div className="pt-24 sm:pb-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              {t("Dr")} {data?.name[locale]}
            </h2>
            <div className="flex justify-center gap-4 py-4">
              <span className="text-xl font-light py-1 rounded-lg text-primary">
                {data.designation}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 justify-center items-center sm:border-y sm:py-4 lg:py-4">
          <div className="w-full py-4">
            <div className="border-l-8 border-l-blue-500 pl-8 h-14">
              <p>{t("BMDC Reg")}</p>
              <h4>{data.reg_no || "[Not available]"}</h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-teal-500 pl-8 h-14 capitalize">
              <p>{t("Year of experience")}</p>
              <h4>{data.experience || "[Not available]"}</h4>
            </div>
          </div>

          <div className="w-full py-4">
            <div className="border-l-8 border-l-yellow-500 pl-8 h-14 capitalize">
              <p>{t("email")}</p>
              <h4 className="flex items-center gap-x-1">
                {data.email ? (
                  <>
                    <span>{data.email}</span>
                    <CopyToClipboard text={data.email} />
                  </>
                ) : (
                  "[Not available]"
                )}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-16">
          <div className="col-span-1 border rounded-lg p-4">
            <div className="border-b">
              <h4 className="text-center pb-2">Speciality</h4>
            </div>
            <div className="p-4 leading-8">
              <ul>
                {data.speciality?.map((sp) => (
                  <li key={sp}>
                    <FaRegHandPointRight className="inline text-blue-600" />{" "}
                    <span className="px-2"> {sp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-1 border rounded-lg p-4">
            <div className="border-b">
              <h4 className="text-center pb-2">Degree</h4>
            </div>
            <div className="p-4 leading-8">
              <ul>
                {data.degree?.map((dg) => (
                  <li key={dg}>
                    <FaCheck className="inline text-primary" />{" "}
                    <span className="px-2"> {dg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
