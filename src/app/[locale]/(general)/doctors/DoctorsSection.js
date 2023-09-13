import Doctor from "@/components/cards/Doctor";
import PaginationNP from "@/components/ui/PaginationPN";

export default function DoctorsSection() {
  return (
    <section className="pb-24">
      <div className="container">
        <div
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 lg:py-12 sm:py-10 py-14"
          data-aos="fade-up"
        >
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
          <Doctor />
        </div>
        <PaginationNP />
      </div>
    </section>
  );
}
