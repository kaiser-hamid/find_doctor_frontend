import { useTranslations } from "next-intl";

export default function BannerSection() {
  const t = useTranslations("general");
  return (
    <section className="hidden sm:block pt-36 pb-20">
      <div className="container">
        <div className="absolute inset-0 h-96 bg-cover bg-no-repeat bg-center bg-[url('/assets/images/blog/hero.png')]">
          <div className="relative w-full h-full z-30 bg-black bg-opacity-70" />
        </div>
        <div className="relative lg:w-3/5 mx-auto z-30 pt-14">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-8 capitalize">
              {t("Doctor list")}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
