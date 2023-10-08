import { useLocale } from "next-intl";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection({ testimonials }) {
  const locale = useLocale();
  return (
    <section className="py-12">
      <div className="container">
        <div className="mt-14">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {testimonials?.map((item) => (
              <div className="p-10 border rounded-xl bg-slate-100 shadow">
                <FaQuoteLeft className="text-3xl" />
                <p className="my-4">{item.details[locale]}</p>
                <div className="border-b border-gray-200 w-full my-7" />
                <div className="flex items-center gap-2">
                  <img
                    src="assets/images/avatars/img-2.jpg"
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-sm mb-1">{item.name[locale]}</h1>
                    <p className="text-gray-500 text-xs">
                      {item.profession[locale]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
