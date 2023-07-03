import smallDetail from "../../../../assets/smalldetail2-black.svg";
import { DATA } from "../../../../const";

export default function AboutSection() {
  const AboutSectionData = DATA.profile.section.aboutDarmawan;

  return (
    <div className="py-[120px] px-[260px] flex flex-col items-center text-blue">
      <h2 className="text-[45px] font-Cormorant-Garamond font-bold leading-tight mb-5">
        {AboutSectionData.title}
      </h2>
      <img src={smallDetail} className="w-[95px] h-[44px] mb-10" />
      {AboutSectionData.description.map((p) => (
        <>
          <p className="text-h6 font-medium font-Cormorant-Garamond text-justify text-blue">
            {p}
          </p>
          <br />
        </>
      ))}
      <div className="my-[120px] flex gap-8">
        {AboutSectionData.pict.map((pict) => (
          <img src={pict} />
        ))}
      </div>
      <h2 className="text-[45px] font-Cormorant-Garamond font-bold leading-tight mb-5">
        {AboutSectionData.organizationTitle}
      </h2>
      <img src={smallDetail} className="w-[95px] h-[44px] mb-5" />
      <h2 className="text-[45px] font-Cormorant-Garamond font-bold leading-tight mb-16">
        {AboutSectionData.antaraLain}
      </h2>
      <div className="flex flex-col gap-8">
        {AboutSectionData.organizations.map((organization, index) => (
          <div className="border-b border-blue pb-8 flex text-2xl font-semibold font-Open-Sans">
            <span className="font-bold">
              {index < 9 && 0}
              {index + 1}.
            </span>
            <p className="text-justify pl-7">{organization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
