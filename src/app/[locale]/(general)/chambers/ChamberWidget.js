"use client";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import Aos from "aos";
import { FaMapMarked, FaPhone } from "react-icons/fa";
import { HiGlobeAlt, HiMail } from "react-icons/hi";

//aos css
import "aos/dist/aos.css";
import CopyToClipboard from "@/components/ui/CopyToClipboard";

export default function ChamberWidget({ chamber, t }) {
  const locale = useLocale();

  useEffect(() => {
    initAos();
  }, []);
  const initAos = () => {
    Aos.init({
      offset: 100,
      duration: 300,
      easing: "ease-in-sine",
      delay: 100,
    });
  };
  return (
    <>
      <div className="border rounded p-6 bg-slate-100" data-aos="fade-up">
        <div className="flex gap-4 pb-4">
          <div className="flex justify-center items-center bg-white h-20 w-20 rounded-lg">
            {/* <Image
                    src={item?.logo}
                    height={96}
                    width={96}
                    alt="Chamber logo"
                  /> */}
            <img
              src={chamber?.logo}
              className="h-[74px] w-[74px] rounded-lg"
              alt="Chamber logo"
            />
          </div>
          <div>
            <h3 className="text-xl text-gray-700">{chamber.name[locale]}</h3>
            <p className="text-gray-500 font-semibold my-2">
              {chamber?.area[locale]}
            </p>
          </div>
        </div>
        <div>
          <ul>
            <li className="flex items-center gap-2">
              <div>
                <FaPhone className="inline-block text-teal-500 mx-2" />{" "}
                <a href={`tel:${chamber?.phone}`}>{chamber?.phone}</a>
              </div>
              <CopyToClipboard text={chamber?.phone} />
            </li>
            <li>
              <HiMail className="inline-block mx-2 text-red-700" />{" "}
              <span>{chamber?.email}</span>
            </li>
            <li>
              <HiGlobeAlt className="inline-block mx-2 text-indigo-500" />{" "}
              <a
                href={chamber?.website}
                className="text-blue-500 hover:underline transition duration-250"
                target="_blank"
              >
                {chamber?.website}
              </a>
            </li>
            <li>
              <FaMapMarked className="inline-block mx-2 text-blue-500" />{" "}
              <span>{chamber?.address[locale]}</span>
            </li>
          </ul>
        </div>
        <div className="mt-8 mb-3">
          <a
            href="#"
            className="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-250"
          >
            {t["explore"]}
          </a>
        </div>
      </div>
    </>
  );
}
