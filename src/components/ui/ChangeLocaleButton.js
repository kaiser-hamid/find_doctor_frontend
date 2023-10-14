"use client";
import { useLocale } from "next-intl";
import Link from "next-intl/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function ChangeLocaleButton() {
  const locale = useLocale();
  const pathname = usePathname();
  let path = pathname.replace(/\/(bn|en)\b/, "");
  path = path || "/";
  const searchParams = useSearchParams();
  const sp = searchParams.toString();
  if (sp) {
    path += `?${sp}`;
  }
  return (
    <>
      {locale === "bn" ? (
        <Link
          locale="en"
          href={path}
          className="bg-black text-white px-4 py-2 rounded inline-flex items-center text-sm"
        >
          English
        </Link>
      ) : (
        <Link
          locale="bn"
          href={path}
          className="bg-blue-600 text-white px-4 py-2 rounded inline-flex items-center text-sm"
        >
          বাংলা
        </Link>
      )}
    </>
  );
}
