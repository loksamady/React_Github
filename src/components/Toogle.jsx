import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
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
    <button className="bg-red-700 w-96 py-5 text-[25px] font-bold flex justify-center items-center gap-2">
      <EmailIcon />
      Message...
    </button>
  );
}
export default App;
