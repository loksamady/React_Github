import "./App.css";
import Login from "./components/Login";
import { Test1 } from "./components/Test1";
import UserList from "./components/UserList";
import Toogle from "./components/Toogle";
const App = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-row gap-10">
        <Toogle />
        <UserList />
        <Test1 />
        <Login />
      </div>
    </>
  );
};

export default App;
