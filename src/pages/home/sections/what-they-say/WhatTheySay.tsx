import { DATA } from "../../../../const";
import smallDetail from "../../../../assets/smalldetail2-black.svg";
import CardWhatTheySaid from "./components/CardWhatTheySaid";

export default function WhatTheySaySection() {
  const WhatTheySaySectionData = DATA.home.section.whatTheySay;
  return (
    <div className="py-28 px-[260px] flex flex-col items-center">
      <h2 className="font-Cormorant-Garamond text-h2 text-center text-blue mb-6">
        {WhatTheySaySectionData.title}
      </h2>
      <img src={smallDetail} className="w-[95px] h-[44px]" />
      <div className="flex mt-16 gap-5">
        {WhatTheySaySectionData.cards.map((item, index) => (
          <CardWhatTheySaid
            {...item}
            key={index}
            reversed={index % 2 === 0 ? false : true}
          />
        ))}
      </div>
    </div>
  );
}
