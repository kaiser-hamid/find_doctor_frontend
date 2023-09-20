import HealthTipsSection from "./_home_page/HealthTipsSection";
import HeroSection from "./_home_page/HeroSection";
import NearestChambersSection from "./_home_page/NearestChambersSection";
import PopularCategorySection from "./_home_page/PopularCategorySection";
import PopularDoctorsSection from "./_home_page/PopularDoctorsSection";
import TestimonialSection from "./_home_page/TestimonialSection";
import OurResource from "./_home_page/OurResource";

//data fetching
const getPageData = async () => {
  const res = await fetch("http://localhost:3000/api/init-home-page");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const { data: pageData } = await getPageData();

  return (
    <>
      <HeroSection chamber_options={pageData.chamber_options} />
      <PopularCategorySection />
      <PopularDoctorsSection popular_doctors={pageData.popular_doctors} />
      <NearestChambersSection nearest_chambers={pageData.nearest_chambers} />
      <HealthTipsSection tips={pageData.tips} />
      <TestimonialSection testimonials={pageData.testimonials} />
      <OurResource />
    </>
  );
}
