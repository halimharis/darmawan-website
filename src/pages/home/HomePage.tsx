import HeroSection from "./sections/HeroSection";
import AreaPraktikSection from "./sections/area-praktik/PraktikSection";
import OurOfficeSection from "./sections/our-office/OurOffice";
import AwardsSection from "./sections/penghargaan/Penghargaan";
import PrioritySection from "./sections/priority/PrioritySection";
import ProfileSection from "./sections/profile/ProfileSection";
import QuotesSection from "./sections/quotes/Quotes";
import WhatTheySaySection from "./sections/what-they-say/WhatTheySay";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PrioritySection />
      <ProfileSection />
      <AreaPraktikSection />
      <AwardsSection />
      <OurOfficeSection />
      <QuotesSection />
      <WhatTheySaySection />
    </>
  );
}
