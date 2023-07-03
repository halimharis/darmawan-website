import { DATA } from "../../../../const";
import smallDetailIcon from "../../../../assets/smalldetail2.svg";
import CardAward from "./components/CardAward";

export default function AwardsSection() {
  const PenghargaanData = DATA.home.section.penghargaan;

  return (
    <div className="relative bg-Penghargaan bg-cover bg-center text-bg-white">
      <div className="px-[260px] py-24 flex flex-col items-center">
        <div className="flex flex-col items-center w-2/3">
          <h2 className="text-h2 font-Cormorant-Garamond mb-6 text-center">
            {PenghargaanData.title}
          </h2>
          <img src={smallDetailIcon} className="w-[95px] h-[44px]" />
          <h5 className="text-xl leading-snug font-Outfit text-center mt-12">
            {PenghargaanData.subtitle}
          </h5>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-14 pb-14 border-b">
          {PenghargaanData.cards.map((item) => (
            <CardAward {...item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
