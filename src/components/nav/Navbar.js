const Navbar = ({ children }) => {
  return (
    // add nav class
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">{children}</ul>
    </nav>
  );
};
export default Navbar;
