import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Listings from "../Pages/Listings/Listings";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
// import SignOut from "../Pages/SignOut/SignOut";
import BookingPage from "../Pages/BookingPage/BookingPage";
import Procted from "../components/Procted/Procted";
import MyAccountPage from "../Pages/MyAccountPage/MyAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "listings",
        element: <Listings></Listings>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id",
        loader: ({ params }) => {
          return params.id;
        },
        element: (
          <Procted>
            <BookingPage> </BookingPage>
          </Procted>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/account",
        element: (
          <Procted>
            <MyAccountPage />
          </Procted>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
