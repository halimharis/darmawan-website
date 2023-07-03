import { Link } from "react-router-dom";

interface INavLink {
  label: string;
  selected?: boolean;
  to: string;
}

export default function NavLink({ label, selected = false, to }: INavLink) {
  return (
    <Link
      to={to}
      className={`after:w-6 after:h-1 after:block text-2xl font-Inter ${
        selected ? "after:bg-bg-white font-semibold" : "after:bg-transparent"
      } flex justify-center items-center flex-col font-light gap-1`}
    >
      {label}
    </Link>
  );
}
