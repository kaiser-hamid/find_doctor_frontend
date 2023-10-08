import BannerSection from "./BannerSection";
import DoctorsSection from "./DoctorsSection";
import SearchSeaction from "./SearchSeaction";

//data fetching
const getPageData = async () => {
  const res = await fetch(`${process.env.API_URL}/doctors`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async function page() {
  const { data: pageData } = await getPageData();
  return (
    <>
      <BannerSection />
      <SearchSeaction />
      <DoctorsSection doctors={pageData} />
    </>
  );
}
