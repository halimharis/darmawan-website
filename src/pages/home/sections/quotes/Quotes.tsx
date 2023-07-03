import { DATA } from "../../../../const";
import smallDetail from "../../../../assets/smalldetail2.svg";

export default function QuotesSection() {
  const QuotesData = DATA.home.section.quotes;
  return (
    <div className="bg-Quote px-72 py-44 flex flex-col gap-6 bg-cover items-center text-bg-white">
      <h2 className="text-h1 font-Cormorant-Garamond text-center">
        {QuotesData.quote}
      </h2>
      <img src={smallDetail} className="w-[95px] h-[44px]" />
      <h2 className="text-h1 font-Cormorant-Garamond text-center">
        {QuotesData.subject}
      </h2>
    </div>
  );
}
