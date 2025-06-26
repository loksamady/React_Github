import React, { useState } from "react";
const App = () => {
  const [alert, setAlert] = useState(true);
  function handleToggle() {
    setAlert(!alert);
  }
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      {alert ? <Message /> : null}
      <button
        onClick={handleToggle}
        className="bg-blue-700 w-96 py-5 text-[25px] font-bold"
      >
        Toggle
      </button>
    </div>
  );
};
function Message() {
  return (
    <button className="bg-red-700 w-96 py-5 text-[25px] font-bold">
      Message...
    </button>
  );
}
export default App;
