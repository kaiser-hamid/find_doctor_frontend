import { useLocale, useTranslations } from "next-intl";
import { FaStethoscope } from "react-icons/fa";
import CopyToClipboard from "@/components/ui/CopyToClipboard";

export default ({ data }) => {
  const locale = useLocale();
  const t = useTranslations("doctor");
  return (
    <section className="pb-20">
      <div className="container">
        <div className="px-4 sm:px-16 lg:px-24">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {data?.map((chamber) => (
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaStethoscope />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {chamber.name[locale]}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {chamber.location[locale]}
                </time>
                <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  {t("from time_a to time_b", {
                    time_a: chamber.schedule.start,
                    time_b: chamber.schedule.end,
                  })}
                </p>
                <p className="flex gap-2 items-center mb-4 text-sm font-semibold text-gray-900 dark:text-gray-400">
                  <span> {t("For serial")}:</span>
                  <a href={`tel:${chamber.phone}`} className="text-blue-500">
                    {chamber.phone}
                  </a>
                  <CopyToClipboard text={chamber.phone} />
                </p>
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
};
