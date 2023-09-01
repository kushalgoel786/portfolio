import Link from "next/link";

const NavLink = ({ to, children, inViewport }) => {
  return (
    <li>
      <Link className="flex group items-center py-3" href={to}>
        <span
          className={`h-px w-8 bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-slate-200 ${
            inViewport ? "!bg-slate-200 !w-16" : ""
          }`}></span>
        <span
          className={`text-xs font-bold transition group-hover:text-slate-200 uppercase text-slate-500 tracking-widest ${
            inViewport ? "!text-slate-200" : ""
          }`}>
          {children}
        </span>
      </Link>
    </li>
  );
};

export default NavLink;
