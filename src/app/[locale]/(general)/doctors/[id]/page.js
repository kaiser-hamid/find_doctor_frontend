import AboutDoctor from "./AboutDoctor";
import BannerSection from "./BannerSection";
import ChamberSection from "./ChamberSection";
import ProfileSummerySection from "./ProfileSummerySection";

//data fetching
const getPageData = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/doctors/${id}`);
    if (!res.ok) {
      throw Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.log(e.message);
    return [];
  }
};
export default async function page({ params: { id } }) {
  const { data: pageData, status } = await getPageData(id);
  return (
    <>
      <BannerSection />
      {/* <ProfileSummerySection data={pageData} />
      <ChamberSection data={pageData.chambers} />
      <AboutDoctor data={pageData} /> */}
    </>
  );
}
