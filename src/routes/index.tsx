import { createBrowserRouter } from "react-router-dom";

import { Blog, Home } from "@/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
