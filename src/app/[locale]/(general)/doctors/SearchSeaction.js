"use client";
import Axios from "@/axios/Axios";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import SelectWithSearchMulti from "@/components/ui/SelectWithSearchMulti";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchSeaction() {
  const locale = useLocale();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState({
    name: "",
    speciality: "",
    designation: "",
    chamber: "",
    degree: "",
    gender: "",
    experience: "",
  });

  const [speciality_options, setSpeciality_options] = useState([]);
  const [designation_options, setDesignation_options] = useState([]);
  const [chamber_options, setChamber_options] = useState([]);

  useState(() => {
    const fetchServerData = async () => {
      try {
        const {
          data: { data, status },
        } = await Axios.get("doctors/form-helper-data");
        if (status) {
          setSpeciality_options(data.speciality_options);
          setDesignation_options(data.designation_options);
          setChamber_options(data.chamber_options);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchServerData();
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setSearchInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handeSearchSubmit = () => {
    const searchQuery = new URLSearchParams(searchInput).toString();
    router.push(`/doctors?${searchQuery}`);
  };

  const experienceOptions = [
    { id: "0-1", label: "0-1", value: "0-1" },
    { id: "1-3", label: "1-3", value: "1-3" },
    { id: "3-5", label: "3-5", value: "3-5" },
    { id: "5-10", label: "5-10", value: "5-10" },
    { id: "10-20", label: "10-20", value: "10-20" },
    { id: "20-70", label: "Above 20", value: "20-70" },
  ];
  const genderOptions = [
    { id: "male", label: "Male", value: "male" },
    { id: "female", label: "Female", value: "female" },
  ];

  return (
    <section className="pt-28 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={searchInput.name}
              onChange={handleInputChange}
              className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400 placeholder-gray-300"
              placeholder={"Type doctor name"}
            />
          </div>
          <div className="w-full">
            <SelectWithSearch
              name="speciality"
              value={searchInput.speciality}
              onChange={handleInputChange}
              options={speciality_options}
              placeholderText={"Type or select speciality"}
            />
          </div>
          <div className="w-full">
            <SelectWithSearch
              name="designation"
              value={searchInput.designation}
              onChange={handleInputChange}
              options={designation_options}
              placeholderText={"Type or select designation"}
            />
          </div>
          <div className="w-full">
            <SelectWithSearch
              name="chamber"
              value={searchInput.chamber}
              onChange={handleInputChange}
              options={chamber_options}
              placeholderText={"Type or select chamber"}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="degree"
              value={searchInput.degree}
              onChange={handleInputChange}
              className="w-full form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400 placeholder-gray-300"
              placeholder={"Type degree"}
            />
          </div>
          <div className="w-full">
            <SelectWithSearch
              name="gender"
              value={searchInput.gender}
              onChange={handleInputChange}
              options={genderOptions}
              placeholderText={"Select gender"}
            />
          </div>
          <div className="w-full">
            <SelectWithSearch
              name="experience"
              value={searchInput.experience}
              onChange={handleInputChange}
              options={experienceOptions}
              placeholderText={"Select experience"}
            />
          </div>
          <div className="w-full col-span-1 md:col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={handeSearchSubmit}
              className="flex items-center justify-center gap-1 w-full text-center px-2 h-[38px] rounded border border-primary text-white bg-primary hover:shadow-md hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-250"
            >
              <FaSearch className="inline" /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
