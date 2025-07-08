import React from "react";
import User from "./User";
import { Link } from "react-router-dom";
const NavLink = () => {
  return (
    <ul className="flex items-center gap-4 text-sky-700">
      <li className="hover:bg-orange-700 p-2 rounded-lg font-bold transition-colors cursor-pointer">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-orange-700 p-2 rounded-lg font-bold transition-colors cursor-pointer">
        <Link to="about">About</Link>
      </li>
      <li className="hover:bg-orange-700 p-2 rounded-lg font-bold transition-colors cursor-pointer">
        <Link to="service">Service</Link>
      </li>
      <User />
    </ul>
  );
};

export default NavLink;
