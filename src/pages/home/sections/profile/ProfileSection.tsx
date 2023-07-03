import { DATA } from "../../../../const";
import DetailImage from "../../../../assets/smalldetail.svg";

export default function ProfileSection() {
  const profileSectionData = DATA.home.section.profile;

  return (
    <div className="w-full py-[125px] px-[262px] bg-blue text-bg-white flex justify-between items-center">
      <div className="basis-4/12 flex flex-col justify-between gap-8">
        <img src={profileSectionData.photo1} />
        <img src={profileSectionData.photo2} />
      </div>
      <div className="basis-7/12 gap-11 flex flex-col">
        <div className="flex flex-col gap-8">
          <h2 className="text-[45px] font-bold font-Cormorant-Garamond w-4/5 leading-tight">
            {profileSectionData.title}
          </h2>
          <img src={DetailImage} className="h-[44px] w-[95px]" />
        </div>
        <p className="text-[28px] text-justify font-Open-Sans font-light leading-snug">
          {profileSectionData.detail}
        </p>
        <button className="py-7 px-20 block w-fit bg-yellow text-blue text-xl font-medium">
          Selengkapnya
        </button>
      </div>
    </div>
  );
}
