import { Backdrop, Button, Modal, Rating } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Chart from "../../../../../components/chart";
import TinyLineChartWithAxes from "../../../../../components/chart";

const TrainerProfile = () => {
  const [open, setOpen] = useState(false);
  const [imagee, setImagee] = useState("false");

  const params = useParams();
  const navigate = useNavigate();

  const fetchHandler = async () => {
    const { data } = await axios.get(`http://localhost:8000/user/${params.id}`);
    return data;
  };

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: fetchHandler,
  });

  const { image, userName, age, rating, id } = user;

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    setImagee(value);
    setOpen(true);
  };

  const userProgressData = [
    { label: "هفته ۱", value: 0 },
    { label: "هفته ۲", value: 40 },
    { label: "هفته ۳", value: 60 },
    { label: "هفته ۴", value: 60 },
    { label: "هفته ۵", value: 70 },
    { label: "هفته ۶", value: 75 },
    { label: "هفته ۷", value: 80 },
  ];

  return (
    <div className="h-full w-screen p-1 overflow-y-auto">
      <div className="h-full flex flex-col">
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
            <span className="flex justify-center items-center">
              <Rating name="size-small" value={rating} size="medium" readOnly />
            </span>
          </div>
          <div className="flex-2/12 flex justify-center">
            <span className="">{user.bio}</span>
          </div>
          <div className="flex-10/12 max-h-[270px] flex flex-col gap-4">
            <div className="flex justify-center items-center">
              <span className="">نمودار پیشرفت شاگردان</span>
            </div>
            <TinyLineChartWithAxes data={userProgressData} key={1} />
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] flex flex-col">
        <div className="flex-1/2 flex flex-col gap-4">
          <div className="flex-2/12 flex justify-center items-start">
            <span className="">شاگردان این مربی</span>
          </div>
          <div className="flex-10/12 flex flex-wrap gap-1">
            {user?.student?.map((student) => {
              return (
                <div className="flex-3/12 h-32 max-w-[115px]">
                  <img src={student.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1/2 flex items-center justify-between">
          <span className="">قیمت برنامه: 500 هزار تومان</span>
          <Button
            variant="contained"
            sx={{ padding: "10px", bgcolor: "#0097a0" }}
            className="bg-cyan-600 p-3 text-white rounded-sm"
            onClick={() => {
              setTimeout(() => {
                navigate("/chat", { state: { id } });
              }, 300);
            }}
          >
            درخواست برنامه
          </Button>
        </div>
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
