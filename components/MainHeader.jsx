const MainHeader = () => {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl tracking-tight text-slate-200 font-bold">
        <a href="/">Kushal Goel</a>
      </h1>
      <h2 className="mt-3 text-lg sm:text-xl font-medium tracking-tight text-slate-200">
        Software Developer
      </h2>
      {/* max-w-xs */}
      <p className="mt-4 max-w-md leading-normal">
        I love coding and math and am currently studying computer science at the
        University of Waterloo.
      </p>
    </div>
  );
};

export default MainHeader;
