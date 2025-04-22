import React from "react";
import Image from "../../../../public/image.jpg";

const Login = () => {
  return (
    <div className=" w-screen h-screen flex flex-col justify-between items-center bg-[#66cfd4]">
      <div className="w-full h-[30%]">
        <div className="absolute  top-16 left-84 w-24 h-24 flex justify-end items- rotate-45 ">
          <div className="h-8 w-4 bg-[#0097a0] rounded-2xl self-center"></div>
          <div className="w-6 h-3 bg-[#06bdc7]  self-center"></div>
          <div className="h-8 w-4 bg-[#0097a0] rounded-2xl self-center"></div>
        </div>
        <h1 className="text-8xl  h-full flex items-center justify-center rolloto text-orange-400 font-black">
          fit Line
        </h1>
      </div>
      <form action="" className="h-[60%] w-full flex flex-col p-4 gap-10">
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="text-xl text-white">
            نام کاربری:
          </label>
          <input
            type="text"
            className="w-[80%] bg-white self-center rounded-xl p-5 outline-0 text-2xl text-left"
          />
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="" className="text-xl text-white">
            رمز عبور:
          </label>
          <input
            type="text"
            className="w-[80%] bg-white self-center rounded-xl p-5 outline-0 text-2xl text-left"
          />
        </div>
        <button className="bg-orange-500 w-32 h-14 rounded-xl self-end ml-10 text-white mt-auto">
          ورود
        </button>
        {/* <button className="">ورود</button> */}
      </form>
    </div>
  );
};

export default Login;
