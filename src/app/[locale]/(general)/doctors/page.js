import BannerSection from "./BannerSection";
import DoctorsSection from "./DoctorsSection";
import SearchSeaction from "./SearchSeaction";

//data fetching
const getPageData = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/doctors`);
    if (!res.ok) {
      throw Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.log(e.message);
    return [];
  }
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
