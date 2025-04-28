import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CoachCard = ({ item }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    setTimeout(() => {
      navigate(`${item.id}`);
    }, 500);
  };

  return (
    <div className="bg-gray-200 rounded-xl h-20 flex items-center">
      <div className="flex-2/3 h-full flex items-center gap-2">
        <div className="h-full flex-1/3 flex justify-center items-center">
          <img src={item.image} alt="" className="size-16 rounded-full" />
        </div>
        <div className="flex-3/5 flex flex-col h-[80%] justify-between">
          <span>{item.userName}</span>
          <span className="text-sky-500 font-black">مربی بدنسازی</span>
        </div>
      </div>
      <div className="flex-2/5 h-full flex justify-center items-center">
        <Button
          variant="contained"
          size="small"
          sx={{
            height: "50px !important",
            backgroundColor: "#0097a0",
          }}
          onClick={clickHandler}
        >
          مشاهده پروفایل
        </Button>
      </div>
    </div>
  );
};

export default CoachCard;
