import HeroImage from "../../../assets/HeroBackgroundHomepage.png";
import PersonImage from "../../../assets/Darmawan-Yusuf_heroImage.png";
import DetailImage from "../../../assets/smalldetail.svg";
import { DATA } from "../../../const";

export default function HeroSection() {
  const heroSectionData = DATA.home.section.hero;

  return (
    <div className="bg-blue flex text-bg-white">
      <img src={HeroImage} className="absolute z-10 w-full" />
      <div className="z-20 w-full px-[250px] flex pt-72 justify-between items-center">
        <div className="basis-6/12 flex flex-col text-bg-white">
          <img src={DetailImage} className="h-[44px] w-[95px] mb-12" />
          <h1 className="text-h1 font-Cormorant-Garamond mb-3 ">
            {heroSectionData.nama}
          </h1>
          <h3 className="text-2xl font-poppins leading-normal">
            {heroSectionData.pekerjaan}
          </h3>
          <button className="py-7 px-20 block w-fit mt-12 bg-yellow text-blue text-xl font-medium">
            Kontak Kami
          </button>
        </div>
        <img src={PersonImage} className="" />
      </div>
    </div>
  );
}
