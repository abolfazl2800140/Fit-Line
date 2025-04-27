import React, { useEffect, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Backdrop, Button, Fade, IconButton, Modal } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const AthelateProfile = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");

  const res = localStorage.getItem("loginData");
  const data = JSON.parse(res);

  const navigate = useNavigate();

  const goBack = () => {
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    setImage(value);
    setOpen(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="w-full h-[60.863px] bg-[#0097a0] flex justify-between items-center p-2">
        <IconButton
          aria-label="delete"
          sx={{ color: "white" }}
          onClick={goBack}
        >
          <KeyboardBackspaceIcon sx={{ rotate: "180deg", fontSize: "35px" }} />
        </IconButton>
        <h1 className="text-3xl text-white">fitLine</h1>
      </header>
      <section className="min-h-[80%] w-full my-auto flex flex-col items-center gap-8 p-2">
        <div className="bg-[#0097a0] size-32 rounded-full flex justify-center items-center mt-2">
          {/* <PermIdentityIcon sx={{ fontSize: "100px", color: "lightgray" }} /> */}
          {/* <img src={"/image.jpg"} alt="" width={"100%"} height={"100%"} className="w-full h-full rounded-full object-center"  /> */}
          <div
            style={{
              backgroundImage: `url(/image.jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              borderRadius: "100%",
              width: "100%",
              height: "100%",
            }}
            onClick={(e) => handleImage("/image.jpg")}
          ></div>
        </div>
        <div className="h-20 flex flex-col gap-4">
          <div className="w-full flex justify-center items-center">
            <span className="text-[#485566] font-black text-3xl">
              ابوالفضل عبدی
            </span>
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-[#2661bc] font-bold text-xl">
              ورزشکار - بدنساز
            </span>
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center">
          <span className="text-[#485566] text-xl leading-8">
            تلاش کن طلاش کن😎
          </span>
        </div>
        {data.userName.length ? (
          <Button
            variant="contained"
            sx={{
              fontSize: "18px",
              backgroundColor: "#3e74ce",
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
              backgroundColor: "#3e74ce",
              padding: "10px",
            }}
            className="w-[80%] flex justify-center items-center p-3 rounded-md text-xl text-white"
          >
            دنبال کردن
          </Button>
        )}
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        //   sx: {
        //     backgroundColor: "rgba(0,0,0,0.5)",
        //     opacity: 1,
        //   },
        // }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt="preview"
          style={{
            height: "200px",
            width: "200px",
            borderRadius: "100%",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            outline: "none",
            border: "none",
          }}
        />
      </Modal>
    </div>
  );
};

export default AthelateProfile;

//image

//name

//age

//history
