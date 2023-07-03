import { useForm } from "react-hook-form";
import mailIcon from "../../../../../assets/mailwithborder2.png";
import callIcon from "../../../../../assets/callwithborder2.png";

interface IContactDarmawanForms {
  callUs: {
    phoneNumber1: string;
    phoneNumber2: string;
  };
  emailUs: string;
}

export default function ContactDarmawanForms({
  callUs,
  emailUs,
}: IContactDarmawanForms) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="px-24 pt-[108px] bg-blue">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex gap-24 items-end mb-28"
      >
        <div className="flex flex-col gap-10 w-full">
          <input
            {...register("Name")}
            placeholder="Your Name Here"
            className="bg-transparent text-zinc-300 border-b py-4 text-lg font-Outfit leading-relaxed outline-none"
          />
          <input
            {...register("Email")}
            placeholder="Your Mail Here"
            className="bg-transparent text-zinc-300 border-b py-4 text-lg font-Outfit leading-relaxed outline-none"
          />
          <input
            {...register("PhoneNumber")}
            placeholder="Your Phone Number"
            className="bg-transparent text-zinc-300 border-b py-4 text-lg font-Outfit leading-relaxed outline-none"
          />
          <input
            {...register("Service")}
            placeholder="What Service You Want"
            className="bg-transparent text-zinc-300 border-b py-4 text-lg font-Outfit leading-relaxed outline-none"
          />
        </div>
        <div className="flex flex-col w-full gap-7 ">
          <textarea
            {...register("Message")}
            className="bg-transparent border border-bg-white h-48 p-6 text-lg font-Outfit leading-relaxed"
            placeholder="Your Message"
          />
          <button
            type="submit"
            className="py-7 px-16 block w-fit bg-yellow text-blue text-xl font-medium"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="flex w-full justify-evenly py-11">
        <div className="flex gap-3 items-center">
          <img src={callIcon} className="w-16 h-16" />
          <div className="flex flex-col">
            <span className="text-yellow font-Outfit font-medium capitalize text-lg">
              Call Us On:
            </span>
            <span className="text-[22px] font-Outfit text-bg-white">
              {callUs.phoneNumber1}
            </span>
            <span className="text-[22px] font-Outfit text-bg-white">
              {callUs.phoneNumber2}
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img src={mailIcon} className="w-16 h-16" />
          <div className="flex flex-col">
            <span className="text-yellow font-Outfit font-medium capitalize text-lg">
              Email Us:
            </span>
            <span className="text-[22px] font-Outfit text-bg-white">
              {emailUs}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
