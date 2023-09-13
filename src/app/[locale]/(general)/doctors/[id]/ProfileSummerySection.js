import { FaEye, FaPlus, FaStar } from "react-icons/fa";

export default () => {
  return (
    <section className="pt-8 sm:py-12">
      <div className="container">
        <div className="pt-24 sm:pb-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Dr. Haripada Dhar
            </h2>
            <div className="flex justify-center gap-4 py-4">
              <span className="text-base p-1 px-2 rounded text-indigo-600 bg-indigo-200">
                Medicine specialist
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6 justify-center items-center sm:border-y sm:py-4 lg:py-4">
          <div className="w-full py-4">
            <div className="border-l-8 border-l-teal-500 pl-8 h-14">
              <span>Client</span>
              <h4>Scarlet Johnson</h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-blue-500 pl-8 h-14">
              <span>Category</span>
              <h4>Mobile App</h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-yellow-500 pl-8 h-14">
              <span>Crafted Date</span>
              <h4>Oct 12, 2019</h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-green-400 pl-8 h-14">
              <span>Total Viewed</span>
              <h4 className="flex items-center gap-1">
                <FaEye className="inline text-blue-500" /> 6473
                <span className="text-2xl">+</span>
              </h4>
            </div>
          </div>
          <div className="w-full py-4">
            <div className="border-l-8 border-l-orange-500 pl-8 h-14">
              <span>Ratings</span>
              <div className="flex">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
