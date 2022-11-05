import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/Check Out/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Orders from "../../Pages/Home/Orders/Orders";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/login", element: <Login></Login> },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },

      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);
export default router;
