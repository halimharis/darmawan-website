import { DATA } from "../../../../const";
import smallDetail from "../../../../assets/smalldetail2-black.svg";
import Carousel from "./carousel/Carousel";

function OurOfficeSection() {
  const ourOfficeData = DATA.home.section.ourOffice;

  return (
    <div className="py-32 px-[260px] flex flex-col items-center">
      <h2 className="text-h2 font-Cormorant-Garamond mb-6">
        {ourOfficeData.title}
      </h2>
      <img src={smallDetail} className="w-[95px] h-[44px]" />
      <Carousel images={ourOfficeData.carousel} />
    </div>
  );
}

export default OurOfficeSection;
