import SearchWidget from "./SearchWidget";
import TypeWriteWidget from "./TypeWriteWidget";
import HeroSlider from "./HeroSlider";
import { useTranslations } from "next-intl";
export default function HeroSection({ chamber_options }) {
  const t_tww = useTranslations("home.typewriter_widget");
  const t_sw = useTranslations("home.search_widget");
  const tww = {
    Welcome: t_tww("Welcome"),
    "Find your doctor by": t_tww("Find your doctor by"),
    "doctor name": t_tww("doctor name"),
    location: t_tww("location"),
    chamber: t_tww("chamber"),
  };
  const sw = {
    "Type doctor name": t_sw("Type doctor name"),
    "Type or select speciality": t_sw("Type or select speciality"),
    "Type or select chamber": t_sw("Type or select chamber"),
    "Search doctor": t_sw("Search doctor"),
  };
  return (
    <section className="relative pt-28 md:pt-44 pb-12 md:pb-36 bg-gradient-to-t from-slate-500/10">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div>
            <TypeWriteWidget t={tww} />
            <SearchWidget t={sw} chamber_options={chamber_options} />
          </div>
          <div className="order-1 lg:order-2 hidden sm:block">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
