const CardHeading = ({ href, children }) => {
  return (
    <h3 className="font-medium text-slate-200 group-hover:text-teal-300">
      <a href={href} target="_blank">
        <span className="absolute lg:-inset-y-4 lg:-inset-x-6 hidden rounded lg:block"></span>
        {children}
      </a>
    </h3>
  );
};

export default CardHeading;
