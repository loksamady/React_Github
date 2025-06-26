import React from "react";
import img from "../assets/b.jpg";
const Profile = () => {
  return (
    <div className="bg-slate-50 shadow-lg p-5 flex justify-center items-center flex-col gap-5 rounded-lg">
      <img
        className="object-cover w-[196px] h-[196px] rounded-full bg-yellow-400 
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        src={img}
        alt="Profile"
      />
      <h1>Lok Samady</h1>
      <h2>IT</h2>
    </div>
  );
};

export default Profile;
