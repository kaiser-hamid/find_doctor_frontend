import { useLocale, useTranslations } from "next-intl";
import { FaStar, FaUser, FaUserAlt } from "react-icons/fa";

export default ({ data }) => {
  const t = useTranslations("doctor");
  const locale = useLocale();
  // return (
  //   <section className="pb-20">
  //     <div className="container">
  //       <div className="mt-8">
  //         <div className="text-justify">
  //           <h3 className="text-2xl">
  //             {t("about doctor", { name: data.name[locale] })}
  //           </h3>
  //           <p className="text-slate-800 mt-4">
  //             {data.about_doctor && data.about_doctor[locale]}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section className="pb-20" data-aos="fade-up">
      <div className="container relative">
        <div className="text-center">
          <h2 className="md:text-3xl text-xl font-semibold my-5">
            {t("about doctor", { name: data.name[locale] })}
          </h2>
        </div>
        <div className="text-justify mt-12">
          {data.about_doctor && data.about_doctor[locale]}
        </div>
      </div>
    </section>
  );
};
