import { FaEye, FaPlus, FaStar } from "react-icons/fa";

export default () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="pt-24 pb-8 text-center">
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
        <div className="grid md:grid-cols-5 grid-cols-3 gap-6 justify-center items-center border-y py-8">
          <div>
            <span>Client</span>
            <h4>Scarlet Johnson</h4>
          </div>
          <div>
            <span>Category</span>
            <h4>Mobile App</h4>
          </div>
          <div>
            <span>Crafted Date</span>
            <h4>Oct 12, 2019</h4>
          </div>
          <div>
            <span>Total Viewed</span>
            <h4 className="flex items-center gap-1">
              <FaEye className="inline text-blue-500" /> 6473
              <span className="text-2xl">+</span>
            </h4>
          </div>
          <div>
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
    </section>
  );
};
