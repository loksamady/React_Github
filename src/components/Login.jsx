import React, { useState } from "react";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }
  return (
    <form className="bg-sky-200 p-10 flex justify-between items-center flex-col gap-5 text-black rounded-lg text-[24px]">
      <h2 className="font-bold text-[34px]">Submit Form</h2>
      <div className="flex justify-between items-start flex-col">
        <label htmlFor="">Full Name</label>
        <input
          onChange={handleName}
          value={name}
          className="bg-sky-50 text-black w-80 text-[18px] py-2 p-2"
          type="text"
          id="name"
        />
      </div>
      <div className="flex justify-between items-start flex-col">
        <label htmlFor="">Email</label>
        <input
          onChange={handleEmail}
          value={email}
          className="bg-sky-50 text-black w-80 text-[18px] py-2 p-2"
          type="email"
          id="email"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-700 text-white w-full py-2 mt-5 hover:bg-blue-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
