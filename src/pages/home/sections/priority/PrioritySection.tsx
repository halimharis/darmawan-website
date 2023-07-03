import { DATA } from "../../../../const";
import CardDetail from "./components/CardDetail";

export default function PrioritySection() {
  const priorityData = DATA.home.section.priority;

  return (
    <div className="py-28 px-[250px] font-Cormorant-Garamond flex flex-col gap-16">
      <h2 className="text-h2 text-blue text-center font-bold">
        Klien Prioritas Utama Kami
      </h2>
      <div className="flex justify-between">
        {priorityData.pencapaian.map((detail) => (
          <CardDetail {...detail} key={detail.label} />
        ))}
      </div>
    </div>
  );
}
