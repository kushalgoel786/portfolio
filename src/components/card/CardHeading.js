const CardHeading = ({ children }) => {
  return (
    <h3 className="font-medium text-slate-200 group-hover:text-teal-300">
      <a href="">{children}</a>
    </h3>
  );
};
export default CardHeading;
