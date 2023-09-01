const SectionHeading = ({ children }) => {
  return (
    <div className="lg:hidden z-20 mb-4 backdrop-blur px-6 py-5 -mx-6 sticky top-0 w-screen bg-slate-900/75">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        {children}
      </h2>
    </div>
  );
};
export default SectionHeading;
