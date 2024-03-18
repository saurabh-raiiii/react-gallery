import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error_Page from "./page/ErrorPage.jsx";
import Contact from "./page/Contact.jsx";
import Gallary from "./page/Gallary.jsx";
import Login from "./page/Login.jsx";
import SignUp from "./page/SignUp.jsx";
import AboutUs from "./page/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error_Page />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/gallary",
    element: <Gallary />,
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
