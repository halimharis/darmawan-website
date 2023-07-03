import { DATA } from "../../../../const";
import smallDetailIcon from "../../../../assets/smalldetail-blue.svg";
import CardMember from "./components/CardMember";

export default function OurTeamSection() {
  const OurTeamSectionData = DATA.aboutUs.section.ourTeam;

  return (
    <div className="px-[260px] py-[120px] flex flex-col text-blue">
      <div className="flex justify-between mb-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-[45px] font-Cormorant-Garamond font-bold leading-tight">
            {OurTeamSectionData.title}
          </h2>
          <img src={smallDetailIcon} className="w-[95px] h-[44px]" />
        </div>
        <div className="w-[1px] bg-blue"></div>
        <p className="basis-7/12 text-2xl">{OurTeamSectionData.subTitle}</p>
      </div>
      <div className="grid grid-cols-3 gap-[126px]">
        {OurTeamSectionData.members.map((member) => (
          <CardMember {...member} />
        ))}
      </div>
    </div>
  );
}
