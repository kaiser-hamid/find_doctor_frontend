import HealthTipsSection from "./_home_page/HealthTipsSection";
import HeroSection from "./_home_page/HeroSection";
import NearestChambersSection from "./_home_page/NearestChambersSection";
import PopularCategorySection from "./_home_page/PopularCategorySection";
import PopularDoctorsSection from "./_home_page/PopularDoctorsSection";
import TestimonialSection from "./_home_page/TestimonialSection";
import OurResource from "./_home_page/OurResource";

//data fetching
const getPageData = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/init-home-page`);
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
      <HeroSection
        chamber_options={pageData.chamber_options}
        speciality_options={pageData.speciality_options}
      />
      <PopularCategorySection />
      <PopularDoctorsSection popular_doctors={pageData.popular_doctors} />
      <NearestChambersSection nearest_chambers={pageData.nearest_chambers} />
      <HealthTipsSection tips={pageData.tips} />
      <TestimonialSection testimonials={pageData.testimonials} />
      <OurResource />
    </>
  );
}
