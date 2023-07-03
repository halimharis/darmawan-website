import { DATA } from "../../../../const";
import ContactDarmawanForms from "./components/ContactDarmawanForms";

export default function ContactDarmawanSection() {
  const contactDarmawanData = DATA.contact.section.contactDarmawan;

  return (
    <div className="py-[120px] px-[260px]">
      <div className="flex justify-between gap-14 mb-24">
        <div className="flex flex-col text-blue">
          <h2 className="text-[30px] font-bold leading-tight font-Cormorant-Garamond mb-4">
            {contactDarmawanData.title}
          </h2>
          <p className="font-Outfit leading-snug text-[20px]">
            {contactDarmawanData.subTitle}
          </p>
        </div>
        <div className="w-[1px] bg-blue"></div>
        <div className="flex flex-col text-blue">
          <h2 className="text-[30px] font-bold leading-tight font-Cormorant-Garamond mb-4">
            {contactDarmawanData.address1.city}
          </h2>
          <p className="font-Outfit leading-snug text-[20px]">
            {contactDarmawanData.address2.fullAddress}
          </p>
        </div>
        <div className="w-[1px] bg-blue"></div>
        <div className="flex flex-col text-blue">
          <h2 className="text-[30px] font-bold leading-tight font-Cormorant-Garamond mb-4">
            {contactDarmawanData.address2.city}
          </h2>
          <p className="font-Outfit leading-snug text-[20px]">
            {contactDarmawanData.address2.fullAddress}
          </p>
        </div>
      </div>
      <ContactDarmawanForms
        callUs={contactDarmawanData.callUs}
        emailUs={contactDarmawanData.emailUs}
      />
    </div>
  );
}
