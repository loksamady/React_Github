import React, { useState } from "react";

export const Test1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="mb-4 font-bold text-[35px] text-blue-800">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-700 p-3 text-[25px] font-bold text-white"
      >
        Increment
      </button>
    </div>
  );
};
