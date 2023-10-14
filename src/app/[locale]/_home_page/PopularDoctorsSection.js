import { useTranslations } from "next-intl";
import PopularDoctorSlider from "./PopularDoctorSlider";

export default function PopularDoctorsSection({ popular_doctors }) {
  const t_home = useTranslations("home");
  const t = useTranslations("general");
  const pd = {
    "View details": t("View details"),
    Dr: t("Dr"),
  };

  return (
    <section className="relative pb-36 bg-gradient-to-t from-slate-500/10">
      <div className="container">
        <div className="text-center py-8">
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            {t_home("Popular Doctors")}
          </h1>
        </div>
        <PopularDoctorSlider t={pd} popular_doctors={popular_doctors} />
      </div>
    </section>
  );
}
