import image from "../../assets/profilebar_image.png";
import { DATA } from "../../const";

export default function Footer() {
  const FooterData = DATA.footer;
  return (
    <>
      <div className=" border-none flex flex-col bg-Consultation justify-between bg-cover ">
        <div className="flex py-[200px] px-[260px] justify-between items-center">
          <div className="flex flex-col basis-5/12">
            <h2 className="mb-6 text-[45px] font-bold leading-tight text-white font-Cormorant-Garamond">
              {FooterData.title}
            </h2>
            <p className="text-zinc-300 text-[20px] font-normal leading-snug font-Outfit">
              {FooterData.description}
            </p>
            <button className="py-7 px-20 block w-fit mt-8 bg-yellow text-blue text-xl font-medium font-Outfit">
              Kontak Kami
            </button>
          </div>
          <div className="bg-white basis-6/12">
            <div className="border-[14px] border-neutral-200 m-10 py-[68px] px-12">
              <h2 className="text-gray-900 text-[45px] font-bold leading-10 font-Cormorant-Garamond mb-4">
                {FooterData.card.title}
              </h2>
              <p className="text-neutral-400 text-[20px] font-normal leading-7 font-Outfit">
                {FooterData.card.description}
              </p>
              <div className="gap-3 items-center flex mt-9">
                <img src={FooterData.card.icon} />
                <div className="flex flex-col">
                  <span className="text-gray-800 text-[18px] font-medium capitalize font-Outfit">
                    Call Us On:
                  </span>
                  <span className="text-sky-950 text-[24px] font-semibold leading-9 font-Inter">
                    {FooterData.card.phoneNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[120px] flex justify-center items-center bg-blue z-30">
          <img src={image} className="w-[77px] h-[90px]" />
        </div>
      </div>
    </>
  );
}
