import HealthTipsSection from "./_home_page/HealthTipsSection";
import HeroSection from "./_home_page/HeroSection";
import NearestHospitalSection from "./_home_page/NearestHospitalSection";
import PopularCategorySection from "./_home_page/PopularCategorySection";
import PopularDoctorsSection from "./_home_page/PopularDoctorsSection";
import TestimonialSection from "./_home_page/TestimonialSection";
import WhoWeAreSection from "./_home_page/WhoWeAreSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategorySection />
      <NearestHospitalSection />
      <PopularDoctorsSection />
      <HealthTipsSection />
      <TestimonialSection />
      <WhoWeAreSection />
    </>
  );
}
