"use client";
import SelectWithSearch from "../../../components/ui/SelectWithSearch";
import { useState } from "react";
import { doctorSpecialityOption } from "../../../helpers/form-helper";
import Link from "next/link";
import { useLocale } from "next-intl";
import { FaSearch } from "react-icons/fa";
export default function SearchWidget({ t, chamber_options }) {
  const locale = useLocale();
  const [searchInput, setSearchInput] = useState({
    name: "",
    speciality: "",
    chamber: "",
  });

  const speciality_options = doctorSpecialityOption.map((item) => {
    return {
      id: item.id,
      label: item.label[locale],
      value: item.value,
    };
  });
  const chamberOptions = chamber_options.map((item) => {
    return {
      id: item.id,
      label: item.label[locale],
      value: item.value,
    };
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setSearchInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <input
            type="text"
            name="name"
            className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400 placeholder-gray-300"
            placeholder={t["Type doctor name"]}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="w-full">
            <SelectWithSearch
              name="speciality"
              value={searchInput.speciality}
              onChange={handleInputChange}
              options={speciality_options}
              placeholderText={t["Type or select speciality"]}
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="w-full">
            <SelectWithSearch
              name="chamber"
              value={searchInput.chamber}
              onChange={handleInputChange}
              options={chamberOptions}
              placeholderText={t["Type or select chamber"]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 mt-10">
        <Link
          href={`/doctors?name=${searchInput.name}&speciality=${searchInput.speciality}&chamber=${searchInput.chamber}`}
          className="w-full text-center py-2 block rounded border border-primary text-white bg-primary hover:shadow-md hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-250"
        >
          <FaSearch className="inline" /> {t["Search doctor"]}
        </Link>
      </div>
    </>
  );
}
