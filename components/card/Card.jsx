const Card = ({ children }) => {
  return (
    <div className="group grid transition-all relative sm:grid-cols-4">
      <div className="absolute -inset-4 lg:-inset-x-6 z-0 lg:block hidden rounded-md transition lg:group-hover:bg-slate-800/50"></div>
      {children}{" "}
    </div>
  );
};
export default Card;
