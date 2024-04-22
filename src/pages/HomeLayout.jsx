import Login from "../components/Login";
import Start from "../components/Start.jsx";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Start />
      <Login />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
