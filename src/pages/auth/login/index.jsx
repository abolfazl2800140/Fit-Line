import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.password !== "" && value.userName !== "") {
      localStorage.setItem("loginData", JSON.stringify(value));
      navigate("/");
    }
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className=" w-screen h-screen flex flex-col justify-between items-center bg-[#66cfd4]">
      <div className="w-full h-[30%]">
        <div className="absolute  top-18 left-100 w-24  flex justify-end items- rotate-45 ">
          <div className="h-8 w-4 bg-[#0097a0] rounded-2xl self-center"></div>
          <div className="w-6 h-3 bg-[#06bdc7]  self-center"></div>
          <div className="h-8 w-4 bg-[#0097a0] rounded-2xl self-center"></div>
        </div>
        <h1 className="text-8xl h-full flex items-center justify-center rolloto text-orange-400 font-black">
          fitLine
        </h1>
      </div>
      <form action="" className="h-[60%] w-full flex flex-col p-4 gap-10">
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
        <button
          onClick={(e) => submitHandler(e)}
          className="bg-orange-500 w-[80%] text-xl rounded-xl self-center text-white p-5 mt-12"
        >
          ورود
        </button>
        {/* <button className="">ورود</button> */}
      </form>
    </div>
  );
};

export default Login;
