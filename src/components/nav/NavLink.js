"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const style =
  "text-xs font-bold transition hover:text-slate-200 uppercase text-slate-500 tracking-widest";

const activeStyle =
  "text-xs font-bold transition uppercase text-slate-200 tracking-widest";

const NavLink = ({ to, children }) => {
  // To detect changes in URL
  const params = useParams();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(window.location.hash === to);
  }, [params]);

  return (
    <li>
      <Link className="flex py-3" href={to}>
        <span className={isActive ? activeStyle : style}>{children}</span>
      </Link>
    </li>
  );
};

export default NavLink;
