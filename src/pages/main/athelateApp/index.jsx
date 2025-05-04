import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EventNoteIcon from "@mui/icons-material/EventNote";

const AthelateApp = () => {
  const [value, setValue] = useState(0);

  const navigationList = [
    {
      label: "مربی ها ",
      icon: <SearchIcon fontSize="medium" />,
      path: "coachs",
      value: 1,
    },
    {
      label: "آموزش",
      icon: <FitnessCenterIcon fontSize="medium" />,
      path: "education",
      value: 2,
    },
    {
      label: "تجربیات",
      icon: <EventNoteIcon fontSize="medium" />,
      path: "exprince",
      value: 4,
    },
    {
      label: "تنظیمات",
      icon: <SettingsIcon fontSize="medium" />,
      path: "setting",
      value: 3,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const pattern = /\/coachs\/\d+/;

  const clickHandler = () => {
    if (pattern.test(location.pathname)) {
      setTimeout(() => {
        navigate(-1);
      }, 300);
    } else {
      setTimeout(() => {
        navigate("/athelate-profile");
      }, 300);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="flex-1/12 border-b-1 border-gray-300 flex justify-between items-center px-2 bg-[#0097a0]">
        <div className="flex flex-1 items-center justify-start h-full gap-3">
          <IconButton
            className="align-middle"
            sx={{ color: "white" }}
            onClick={() => clickHandler()}
          >
            {pattern.test(location.pathname) ? (
              <KeyboardBackspaceIcon
                sx={{ rotate: "180deg", fontSize: "35px", color: "while" }}
              />
            ) : (
              <PermIdentityIcon fontSize="large" sx={{ color: "white" }} />
            )}
          </IconButton>
        </div>
        <div className="flex-1 flex justify-end ">
          <h1 className="text-3xl text-white">fitLine</h1>
        </div>
      </header>
      <main className=" min-h-0 flex-10/12">
        <Outlet />
      </main>
      <nav className="bg-red-400 flex-1/12 flex">
        <BottomNavigation
          showLabels
          value={value}
          sx={{
            padding: 0,
            margin: 0,
            height: "100%",
            width: "100%",
            alignSelf: "end",
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {navigationList?.map((item) => {
            return (
              <BottomNavigationAction
                onClick={() => navigate(item.path)}
                key={item.value}
                label={item.label}
                icon={item.icon}
              />
            );
          })}
        </BottomNavigation>
      </nav>
    </div>
  );
};

export default AthelateApp;
