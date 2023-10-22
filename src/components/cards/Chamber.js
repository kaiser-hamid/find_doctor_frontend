import { useLocale } from "next-intl";
import { FaMapMarked, FaPhone } from "react-icons/fa";
import { HiGlobeAlt, HiMail } from "react-icons/hi";
import CopyToClipboard from "@/components/ui/CopyToClipboard";
import ChamberImage from "../ui/ChamberImage";

export default function Chamber({ t, chamber }) {
  const locale = useLocale();
  return (
    <div className="flex flex-col justify-between border rounded p-6 bg-slate-100 h-[320px]">
      <div>
        <div className="flex gap-4 pb-4">
          <div className="flex justify-center items-center bg-white h-20 w-20 rounded-lg">
            <ChamberImage src={chamber?.logo} alt={chamber.name.en} />
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
            {chamber.phone?.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <div>
                  <FaPhone className="inline-block text-teal-500 mx-2" />{" "}
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
                <CopyToClipboard text={phone} />
              </li>
            ))}

            {chamber?.email && (
              <li>
                <HiMail className="inline-block mx-2 text-red-700" />{" "}
                <span>{chamber?.email}</span>
              </li>
            )}

            {chamber?.website && (
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
            )}
            <li>
              <FaMapMarked className="inline-block mx-2 text-blue-500" />{" "}
              <span>{chamber?.address[locale]}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 mb-3">
        <a
          href="#"
          className="py-3 px-6 rounded border capitalize border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-250"
        >
          {t["explore"]}
        </a>
      </div>
    </div>
  );
}
