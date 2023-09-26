import { useLocale, useTranslations } from "next-intl";

export default ({ data }) => {
  const t = useTranslations("doctor");
  const locale = useLocale();
  return (
    <section className="pb-20">
      <div className="container">
        <div className="mt-8">
          <div>
            <h3 className="text-2xl">
              {t("about doctor", { name: data.name[locale] })}
            </h3>
            <p className="text-slate-800 mt-4">
              {data.about_doctor && data.about_doctor[locale]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
