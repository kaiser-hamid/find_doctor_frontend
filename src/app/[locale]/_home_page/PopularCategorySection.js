import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaBookMedical,
  FaBriefcaseMedical,
  FaClinicMedical,
  FaCommentMedical,
  FaFileMedical,
  FaHandHoldingMedical,
  FaLaptopMedical,
  FaNotesMedical,
  FaPrescriptionBottle,
} from "react-icons/fa";

export default () => {
  const t = useTranslations("home.category");
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            {t("Dive into categories")}
          </h1>
        </div>
        <div className="mt-14">
          <div className="grid cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            <Link href="/doctors?speciality=">
              <div
                className="flex gap-6 items-center"
                data-aos="fade-up"
                data-aos-duration={300}
              >
                <div>
                  <span className="h-16 w-16 bg-emerald-200 rounded-md flex items-center justify-center">
                    <FaLaptopMedical className="text-2xl text-emerald-400" />
                  </span>
                </div>
                <div>
                  <h6 className="mb-2 font-medium">{t("Pediatrics")}</h6>
                </div>
              </div>
            </Link>
            <Link href="/doctors?speciality=">
              <div
                className="flex gap-6 items-center"
                data-aos="fade-up"
                data-aos-duration={300}
              >
                <div>
                  <span className="h-16 w-16 bg-cyan-200 rounded-md flex items-center justify-center">
                    <FaHandHoldingMedical className="text-2xl text-cyan-400" />
                  </span>
                </div>
                <div>
                  <h6 className="mb-2 font-medium">{t("Neurology")}</h6>
                </div>
              </div>
            </Link>
            <Link href="/doctors?speciality=">
              <div
                className="flex gap-6 items-center"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <div>
                  <span className="h-16 w-16 bg-blue-200 rounded-md flex items-center justify-center">
                    <FaPrescriptionBottle className="text-2xl text-blue-400" />
                  </span>
                </div>
                <div>
                  <h6 className="mb-2 font-medium">{t("Obstetrics")}</h6>
                </div>
              </div>
            </Link>
            <Link href="/doctors?speciality=">
              <div
                className="flex gap-6 items-center"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <div>
                  <span className="h-16 w-16 bg-orange-200 rounded-md flex items-center justify-center">
                    <FaCommentMedical className="text-2xl text-orange-400" />
                  </span>
                </div>
                <div>
                  <h6 className="mb-2 font-medium">{t("Oncology")}</h6>
                </div>
              </div>
            </Link>
            <Link href="/doctors?speciality=">
              <div
                className="flex gap-6 items-center"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <div>
                  <span className="h-16 w-16 bg-pink-200 rounded-md flex items-center justify-center">
                    <FaNotesMedical className="text-2xl text-pink-400" />
                  </span>
                </div>
                <div>
                  <h6 className="mb-2 font-medium">{t("Orthopedics")}</h6>
                </div>
              </div>
            </Link>
            <Link href="/doctors?speciality=">
              <div
                className="flex gap-6 items-center"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <div>
                  <span className="h-16 w-16 bg-red-200 rounded-md flex items-center justify-center">
                    <FaFileMedical className="text-2xl text-red-400" />
                  </span>
                </div>
                <div>
                  <h6 className="mb-2 font-medium">{t("Urology")}</h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
