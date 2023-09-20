import { useFormatter, useTranslations } from "next-intl";

export default () => {
  const t = useTranslations("general");
  const t_home = useTranslations("home");

  const format = useFormatter();
  return (
    <section className="lg:pt-16 lg:pb-24 py-8">
      <div className="container" data-aos="fade-up">
        <div className="text-center">
          <span className="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">
            {t_home("Stats")}
          </span>
          <h1 className="text-3xl/tight font-medium mt-3">
            {t_home("Our Resources")}
          </h1>
        </div>
        <div className="mt-14">
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 text-center gap-10 lg:gap-6">
            <div>
              <span className="text-3xl">{format.number(100)}+</span>
              <h1 className="mt-3 mb-1 capitalize">{t("chambers")} </h1>
              <p class="text-gray-500">
                {t_home("across item countries", { item: 10 })}
              </p>
            </div>
            <div>
              <span className="text-3xl">{format.number(3210)}+</span>
              <h1 className="mt-3 mb-1 capitalize">{t("doctors")}</h1>
              <p class="text-gray-500">
                {t_home("across item countries", { item: 10 })}
              </p>
            </div>
            <div>
              <span className="text-3xl">{format.number(100)}+</span>
              <h1 className="mt-3 mb-1 capitalize">{t("visitors")}</h1>
              <p class="text-gray-500">
                {t_home("across item countries", { item: 10 })}
              </p>
            </div>
            <div>
              <span className="text-3xl">{format.number(8)}</span>
              <h1 className="mt-3 mb-1">{t("Awards won")} </h1>
              <p class="text-gray-500">
                {t_home("across item countries", { item: 10 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
