interface INavContact {
  icon: string;
  label: string;
  value: string;
}

export default function NavContact({ icon, label, value }: INavContact) {
  return (
    <div className="flex justify-center items-center gap-3 font-Inter">
      <img src={icon} className="w-16 h-16" />
      <div className="flex flex-col">
        <span className="text-yellow text-lg">{label}</span>
        <span className="font-semibold text-2xl ">{value}</span>
      </div>
    </div>
  );
}
