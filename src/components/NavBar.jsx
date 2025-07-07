import NavLink from "./NavLink";
const NavBar = () => {
  return (
    <nav className="container">
      <div className="flex justify-between items-center py-4 px-6 text-sky-700">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <NavLink />
      </div>
    </nav>
  );
};

export default NavBar;
