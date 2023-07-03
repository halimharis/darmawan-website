import quoteIcon from "../../../../../assets/quote_icon_card.svg";

interface ICardWhatTheySaid {
  name: string;
  job: string;
  sentence: string;
  photo: string;
  reversed: boolean;
}

export default function CardWhatTheySaid({
  name,
  job,
  sentence,
  photo,
  reversed,
}: ICardWhatTheySaid) {
  return (
    <div className={`${reversed && "flex-col-reverse"} flex flex-col gap-5`}>
      <div
        className={`${
          reversed ? "rounded-tl-[40px]" : "rounded-bl-[40px]"
        } py-[70px] px-12 bg-blue flex flex-col gap-7`}
      >
        <img src={quoteIcon} className="w-[30px] h-[25px]" />
        <span className="text-[#F6FAFF] text-xl font-Outfit leading-snug ">
          {sentence}
        </span>
      </div>
      <div className="flex text-blue gap-5">
        <img src={photo} className="rounded-full" />
        <div className="flex flex-col justify-center">
          <span className="text-3xl font-Cormorant-Garamond font-bold leading-tight">
            {name}
          </span>
          <span className="text-xl font-Outfit leading-snug">{job}</span>
        </div>
      </div>
    </div>
  );
}
