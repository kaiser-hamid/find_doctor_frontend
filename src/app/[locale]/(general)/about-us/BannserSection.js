import { useTranslations } from "next-intl";

export default () => {
  const t = useTranslations("about_us");
  return (
    <section className="pt-36 pb-24 bg-slate-100">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-5xl/tight text-3xl font-semibold mb-5 drop-shadow capitalize">
            {t("Who we are")}
          </h2>
        </div>
      </div>
    </section>
  );
};
