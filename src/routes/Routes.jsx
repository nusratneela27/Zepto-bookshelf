import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Wishlist from "../pages/wishlist/Wishlist";
import BookDetails from "../pages/BookDetails/BookDetails";

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
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://gutendex.com/books?ids=${params.id}`
          );
          const data = await res.json();
          return data.results[0];
        },
      },
    ],
  },
]);
