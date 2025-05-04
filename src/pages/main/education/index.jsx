import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="h-full w-screen flex flex-col justify-evenly p-4">
      <Link to={"harekat"}>
        <Button
          variant="contained"
          color="success"
          sx={{ bgcolor: "bg-green-400", color: "white", height: "180px" }}
          className="w-full h-44 flex justify-center items-center"
        >
          <span className="text-2xl">آموزش حرکات</span>
        </Button>
      </Link>
      <Link to={"maqale"}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ bgcolor: "bg-sky-400", color: "white", height: "180px" }}
          className="w-full h-44 flex justify-center items-center"
        >
          <span className="text-2xl">مقالات</span>
        </Button>
      </Link>
      <Link to={"kalery"}>
        <Button
          variant="contained"
          sx={{ bgcolor: "bg-pink-400", color: "white", height: "180px" }}
          className="w-full h-44 flex justify-center items-center"
        >
          <span className="text-2xl">کالری شمار</span>
        </Button>
      </Link>
    </div>
  );
};

export default Education;
