import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-md text-sm text-slate-500 sm:pb-0 pb-16">
      <p>
        Built with
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300"
          target="_blank">
          &nbsp;Next.js&nbsp;
        </a>
        and
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300"
          target="_blank">
          &nbsp;Tailwind CSS
        </a>
        , deployed using
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-teal-300"
          target="_blank">
          &nbsp;Vercel
        </a>
        .
        <br /> Inspired by Brittany Chiang&apos;s
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300">
          &nbsp;portfolio
        </a>
        .
        <br /> Made with &hearts; by&nbsp;
        <Link
          href="#about"
          className="font-medium text-slate-400 hover:text-teal-300">
          Kushal Goel
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
