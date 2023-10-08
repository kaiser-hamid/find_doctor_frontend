import BannerSection from "./BannerSection";
import ChamberSection from "./ChamberSection";

//data fetching
const getPageData = async () => {
  const res = await fetch(`${process.env.API_URL}/chambers`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async function chambers() {
  const { data: pageData } = await getPageData();

  return (
    <>
      <BannerSection />
      <ChamberSection chambers={pageData} />
    </>
  );
}
