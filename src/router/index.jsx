// router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Landing from "../pages/landing";
import AuthRedirect from "../pages/auth/authRedirect/index";
import AthelateApp from "../pages/main/athelateApp";
import AthelateProfile from "../pages/main/athelateApp/profile";
import CoachApp from "../pages/main/coachApp";
import CoachProfile from "../pages/main/coachApp/profile";
import SearchCoach from "../pages/main/athelateApp/searchCoach";

export const router = createBrowserRouter([
  { path: "/", element: <AuthRedirect /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Register /> },
  { path: "/landing", element: <Landing /> },
  {
    path: "/athelate-app",
    element: <AthelateApp />,
    children: [
      { index: true, element: <Navigate to="search-coach" replace /> },
      { path: "search-coach", element: <SearchCoach />, index: true },
    ],
  },
  { path: "/athelate-profile", element: <AthelateProfile /> },
  { path: "/coach-app", element: <CoachApp /> },
  { path: "/coach-profile", element: <CoachProfile /> },
]);
