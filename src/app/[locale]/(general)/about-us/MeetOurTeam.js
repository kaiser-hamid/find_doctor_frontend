import { useTranslations } from "next-intl";

export default function MeetOurTeam() {
  const t = useTranslations("about_us");
  return (
    <section className="lg:pb-24 pb-16">
      <div className="container">
        <div className="text-center">
          <span className="text-sm bg-primary/10 text-primary/40 rounded-full px-3 py-1">
            {t("Our team")}
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4 capitalize">
            {t("Meet our team")}
          </h1>
        </div>
        <div className="mt-14">
          <div
            className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12"
            data-aos="fade-up"
          >
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="assets/images/avatars/img-1.jpg"
                  alt="avatar"
                  className="h-16 w-16 rounded-md"
                />
                <div>
                  <h6 className="font-medium">{t("Dr Hamid Hossain Azad")}</h6>
                  <p className="text-gray-500">{t("CEO")}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="assets/images/avatars/img-2.jpg"
                  alt="avatar"
                  className="h-16 w-16 rounded-md"
                />
                <div>
                  <h6 className="font-medium">{t("Kaiser Hamid")}</h6>
                  <p className="text-gray-500">{t("Developer")}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="assets/images/avatars/img-3.jpg"
                  alt="avatar"
                  className="h-16 w-16 rounded-md"
                />
                <div>
                  <h6 className="font-medium">{t("Mizanur Rahman")}</h6>
                  <p className="text-gray-500">{t("Coordinator")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
