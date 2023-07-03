import icon from "../../../../../assets/card_award_icon.svg";

interface ICardAward {
  title: string;
  year: string;
}

export default function CardAward({ title, year }: ICardAward) {
  return (
    <div className="flex py-8 px-10 items-center bg-bg-white gap-6">
      <img src={icon} />
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold font-Cormorant-Garamond text-blue">
          {title}
        </span>
        <span className="font-Outfit text-xl leading-snug text-[#909090]">
          {year}
        </span>
      </div>
    </div>
  );
}
