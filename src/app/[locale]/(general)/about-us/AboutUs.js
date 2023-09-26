import { useTranslations } from "next-intl";

export default () => {
  const t = useTranslations("about_us");
  return (
    <section className="lg:py-24 sm:py-16 py-4">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:pb-28 pb-12">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="lg:border-t-2 lg:border-gray-300 w-1/5 mb-7" />
            <h1 className="text-3xl capitalize">{t("about us")}</h1>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <p className="text-sm/relaxed tracking-wider text-gray-600">
              {t("about_us_text")}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:pb-28 pb-12">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="lg:border-t-2 lg:border-gray-300 w-1/5 mb-7" />
            <h1 className="text-3xl capitalize">{t("our vision")}</h1>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <p className="text-sm/relaxed tracking-wider text-gray-600">
              {t("our_vision_text")}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:pb-28 pb-12">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="lg:border-t-2 lg:border-gray-300 w-1/5 mb-7" />
            <h1 className="text-3xl capitalize">{t("what we do")}</h1>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <p className="text-sm/relaxed tracking-wider text-gray-600">
              {t("what_we_do_text")}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:pb-28 pb-12">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="lg:border-t-2 lg:border-gray-300 w-1/5 mb-7" />
            <h1 className="text-3xl capitalize">{t("get involved")}</h1>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <p className="text-sm/relaxed tracking-wider text-gray-600">
              {t("get_involved_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
