import User from "./User";
import people from "../data";
import { useState } from "react";
// console.log(People);

const UserList = () => {
  const [user, setUser] = useState(people);
  function getIdUer(id) {
    const filterPeople = user.filter((u) => u.id !== id);
    setUser(filterPeople);
  }
  function handleClear() {
    setUser([]);
  }
  return (
    <div className="bg-gray-300 p-5">
      {user.map((p) => (
        <User {...p} getId={getIdUer} key={p.id} />
      ))}
      <button
        onClick={handleClear}
        className="bg-red-900 p-2 font-bold text-white"
      >
        Clear All
      </button>
    </div>
  );
};

export default UserList;
