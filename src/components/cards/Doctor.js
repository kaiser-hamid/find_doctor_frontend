import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleUp, FaEye } from "react-icons/fa";

export default function Doctor({ t, pageData }) {
  const locale = useLocale();
  return (
    <div className="flex flex-col justify-between border bg-teal-50 border-gray-300 p-4 bg-white rounded-lg min-h-[380px] hover:shadow-lg transition duration-150">
      <div>
        <div className="flex items-center justify-center px-10 py-4">
          <Image
            width={500}
            height={500}
            src="/assets/images/avatars/img-2.jpg"
            alt="Doctor image"
            className="rounded-full h-36 w-36 border border-gray-300 p-1"
          />
        </div>
        <div className="text-center py-4">
          <h2 className="text-xl mb-3">{pageData.name[locale]}</h2>
          <ul className="font-semibold">
            {pageData.speciality?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {pageData.education?.join(", ")}
        </div>
      </div>

      <div className="flex justify-end px-4">
        <Link
          href={`/doctors/${pageData.id}`}
          className="w-full text-center p-2 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-sm hover:shadow-primary/50 focus:outline-none focus:outline-primary/50 transition duration-150"
        >
          {t["View details"]} <FaEye className="inline-block" />
        </Link>
      </div>
    </div>
  );
}
