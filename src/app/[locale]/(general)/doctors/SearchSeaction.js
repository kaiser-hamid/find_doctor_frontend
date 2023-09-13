import { FaSearch } from "react-icons/fa";

export default function SearchSeaction() {
  return (
    <section className="pt-28 sm:pt-32">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-gray-500">
          <div className="w-full">
            <input
              type="text"
              name="name"
              className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="name"
              className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="name"
              className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="name"
              className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400"
            />
          </div>
          <div className="w-full">
            <button
              type="button"
              className="flex items-center justify-center gap-1 w-full text-center px-2 h-[38px] rounded border border-primary text-white bg-primary hover:shadow-md hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-250"
            >
              <FaSearch className="inline" /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
