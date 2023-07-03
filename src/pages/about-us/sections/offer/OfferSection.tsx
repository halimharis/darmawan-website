import { DATA } from "../../../../const";
import smallDetailIcon from "../../../../assets/smalldetail2-black.svg";
import CardOffer from "./components/CardOffer";

export default function OfferSection() {
  const OfferSectionData = DATA.aboutUs.section.whatWeOffer;

  return (
    <div className="flex flex-col py-[120px] px-[196px] items-center">
      <h1 className="mb-8 text-[45px] text-blue font-Cormorant-Garamond capitalize leading-tight font-bold text-center">
        {OfferSectionData.title}
      </h1>
      <img src={smallDetailIcon} className="w-[95px] h-[44px] mb-14" />
      <div className="grid grid-cols-2 gap-2">
        {OfferSectionData.cards.map((item) => (
          <CardOffer {...item} />
        ))}
      </div>
    </div>
  );
}
