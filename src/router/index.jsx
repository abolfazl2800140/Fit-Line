import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/index";
import Login from "../pages/auth/login";

export const router = createBrowserRouter([
  { element: <Landing />, path: "/" },
  { element: <Login />, path: "/login" },
]);
