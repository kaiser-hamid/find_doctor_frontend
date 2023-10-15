import BannerSection from "./BannerSection";
import DoctorsSection from "./DoctorsSection";
import SearchSeaction from "./SearchSeaction";

//data fetching
const getPageData = async (queryString) => {
  try {
    const res = await fetch(`${process.env.API_URL}/doctors?${queryString}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.log(e.message);
    return [];
  }
};
export default async function page({ searchParams }) {
  const queryString = new URLSearchParams(searchParams)?.toString();
  const { data: pageData } = await getPageData(queryString);
  return (
    <>
      <BannerSection />
      <SearchSeaction />
      <DoctorsSection doctors={pageData} />
    </>
  );
}
