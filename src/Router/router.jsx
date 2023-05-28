import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Main</h2>,
    children: [
      {
        path: "/",
        element: <h2>Home</h2>,
      },
      {
        path: "/about",
        element: <h2>About</h2>,
      },
      {
        path: "listings",
        element: <h2>Listings</h2>,
      },
      {
        path: "/blogs",
        element: <h2>Blogs</h2>,
      },
      {
        path: "/gallery",
        element: <h2>Gallery</h2>,
      },
      {
        path: "/contacts",
        element: <h2>Contacts</h2>,
      },
    ],
  },
  {
    path: "*",
    element: <h2>404 Error</h2>,
  },
]);

export default router;
