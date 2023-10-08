import BannerSection from "./BannerSection";
import ChamberSection from "./ChamberSection";

//data fetching
const getPageData = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/chambers`);
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
      <ChamberSection chambers={pageData} />
    </>
  );
}
