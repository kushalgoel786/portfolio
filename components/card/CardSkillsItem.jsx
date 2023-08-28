const CardSkillsItem = ({ children }) => {
  return (
    <li className="mr-1.5 mt-2">
      {/* flex items-center on div */}
      <div className="text-xs font-medium rounded-full leading-5 px-3 py-1 bg-teal-400/10 text-teal-300">
        {children}
      </div>
    </li>
  );
};
export default CardSkillsItem;
