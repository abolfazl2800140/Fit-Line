import { Backdrop, Modal, Rating } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TrainerProfile = () => {
  const [open, setOpen] = useState(false);
  const [imagee, setImagee] = useState("false");

  const params = useParams();

  const fetchHandler = async () => {
    const { data } = await axios.get(`http://localhost:8000/user/${params.id}`);
    return data;
  };

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: fetchHandler,
  });

  const { image, userName, age, rating } = user;

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    setImagee(value);
    setOpen(true);
  };

  return (
    <div className="h-full w-screen flex flex-col p-1">
      <div className="flex-3/12 flex justify-center items-center">
        <img
          src={image}
          alt=""
          className="size-44 rounded-full"
          onClick={(e) => handleImage(image)}
        />
      </div>
      <div className="flex-9/12 flex flex-col">
        <div className="flex-2/12 flex justify-center items-center gap-2">
          <span className="text-2xl">{userName}</span>
        </div>
        <div className="flex-2/12 flex justify-center items-start gap-2">
          <span className="text-[#2661bc] text-lg">
            مربی درجه 1 فدراسیون بدنسازی
          </span>
        </div>
        <div className="flex-2/12 flex justify-center items-start gap-2">
          <span className="">{age} ساله</span>
          <span className="flex justify-center  items-center">
            <Rating name="size-small" value={rating} size="medium" readOnly />
          </span>
        </div>
        <div className="flex-10/12 max-h-[270px]"></div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backgroundColor: "rgba(0,0,0,0.4)",
            opacity: 1,
          },
        }}
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
            // height: "80dvh",
            // width: "calc(100dvw - 40px)",
            // borderRadius: "100%",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            // margin: "10px",
            outline: "none",
            border: "none",
            zIndex: 10000,
          }}
        />
      </Modal>
    </div>
  );
};

export default TrainerProfile;
