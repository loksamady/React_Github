import NavLink from "./NavLink";
const NavBar = () => {
  return (
    <div className="flex justify-center items-center w-full py-4 px-6 bg-yellow-200 text-sky-700">
      {/* <h1 className="text-2xl font-bold">MyApp</h1> */}
      <NavLink />
    </div>
  );
};

export default NavBar;
