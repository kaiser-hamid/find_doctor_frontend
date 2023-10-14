import { FaSync } from "react-icons/fa";
import ChamberWidget from "./ChamberWidget";
import { useTranslations } from "next-intl";

export default function ChamberSection({ chambers }) {
  const t = useTranslations("general");
  const cw = {
    explore: t("explore"),
  };
  return (
    <section className="sm:py-12 lg:py-20">
      <span className="hidden bg-emerald-100 bg-cyan-100 bg-blue-100 bg-orange-100 bg-pink-100 bg-red-100 bg-purple-100, bg-amber-100, bg-lime-100 bg-indigo-100"></span>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-16">
          {chambers?.map((item) => (
            <ChamberWidget key={item._id} chamber={item} t={cw} />
          ))}
        </div>
        <div className="flex justify-center py-24">
          <button
            type="button"
            className="flex items-center gap-1 text-center p-2 h-[38px] rounded border border-primary text-white bg-primary hover:shadow hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-150"
          >
            <FaSync className="inline" /> {t("Load more")}
          </button>
        </div>
      </div>
    </section>
  );
}
