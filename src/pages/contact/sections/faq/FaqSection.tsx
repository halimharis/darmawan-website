import { DATA } from "../../../../const";
import smallDetailIcon from "../../../../assets/smalldetail2.svg";

export default function FaqSection() {
  const FaqSectionData = DATA.contact.section.faq;
  return (
    <div className="py-[120px] px-[260px] flex flex-col items-center">
      <h2 className="text-[45px] font-Cormorant-Garamond font-bold leading-tight text-blue mb-5">
        {FaqSectionData.title}
      </h2>
      <img src={smallDetailIcon} className="w-[95px] h-[44px]" />
      <div className="grid grid-cols-2 auto-rows-auto mt-[120px] gap-x-24 gap-y-14">
        {FaqSectionData.questions.map((item) => (
          <div className="flex flex-col pb-14 border-b border-b-[#C5C5C5]">
            <h4 className="text-[45px] text-blue font-Cormorant-Garamond font-bold leading-tight mb-4">
              {item.question}
            </h4>
            <p className="font-Outfit text-[20px] leading-snug text-[#909090]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
