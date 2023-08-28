import Link from "next/link";

const NavLink = ({ to, children }) => {
  return (
    <li>
      <Link className="flex py-3" href={to}>
        <span className="text-xs font-bold transition hover:text-slate-200 uppercase text-slate-500 tracking-widest">
          {children}
        </span>
      </Link>
    </li>
  );
};

export default NavLink;
