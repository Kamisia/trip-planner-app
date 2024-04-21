import Start from "../components/Start";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <Start />

      <Outlet />
    </div>
  );
};

export default HomeLayout;
