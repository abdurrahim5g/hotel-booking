import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
