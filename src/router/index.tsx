import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "~/pages/HomePage";
import { SearchPage } from "~/pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);
