import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <HomeLayout />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
