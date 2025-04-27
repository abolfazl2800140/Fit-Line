import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Get from "../../../utils/api/Get";
import axios from "axios";
import { useDispatch } from "react-redux";
import userSlice from "../../../feature/userSlice/index";

function Register() {
  const [value, setValue] = useState({
    id: "",
    userName: "",
    password: "",
    age: null,
    history: null,
    isTrainer: false,
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function generateIdFromFields(user) {
    const u = user.userName?.[0];
    const p = user.password?.[0];
    const a = user.age?.toString()?.[0];
    const h = user.history?.toString()?.[0];
    return `${u}${p}${a}${h}`.toLowerCase();
  }

  const changeHandler = (e) => {
    let newValue;

    if (e.target.name === "isTrainer") {
      newValue = { ...value, [e.target.name]: !value.isTrainer };
    } else {
      newValue = { ...value, [e.target.name]: e.target.value };
    }

    const id = generateIdFromFields(newValue);
    setValue({ ...newValue, id });
  };

  const fetchHandler = async () => {
    const { data } = await axios.get("http://localhost:8000/user");
    return data;
  };

  const { data: User } = useQuery({
    queryKey: ["user"],
    queryFn: fetchHandler,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      value.password !== "" &&
      value.userName !== "" &&
      value.age !== null &&
      value.history !== null
    ) {
      const user = User.find((item) => item.name === value.userName);
      if (user) {
        alert(`کاربر ${value.userName} از قبل ثبت نام کرده است`);
      } else {
        axios.post("http://localhost:8000/user", value);
        localStorage.setItem("loginData", JSON.stringify(value));
        dispatch(userSlice.actions.setUserId(value.id));
        navigate("/athelate-app");
      }
    }
  };

  return (
    <div className="w-screen bg-[#66cfd4] flex flex-col">
      <div className="w-full h-[30%]">
        <div className="absolute  top-25 left-80 w-24  flex justify-end items- rotate-45 ">
          <div className="h-8 w-4 bg-[#0097a0] rounded-2xl self-center"></div>
          <div className="w-6 h-3 bg-[#06bdc7]  self-center"></div>
          <div className="h-8 w-4 bg-[#0097a0] rounded-2xl self-center"></div>
        </div>
        <h1 className="text-8xl h-full flex items-center justify-center rolloto text-orange-400 font-black">
          fitLine
        </h1>
      </div>
      <form action="" className="w-full flex flex-col p-4 gap-10">
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="text-xl text-white">
            نام کاربری:
          </label>
          <input
            value={value.userName}
            name="userName"
            type="text"
            className="w-[80%] bg-white self-center rounded-xl p-5 outline-0 text-2xl text-left"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="text-xl text-white">
            رمز عبور:
          </label>
          <input
            value={value.password}
            name="password"
            type="text"
            className="w-[80%] bg-white self-center rounded-xl p-5 outline-0 text-2xl text-left"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="text-xl text-white">
            سن:
          </label>
          <input
            value={value.age}
            name="age"
            type="number"
            className="w-[80%] bg-white self-center rounded-xl p-5 outline-0 text-2xl text-left"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="text-xl text-white">
            سابقه ورزشی
          </label>
          <input
            value={value.history}
            name="history"
            type="number"
            className="w-[80%] bg-white self-center rounded-xl p-5 outline-0 text-2xl text-left"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="flex gap-6">
          <input
            type="checkbox"
            name="isTrainer"
            className="w-4 h-4 bg-red-600 p-2"
            onClick={(e) => changeHandler(e)}
          />
          <label htmlFor="isTrainer" className="text-white text-xl">
            آیا شما مربی هستید؟
          </label>
        </div>
        <button
          onClick={(e) => submitHandler(e)}
          className="bg-orange-500 w-[80%] text-xl rounded-xl self-center text-white p-5 mt-12"
        >
          ثبت نام
        </button>
        {/* <button className="">ورود</button> */}
      </form>
    </div>
  );
}

export default Register;
