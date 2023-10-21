import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleUp, FaEye } from "react-icons/fa";
import Avatar from "../ui/Avatar";

export default function Doctor({ t, pageData }) {
  const locale = useLocale();
  return (
    <div className="flex flex-col justify-between border bg-teal-50 border-gray-300 p-4 bg-white rounded-lg min-h-[380px] hover:shadow-lg transition duration-150">
      <div>
        <div className="flex items-center justify-center px-10 py-4">
          <Avatar
            src={pageData.profile_picture}
            sex={pageData.gender}
            width={500}
            height={500}
            className="rounded-full h-36 w-36 border border-gray-300 p-1"
            alt="Doctor avatar"
          />
        </div>
        <div className="text-center py-4">
          <h2 className="text-2xl mb-3">
            {t["Dr"]} {pageData.name[locale]}
          </h2>
          <p className="text-lg text-primary font-normal">
            {pageData.designation}
          </p>
          <p className="font-extralight">{pageData.degree?.join(", ")}</p>
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
