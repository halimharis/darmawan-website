import image from "../../assets/profilebar_image.png";
import NavContact from "./components/NavContact";
import NavLink from "./components/NavLink";
import callIcon from "../../assets/callwithborder2.png";
import mailIcon from "../../assets/mailwithborder2.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const url = useLocation().pathname;

  return (
    <div className="absolute px-[250px] w-full py-2 flex flex-col justify-center items-center gap-5 z-40">
      <img src={image} className="w-[77px] h-[90px]" />
      <div className="border-t-2 border-b-2 border-[#4E555F] w-full text-bg-white flex justify-between">
        <div className="flex justify-between py-5 w-full">
          <div className="flex gap-6">
            <NavLink
              label="Halaman Utama"
              to="/"
              selected={url === "/" ? true : false}
            />
            <NavLink
              label="Profil"
              to="profile"
              selected={url === "/profile" ? true : false}
            />
            <NavLink
              label="Tentang Kami"
              to="tentangkami"
              selected={url === "/tentangkami" ? true : false}
            />
            <NavLink
              label="Kontak"
              to="kontak"
              selected={url === "/kontak" ? true : false}
            />
          </div>
          <div className="flex gap-8">
            <NavContact
              icon={callIcon}
              label="Call Us On:"
              value="0811-633-355"
            />
            <NavContact
              icon={mailIcon}
              label="Email us:"
              value="dyp.lawoffice@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
