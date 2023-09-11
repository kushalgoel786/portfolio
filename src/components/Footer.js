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
        . Made with &hearts; by Kushal Goel inside
        <a
          target="_blank"
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300">
          &nbsp;Visual Studio Code
        </a>
        . All text is set in the
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300">
          &nbsp;Inter&nbsp;
        </a>
        typeface. Inspired by Brittany Chiang&apos;s
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300">
          &nbsp;portfolio
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
