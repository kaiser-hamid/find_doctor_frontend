"use client";
import SelectWithSearch from "../../../components/ui/SelectWithSearch";
import { useState } from "react";
import { doctorSpecialityOption } from "../../../helpers/form-helper";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default () => {
  const [searchInput, setSearchInput] = useState({
    name: "",
    speciality: "",
    chamber: "",
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setSearchInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div className="my-8">
        <label>Doctor name</label>
        <input
          type="text"
          name="name"
          className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full">
          <label>Speciality</label>
          <SelectWithSearch
            name="speciality"
            value={searchInput.speciality}
            onChange={handleInputChange}
            options={doctorSpecialityOption}
            placeholderText="Type speciality.."
          />
        </div>
        <div className="w-full">
          <label>Chamber</label>
          <SelectWithSearch
            name="chamber"
            value={searchInput.chamber}
            onChange={handleInputChange}
            options={doctorSpecialityOption}
            placeholderText="Type chamber.."
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 mt-10">
        <Link
          href={`/doctors?name=${searchInput.name}&speciality=${searchInput.speciality}&chamber=${searchInput.chamber}`}
          className="w-full text-center py-2 block rounded border border-primary text-white bg-primary hover:shadow-md hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-250"
        >
          <FaSearch className="inline" /> Search doctor
        </Link>
      </div>
    </>
  );
};
