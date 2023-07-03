import { DATA } from "../../../../const";
import CardArea from "./components/CardArea";

export default function AreaPraktikSection() {
  const AreaPraktikSectionData = DATA.home.section.areaPraktik;

  return (
    <div className="w-full py-[120px] px-[260px] text-blue flex justify-between flex-col gap-8">
      <div className="flex h-full justify-between">
        <h2 className="text-[45px] font-bold leading-tight font-Cormorant-Garamond basis-3/12">
          {AreaPraktikSectionData.title}
        </h2>
        <div className="w-[1px] bg-[#3A4553]"></div>
        <span className="text-2xl font-light leading-snug font-Open-Sans basis-7/12 text-justify">
          {AreaPraktikSectionData.subTitle}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-7">
        {AreaPraktikSectionData.cards.map((item) => (
          <CardArea
            key={item.title}
            title={item.title}
            description={item.detail}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
