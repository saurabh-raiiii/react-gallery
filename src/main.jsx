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
    path: "/gallary",
    element: <Gallary />,
  },
  { path: "/login", element: <Login /> },
  { path: "signup", element: <h1>sign up</h1> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)