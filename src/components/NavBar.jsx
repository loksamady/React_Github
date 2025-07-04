import React, { createContext, useState } from "react";
import NavLink from "./NavLink";
const NavBarContext = createContext();
export { NavBarContext };
const NavBar = () => {
  const [user, setUser] = useState({ name: "Samady" });
  function signOut() {
    setUser(null);
  }
  return (
    <nav className="container">
      <NavBarContext.Provider value={{ user, signOut }}>
        <div className="flex justify-between items-center py-4 px-6 text-sky-700">
          <h1 className="text-2xl font-bold">MyApp</h1>
          <NavLink />
        </div>
      </NavBarContext.Provider>
    </nav>
  );
};

export default NavBar;
