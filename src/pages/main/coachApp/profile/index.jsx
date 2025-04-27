import React, { useEffect } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const CoachProfile = () => {
  const res = localStorage.getItem("loginData");
  const data = JSON.parse(res);

  const navigate = useNavigate();

  const goBack = () => {
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="w-full h-[60.863px] bg-[#FF5E00] flex justify-between items-center p-2">
        <IconButton
          aria-label="delete"
          sx={{ color: "white" }}
          onClick={goBack}
        >
          <KeyboardBackspaceIcon sx={{ rotate: "180deg", fontSize: "35px" }} />
        </IconButton>
        <h1 className="text-3xl text-white">fitLine</h1>
      </header>
      <section className="h-full w-full my-auto flex flex-col items-center gap-8 p-2">
        <div className="bg-[#FF5E00] size-30 rounded-full flex justify-center items-center mt-2">
          <PermIdentityIcon sx={{ fontSize: "100px", color: "white" }} />
        </div>
        <div className="h-20 flex flex-col gap-4">
          <div className="w-full flex justify-center items-center">
            <span className="text-[#485566] font-black text-3xl">
              محمد سروری
            </span>
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-[#2661bc] font-bold text-xl">
              مربی - تناسب اندام
            </span>
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center">
          <span className="text-[#485566] text-xl leading-8">
            مربی رسمی فدراسیون بدنسازی
          </span>
        </div>
        <div className="mt-auto w-full flex flex-col items-center gap-4">
          <Button
            variant="contained"
            sx={{
              fontSize: "18px",
              backgroundColor: "#FF5E00",
              padding: "10px",
              marginTop: "auto",
            }}
            className="w-[80%] flex justify-center items-center p-3 rounded-md text-xl text-white"
          >
            شاگردان من
          </Button>
          {data.userName.length ? (
            <Button
              variant="contained"
              sx={{
                fontSize: "18px",
                backgroundColor: "#FF5E00",
                padding: "10px",
                marginTop: "auto",
              }}
              className="w-[80%] flex justify-center items-center p-3 rounded-md text-xl text-white"
            >
              ویرایش پروفایل
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                fontSize: "18px",
                backgroundColor: "#FF5E00",
                padding: "10px",
              }}
              className="w-[80%] flex justify-center items-center p-3 rounded-md text-xl text-white"
            >
              دنبال کردن
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoachProfile;
