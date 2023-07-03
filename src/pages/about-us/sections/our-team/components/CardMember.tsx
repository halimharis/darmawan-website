interface ICardMember {
  name: string;
  photo: string;
}

export default function CardMember({ name, photo }: ICardMember) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <img src={photo} />
      <h4 className="text-[28px] font-Cormorant-Garamond font-bold text-blue text-center">
        {name}
      </h4>
    </div>
  );
}
