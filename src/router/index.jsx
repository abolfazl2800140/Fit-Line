import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/index";

export const router = createBrowserRouter([
  { element: <Landing />, path: "/" },
]);
