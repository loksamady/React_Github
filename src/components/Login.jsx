import React, { useState, useRef } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [member, setMember] = useState([]);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill all fields"); 
      nameRef.current.focus();
      return;
    }
    const isDuplicate = member.some(
      (m) =>
        m.name.trim().toLowerCase() === name.trim().toLowerCase() ||
        m.email.trim().toLowerCase() === email.trim().toLowerCase()
    );
    if (isDuplicate) {
      alert("Full Name or Email already exists!");
      nameRef.current.focus();
      return;
    }
    const id = Date.now();
    const addMember = { id, name, email };
    const updatedMember = [...member, addMember];
    setMember(updatedMember);
    setName("");
    setEmail("");
    nameRef.current.focus();
  }

  function clearData() {
    setMember([]);
    setName("");
    setEmail("");
    nameRef.current.focus();
  }

  return (
    <div className="flex justify-center items-center flex-row gap-10">
      <form className="bg-sky-200 p-10 flex justify-between items-center flex-col gap-1 text-black rounded-lg text-[24px]">
        <h2 className="font-bold text-[34px]">Submit Form</h2>
        <div className="flex justify-between items-start flex-col">
          <label htmlFor="name">Full Name</label>
          <input
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="bg-sky-50 text-black w-80 text-[18px] py-2 p-2"
            type="text"
            id="name"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                emailRef.current.focus();
              }
            }}
          />
        </div>
        <div className="flex justify-between items-start flex-col">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
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
        <button
          onClick={clearData}
          className="bg-yellow-400 text-white w-full py-2 mt-2 hover:bg-blue-800"
          type="button"
        >
          Clear
        </button>
      </form>
      <ul className=" p-10 flex justify-between items-center flex-col gap-2 text-black rounded-lg text-[24px]">
        {member.map(({ id, name, email }) => (
          <li
            className="flex justify-between items-center flex-row gap-2 grid-cols-3 divide-sky-600 p-2 w-[650px] bg-sky-200  rounded-lg text-black"
            key={id}
          >
            <h3 className="text-black font-bold">{name}</h3>
            <h3 className="text-black">{email}</h3>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => {
                const updatedMember = member.filter((m) => m.id !== id);
                setMember(updatedMember);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Login;
