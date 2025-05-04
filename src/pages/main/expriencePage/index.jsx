import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const ExpriencePage = () => {
  const fetchExprince = async () => {
    const { data } = await axios.get("http://localhost:8000/exprince");
    return data;
  };

  const { data: exprince } = useQuery({
    queryKey: ["exprince"],
    queryFn: fetchExprince,
  });

  const navigate = useNavigate();

  return (
    <div className="w-full h-full overflow-y-auto p-4 flex flex-col">
      <h1 className="text-4xl text-center font-black flex-1/12">تجربیات</h1>
      <div className="flex justify-center items-center my-8 flex-1/12">
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "100%",
            fontSize: 20,
            padding: 2,
            display: "flex",
            gap: "6px",
            backgroundColor: "#0097a0",
          }}
          onClick={() => navigate("/athelate-app/exprince/new")}
        >
          <AddIcon sx={{ fontSize: "30px" }} /> <span>افزودن تجربه</span>
        </Button>
      </div>
      <div className="flex-10/12  w-full min-h-[400px] overflow-y-auto">
        {exprince?.map((item, index) => {
          return (
            <div className="min-h-28 w-full bg-gray-100 my-2 flex flex-col p-4 gap-8">
              <div className="flex justify-between items-center">
                <div className="flex-3/4 flex flex-col gap-2 ">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <span className="text-gray-500 ">{item.publisher}</span>
                </div>
                <div className="flex-1/4 flex flex-col justify-center items-baseline-last gap-2">
                  <span className="text-xl">{item.like}</span>
                  <span>
                    <FavoriteBorderIcon />
                  </span>
                </div>
              </div>
              <div className="text-gray-500">
                <span>{item.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpriencePage;
