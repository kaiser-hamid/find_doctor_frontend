import Doctor from "@/components/cards/Doctor";
import PaginationNP from "@/components/ui/PaginationPN";

export default function DoctorsSection() {
  return (
    <section className="pb-24">
      <div className="container">
        <div
          className="grid lg:grid-cols-3 gap-8 lg:py-16 py-14"
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
