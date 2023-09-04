import { FaHospital, FaStethoscope } from "react-icons/fa";

export default () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="px-8 lg:px-24">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FaStethoscope />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Popular Hospital
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Chawkbazar, chittagong
              </time>
              <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
                From 07:00pm to 09:00pm
              </p>
              <p className="flex gap-2 items-center mb-4 text-sm font-semibold text-gray-900 dark:text-gray-400">
                <span> For serial:</span>
                <a href="tel:+8801818786756" className="text-blue-500">
                  +8801818786756
                </a>
                <button
                  type="button"
                  className="border border-gray-300 bg-gray-100 rounded text-xs py-1 font-thin px-2"
                >
                  Copy
                </button>
              </p>
              <button
                type="button"
                disabled
                className="border border-gray-300 bg-gray-100 rounded-md py-2 px-4 cursor-not-allowed"
              >
                Get Appointment
              </button>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FaStethoscope />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Epic
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Chawkbazar, chittagong
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                From 07:00pm to 09:00pm
              </p>
              <p className="flex gap-2 items-center mb-4 text-sm font-semibold text-gray-900 dark:text-gray-400">
                <span> For serial:</span>
                <a href="tel:+8801818786756" className="text-blue-500">
                  +8801818786756
                </a>
                <button
                  type="button"
                  className="border border-gray-300 bg-gray-100 rounded text-xs py-1 font-thin px-2"
                >
                  Copy
                </button>
              </p>
              <button
                type="button"
                disabled
                className="border border-gray-300 bg-gray-100 rounded-md py-2 px-4 cursor-not-allowed"
              >
                Get Appointment
              </button>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FaStethoscope />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Parkview
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Chawkbazar, chittagong
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                From 07:00pm to 09:00pm
              </p>
              <p className="flex gap-2 items-center mb-4 text-sm font-semibold text-gray-900 dark:text-gray-400">
                <span> For serial:</span>
                <a href="tel:+8801818786756" className="text-blue-500">
                  +8801818786756
                </a>
                <button
                  type="button"
                  className="border border-gray-300 bg-gray-100 rounded text-xs py-1 font-thin px-2"
                >
                  Copy
                </button>
              </p>
              <button
                type="button"
                disabled
                className="border border-gray-300 bg-gray-100 rounded-md py-2 px-4 cursor-not-allowed"
              >
                Get Appointment
              </button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
