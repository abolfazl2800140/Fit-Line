import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const CoachApp = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="flex-1/12 border-b-1 border-gray-300 flex justify-between items-center px-2 bg-[#FF5E00]">
        <div className="flex flex-1 items-center justify-start h-full gap-3">
          <IconButton className="align-middle">
            <Link to={"/coach-profile"}>
              <PermIdentityIcon fontSize="large" sx={{ color: "white" }} />
            </Link>
          </IconButton>
        </div>
        <div className="flex-1 flex justify-end ">
          <h1 className="text-3xl text-white">fitLine</h1>
        </div>
      </header>
      <main className="flex-10/12">
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
          <BottomNavigationAction
            label="مربی ها"
            icon={<SearchIcon fontSize="medium" />}
          />
          <BottomNavigationAction
            label="آموزش"
            icon={<FitnessCenterIcon fontSize="medium" />}
          />
          <BottomNavigationAction
            label="تنظیمات"
            icon={<SettingsIcon fontSize="medium" />}
          />
        </BottomNavigation>
      </nav>
    </div>
  );
};

export default CoachApp;
