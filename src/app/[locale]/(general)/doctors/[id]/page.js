import AboutDoctor from "./AboutDoctor";
import BannerSection from "./BannerSection";
import ChamberSection from "./ChamberSection";
import ProfileSummerySection from "./ProfileSummerySection";

//data fetching
const getPageData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/doctors/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async ({ params: { id } }) => {
  const { data: pageData, status } = await getPageData(id);
  return (
    <>
      <BannerSection />
      <ProfileSummerySection data={pageData} />
      <AboutDoctor data={pageData} />
      <ChamberSection data={pageData.chambers} />
    </>
  );
};
