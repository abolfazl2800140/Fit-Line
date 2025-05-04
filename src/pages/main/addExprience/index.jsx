import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExprince = () => {
  const [value, setValue] = useState({
    title: "",
    desc: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    navigate(-1)
    // if (value.desc !== "" && value.title !== "") {
    //   const newExprince = {
    //     title: value.title,
    //     desc: value.desc,
    //     date: Date.now(),
    //     like: 0,
    //     comment: [],
    //     publisher: "ابوالفضل",
    //   };
    //   e.preventDefault();
    //   const { data } = await axios.post(
    //     "http://localhost:8000/exprince",
    //     newExprince
    //   );
    //   return data;
    // }
  };

  return (
    <div className="w-screen h-full">
      <div className="w-[80%] h-full mx-auto py-8 flex flex-col gap-8">
        <h1 className="text-3xl text-center">افزودن تجربه</h1>
        <input
          type="text"
          className="border-1 border-gray-400 rounded-md outline-gray-500 p-4"
          placeholder="عنوان"
          name="title"
          onChange={(e) => changeHandler(e)}
        />
        <textarea
          type="text"
          className="border-1 border-gray-400 rounded-md outline-gray-500 p-4 h-56"
          placeholder="متن"
          name="desc"
          onChange={(e) => changeHandler(e)}
        />
        <Button
          variant="contained"
          sx={{ height: 60, fontSize: 18, bgcolor: "#0097a0" }}
          onClick={(e) => submitHandler(e)}
        >
          ثبت تجربه
        </Button>
      </div>
    </div>
  );
};

export default AddExprince;
