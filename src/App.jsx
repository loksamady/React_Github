import Login from "./components/Login";
import Test1 from "./components/Test1";
import UserList from "./components/UserList";
import Toogle from "./components/Toogle";
import Profile from "./components/Profile";
import Profile2 from "./components/Profile2";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Service, Error } from "./page";
import RootLayout from "./layout/RootLayout";
import AboutLayout from "./layout/AboutLayout";
// import App from "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutLayout />,
        children: [
          {
            path: "Vision",
            element: <h2 className="text-2xl font-bold">Vision...</h2>,
          },
          {
            path: "Mission",
            element: <h2 className="text-2xl font-bold">Mission...</h2>,
          },
          {
            path: "Gold",
            element: <h2 className="text-2xl font-bold">Gold...</h2>,
          },
        ],
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
]);
const App = () => {
  // return (
  //   <div className="w-full fixed top-0 flex justify-between items-center flex-col bg-slate-200">
  //     <Profile />
  //     <Profile2 />
  //     <Toogle />
  //     <UserList />
  //     <Test1 />
  //     <Login />
  //     <User />
  //     <UserList />
  //     <NavBar />
  //   </div>
  return <RouterProvider router={router} />;
};

export default App;
