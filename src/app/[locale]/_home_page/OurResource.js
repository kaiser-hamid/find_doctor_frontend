export default () => {
  return (
    <section className="lg:pt-16 lg:pb-24 py-8">
      <div className="container" data-aos="fade-up">
        <div className="text-center">
          <span className="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">
            Stats
          </span>
          <h1 className="text-3xl/tight font-medium mt-3">Our Resources</h1>
        </div>
        <div className="mt-14">
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 text-center gap-10 lg:gap-6">
            <div>
              <span className="text-3xl">100+</span>
              <h1 className="mt-3 mb-1">Chambers </h1>
              <p class="text-gray-500">across 10+ countries</p>
            </div>
            <div>
              <span className="text-3xl">$21M+</span>
              <h1 className="mt-3 mb-1">Doctors</h1>
              <p class="text-gray-500">across 10+ countries</p>
            </div>
            <div>
              <span className="text-3xl">100+</span>
              <h1 className="mt-3 mb-1">Visitors</h1>
              <p class="text-gray-500">across 10+ countries</p>
            </div>
            <div>
              <span className="text-3xl">8</span>
              <h1 className="mt-3 mb-1">Awards Won </h1>
              <p class="text-gray-500">across 10+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
