import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const user = JSON.parse(userData);
    } else {
    }
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen">
      <nav className="flex-1/12 flex justify-between items-center bg-[#0097a0]">
        <div className="flex justify-center gap-6 p-4 items-center ">
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "text-orange-300 text-lg" : "text-white text-lg"
            }
          >
            ورود
          </NavLink>
          <NavLink
            to={"/signUp"}
            className={({ isActive }) =>
              isActive ? "text-orange-300 text-lg" : "text-white text-lg"
            }
          >
            ثبت نام
          </NavLink>
        </div>
        <div>
          <h1 className="text-white text-2xl">FitLine</h1>
        </div>
      </nav>
      <div className="flex-10/12 bg-[#88d9dd] flex items-center">
        <div className=" h-[70%] mx-auto flex flex-col items-center gap-24">
          <h1 className="text-4xl flex justify-center items-center p-2 text-white leading-12">
            بهترین مربیت رو از پلتفرم آنلاین فیت لاین پیدا کن
          </h1>
          <div className="text-white text-xl bg-[#f48b37] w-36 h-16 flex justify-center items-center rounded-2xl ">
            جستجوی مربی
          </div>
          {/* <div className="absolute bottom-0 right-10 bg-red-500 w-32 h-48 flex rotate-45">
            <div className="h-14 w-5 bg-[#0097a0] rounded-2xl self-center"></div>
            <div className="w-10 h-4 bg-[#06bdc7]  self-center"></div>
            <div className="h-14 w-5 bg-[#0097a0] rounded-2xl self-center"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
