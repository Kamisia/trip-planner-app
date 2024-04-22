import Login from "../components/Login";
import SingUp from "../components/SingUp.jsx";
import Start from "../components/Start.jsx";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Start />
      <Login />
      <SingUp />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
