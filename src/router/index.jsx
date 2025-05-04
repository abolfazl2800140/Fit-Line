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
import Education from "../pages/main/education";
import Setting from "../pages/main/setting";
import TrainerProfile from "../pages/main/athelateApp/searchCoach/trainerProfile";
import Chat from "../pages/main/chat";
import ExpriencePage from "../pages/main/expriencePage";
import AddExprince from "../pages/main/addExprience";
import Harekat from "../pages/main/education/harekat";
import Maqale from "../pages/main/education/maqale";
import Kalery from "../pages/main/education/kalery";

export const router = createBrowserRouter([
  { path: "/", element: <AuthRedirect /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Register /> },
  { path: "/landing", element: <Landing /> },
  {
    path: "/athelate-app",
    element: <AthelateApp />,
    children: [
      { index: true, element: <Navigate to="coachs" replace /> },
      {
        path: "coachs",
        element: <SearchCoach />,
        // index: true,
      },
      { path: "coachs/:id", element: <TrainerProfile /> },
      {
        path: "education",
        element: <Education />,
      },
      { path: "education/harekat", element: <Harekat /> },
      { path: "education/maqale", element: <Maqale /> },
      { path: "education/kalery", element: <Kalery /> },
      { path: "exprince", element: <ExpriencePage /> },
      { path: "exprince/new", element: <AddExprince /> },
      { path: "setting", element: <Setting /> },
    ],
  },
  { path: "chat", element: <Chat /> },
  { path: "/athelate-profile", element: <AthelateProfile /> },
  { path: "/coach-app", element: <CoachApp /> },
  { path: "/coach-profile", element: <CoachProfile /> },
]);
