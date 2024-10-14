import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Wishlist from "../pages/wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);
