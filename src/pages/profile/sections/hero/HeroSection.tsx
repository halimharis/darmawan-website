import { DATA } from "../../../../const";
import smallDetailIcon from "../../../../assets/smalldetail-white.svg";

export default function HeroSection() {
  const HeroSectionData = DATA.profile.section.hero;

  return (
    <div className="h-[calc(0.56_*_100vw)] bg-Profile_Hero flex items-end text-bg-white px-80">
      <div className="flex items-center gap-4 justify-between mb-[106px]">
        <div className="basis-4/12 relative">
          <img src={DATA.profile.section.hero.pict} className="relative z-20" />
          <div className="absolute w-full h-full border border-orange-300 -top-8 -left-8 z-10"></div>
        </div>
        <div className="flex flex-col basis-7/12">
          <h2 className="text-[45px] leading-tight font-Cormorant-Garamond mb-1 text-slate-50 font-bold">
            {HeroSectionData.title}
          </h2>
          <img src={smallDetailIcon} className="h-[44px] w-[95px] mb-8" />
          <p className="text-[28px] font-medium font-Cormorant-Garamond leading-snug text-justify text-slate-50">
            {HeroSectionData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
