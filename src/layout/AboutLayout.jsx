import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const AboutLayout = () => {
  return (
    <div className="flex justify-center flex-col items-center py-11 bg-green-300 text-2xl font-bold h-96">
      <h1 className="mb-10">About Page</h1>
      <div className="flex justify-center items-center gap-4 mt-4 text-xl my-11">
        <NavLink className="bg-white p-2 rounded-lg shadow-lg" to="vision">
          Vision
        </NavLink>
        <NavLink className="bg-white p-2 rounded-lg shadow-lg" to="mission">
          Mission
        </NavLink>
        <NavLink className="bg-white p-2 rounded-lg shadow-lg" to="gold">
          Gold
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutLayout;
