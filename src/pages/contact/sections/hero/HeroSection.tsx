import smallDetailIcon from "../../../../assets/smalldetail2.svg";
import { DATA } from "../../../../const";

export default function HeroSection() {
  const HeroSectionData = DATA.contact.section.hero;
  return (
    <div className="h-[calc(0.39_*_100vw)] bg-cover flex flex-col text-h1 justify-end items-center font-Cormorant-Garamond text-bg-white bg-Aboutus_Hero">
      <div className="flex flex-col items-center mb-52">
        <h1 className="mb-8">{HeroSectionData.title}</h1>
        <img src={smallDetailIcon} className="w-[95px] h-[44px]" />
      </div>
    </div>
  );
}
