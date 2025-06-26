import React, { useEffect, useState } from "react";

const Test1 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  useEffect(() => {
    document.title = count;
    console.log(useEffect);
  }, [count]);
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h1 className="mb-4 font-bold text-[35px] text-blue-800">{value}</h1>
      <h1 className="mb-4 font-bold text-[35px] text-blue-800">{count}</h1>
      <input
        className="bg-yellow-300 p-3 px-10 "
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-700 p-3 text-[25px] font-bold text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Test1;
