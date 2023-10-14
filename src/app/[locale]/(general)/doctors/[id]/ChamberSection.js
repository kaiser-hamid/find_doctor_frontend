import { useLocale, useTranslations } from "next-intl";
import { FaStethoscope } from "react-icons/fa";
import CopyToClipboard from "@/components/ui/CopyToClipboard";
import { RANDCOLORPLATE } from "@/helpers/utils";

export default function ChamberSection({ data }) {
  const locale = useLocale();
  const t = useTranslations("doctor");
  return (
    <section className="lg:pb-20 pb-4">
      <div className="container">
        <div className="text-center my-14">
          <span className="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">
            {t("Chambers")}
          </span>
          <h1 className="md:text-3xl/tight text-2xl font-medium mt-3">
            {t("Appointment Schedules")}
          </h1>
        </div>
        <div className="px-4 sm:px-16 lg:px-24">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {data?.map((chamber, i) => (
              <li className="mb-10 ml-6" key={i}>
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaStethoscope />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {chamber.name[locale]}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {chamber.location[locale]}
                </time>
                <div className="flex items-center flex-wrap gap-2 py-2">
                  {chamber.week_days?.map((item, i) => (
                    <p
                      className={`bg-${RANDCOLORPLATE[i]}-500 shadow-xl border rounded-2xl text-sm text-white font-medium px-4 py-[2px]`}
                      key={i}
                    >
                      {t(`weekdays.${item}`)}
                    </p>
                  ))}
                </div>
                <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  {t("from time_a to time_b", {
                    time_a: chamber.schedule.start,
                    time_b: chamber.schedule.end,
                  })}
                </p>
                <div className="flex flex-wrap gap-2 items-center mb-4 text-sm font-semibold text-gray-900 dark:text-gray-400">
                  <span className="whitespace-nowrap"> {t("For serial")}:</span>
                  <div className="flex flex-wrap items-center gap-x-4">
                    {chamber.phone?.map((item) => (
                      <span key={item} className="flex items-center gap-x-1">
                        <a href={`tel:${item}`} className="text-blue-500">
                          {item}
                        </a>
                        <CopyToClipboard text={item} />
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  disabled
                  className="border border-gray-300 bg-gray-100 rounded-md py-2 px-4 cursor-not-allowed"
                >
                  {t("Get appointment online")}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
