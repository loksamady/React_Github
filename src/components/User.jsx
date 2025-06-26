import React from "react";
const User = ({ img, name, age, position, id, getId }) => {
  function handleClick() {
    getId(id);
  }
  return (
    <article className="flex justify-between items-center gap-5 m-5 p-2 bg-gray-100 cursor-pointer">
      <img className="w-16 h-16 rounded-full " src={img} alt="" />
      <h2 className="font-semibold text-black text-lg size-15">{name}</h2>
      <h2 className="font-semibold text-black text-lg size-15">{age}</h2>
      <h2 className="font-semibold text-black text-lg size-15">{position}</h2>
      <button
        onClick={handleClick}
        className="bg-red-900 p-2 font-bold text-white"
      >
        Remove
      </button>
    </article>
  );
};

export default User;
