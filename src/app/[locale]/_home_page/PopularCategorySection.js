import HOC from "@/components/hoc/HOC";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { BiCategoryAlt } from "react-icons/bi";

export default function PopularCategorySection({ categories }) {
  const t = useTranslations("home.category");
  const locale = useLocale();
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            {t("Dive into categories")}
          </h1>
        </div>
        <div className="mt-14">
          <HOC data={categories}>
            <div className="grid cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
              {categories?.map((categgory, i) => (
                <Link href={`/doctors?speciality=${categgory.name.en}`} key={i}>
                  <div
                    className="flex gap-6 items-center"
                    data-aos="fade-up"
                    data-aos-duration={300}
                  >
                    <div>
                      <span className="h-16 w-16 bg-primary/20 rounded-md flex items-center justify-center">
                        <BiCategoryAlt className="text-2xl text-primary" />
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-2 font-medium">
                        {categgory.name[locale]}
                      </h6>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </HOC>
        </div>
      </div>
    </section>
  );
}
