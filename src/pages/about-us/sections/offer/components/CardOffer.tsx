interface ICardOffer {
  title: string;
  description: string;
  icon: string;
}

export default function CardOffer({ description, icon, title }: ICardOffer) {
  return (
    <div className="bg-blue text-bg-white px-14 py-16">
      <img src={icon} className="mb-6" />
      <h3 className="text-[35px] font-Cormorant-Garamond font-bold leading-tight mb-2">
        {title}
      </h3>
      <p className="font-Outfit text-[20px] leading-snug">{description}</p>
    </div>
  );
}
