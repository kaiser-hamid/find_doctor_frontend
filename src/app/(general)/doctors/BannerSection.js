import SearchWidget from "./SearchWidget";

export default function BannerSection() {
  return (
    <section className="pt-36 pb-20">
      <div className="container">
        <div className="absolute inset-0 h-96 bg-cover bg-no-repeat bg-center bg-[url('/assets/images/blog/hero.png')]">
          <div className="relative w-full h-full z-30 bg-black/10" />
        </div>
        <div className="relative lg:w-3/5 mx-auto z-30">
          <div className="text-center text-white">
            <h2 className="text-5xl font-semibold mb-8">Doctor List</h2>
            <SearchWidget />
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
