interface ICardDetail {
  icon: string;
  label: string;
  labelDetail: string;
}
export default function CardDetail({ icon, label, labelDetail }: ICardDetail) {
  return (
    <div className="bg-blue flex flex-col py-8 px-10 gap-3 text-bg-white items-center w-[230px]">
      <img src={icon} className="w-[41px] h-[38px]" />
      <span className="text-[2.5rem] font-bold leading-[3.125rem] font-Martel">
        {label}
      </span>
      <span className="text-[1rem] font-bold leading-[1.5rem] font-Martel">
        {labelDetail}
      </span>
    </div>
  );
}
