"use client";
import { copyTextOnClicked } from "@/helpers/utils";
import { useState } from "react";
import { FaCopy, FaStethoscope } from "react-icons/fa";

export default () => {
  const [copiedText, setCopiedText] = useState("");

  return (
    <section className="pb-20">
      <div className="container">
        <h2 className="text-green-500">{copiedText}</h2>
        <div className="px-4 sm:px-16 lg:px-24">
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
                  onClick={copyTextOnClicked}
                  data-text_to_be_copied="+8801818786756-1"
                  className="flex gap-1 justify-center items-center border border-gray-300 bg-gray-700 hover:bg-gray-800 transition duration-150 text-white rounded text-xs py-1 font-thin px-2"
                >
                  <FaCopy /> Copy
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
                  onClick={copyTextOnClicked}
                  data-text_to_be_copied="+8801818786756-2"
                  className="flex gap-1 justify-center items-center border border-gray-300 bg-gray-700 hover:bg-gray-800 transition duration-150 text-white rounded text-xs py-1 font-thin px-2"
                >
                  <FaCopy /> Copy
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
                  onClick={copyTextOnClicked}
                  data-text_to_be_copied="+8801818786756-3"
                  className="flex gap-1 justify-center items-center border border-gray-300 bg-gray-700 hover:bg-gray-800 transition duration-150 text-white rounded text-xs py-1 font-thin px-2"
                >
                  <FaCopy /> Copy
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
