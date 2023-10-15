import Doctor from "@/components/cards/Doctor";
import HOC from "@/components/hoc/HOC";
import PaginationNP from "@/components/ui/PaginationPN";
import { useTranslations } from "next-intl";

export default function DoctorsSection({ doctors }) {
  const t = useTranslations("general");
  const pd = {
    "View details": t("View details"),
    Dr: t("Dr"),
  };
  const pnp = {
    next: t("next"),
    prev: t("prev"),
  };
  return (
    <section className="pb-24">
      <div className="container lg:py-12 sm:py-10 py-14">
        <HOC data={doctors}>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
            {doctors?.map((doctor) => (
              <Doctor key={doctor.id} pageData={doctor} t={pd} />
            ))}
          </div>
          <div className="mt-16 hidden">
            <PaginationNP t={pnp} />
          </div>
        </HOC>
      </div>
    </section>
  );
}
