interface ICardArea {
  title: string;
  description: string;
  icon: string;
}

export default function CardArea({ description, icon, title }: ICardArea) {
  return (
    <div className="flex flex-col bg-blue text-bg-white py-14 px-12">
      <h4 className="text-4xl font-Cormorant-Garamond mb-2 font-bold">
        {title}
      </h4>
      <p className="font-Outfit text-xl font-normal leading-snug text-[#D7D7D7]">
        {description}
      </p>
      <div className="my-8 w-full h-[1px] bg-bg-white"></div>
      <div className="flex justify-between items-center">
        <img src={icon} />
        <button className="py-4 px-9 block w-fit bg-yellow text-blue text-xl font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}
