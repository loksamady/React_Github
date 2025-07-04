import React from "react";
import User from "./User";

const NavLink = () => {
  return (
    <ul className="flex items-center gap-4 text-sky-700">
      <li className="hover:bg-orange-700 p-2 rounded-lg font-bold transition-colors cursor-pointer">
        Home
      </li>
      <li className="hover:bg-orange-700 p-2 rounded-lg font-bold transition-colors cursor-pointer">
        Product
      </li>
      <li className="hover:bg-orange-700 p-2 rounded-lg font-bold transition-colors cursor-pointer">
        Service
      </li>
      <User />
    </ul>
  );
};

export default NavLink;
