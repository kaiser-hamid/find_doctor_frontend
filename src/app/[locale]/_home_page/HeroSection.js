import SearchWidget from "./SearchWidget";
import TypeWriteWidget from "./TypeWriteWidget";
import HeroSlider from "./HeroSlider";
export default () => {
  return (
    <section className="relative pt-28 md:pt-44 pb-12 md:pb-36 bg-gradient-to-t from-slate-500/10">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div>
            <TypeWriteWidget />
            <SearchWidget />
          </div>
          <div className="order-1 lg:order-2 hidden sm:block">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
