import "./App.css";
import Login from "./components/Login";
import Test1 from "./components/Test1";
import UserList from "./components/UserList";
import Toogle from "./components/Toogle";
import Profile from "./components/Profile";
const App = () => {
  return (
    <div className="flex justify-start items-center flex-col gap-10">
      <Profile />
      <Toogle />
      <UserList />
      <Test1 />
      <Login />
    </div>
  );
};

export default App;
