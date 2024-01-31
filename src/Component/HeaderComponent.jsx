import React, { useState } from "react";
import HomePages from "../Pages/HomePages";
import MenuPages from "../Pages/MenuPages";
import { Link } from "react-router-dom";
import { link } from "../assets/navbar";
import brand from "../assets/asset2.svg";

function HeaderComponent() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="items-center fixed z-10 md:flex bg-[#9FBB73] w-full px-5 border-b-[4px] border-b-[#535353] md:justify-between">
      <div className="px-0 md:py-3">
        <Link to="/">
          <img onClick={() => setOpenNav(false)} src={brand} alt="" className="w-[220px] md:my-1 my-4 md:ms-5" />
        </Link>
      </div>
      <div className="absolute top-6 right-5 md:hidden lg:hidden sm:inline-block" onClick={() => setOpenNav(!openNav)}>
        <i className={`fa fa-${openNav ? "close" : "bars"} text-2xl`}></i>
      </div>
      <div
        className={`md:flex md:gap-10 md:my-7 md:static items-center md:z-auto left-0 md:h-0 md:pt-0 h-[150px] pt-[5%] absolute z-[-1] md:border-none border-b-[4px] border-b-[#535353] bg-[#9FBB73] md:w-auto w-full transition-all duration-300 ${
          openNav ? "opacity-100 " : "opacity-0 hidden md:opacity-100"
        }`}
      >
        {link.map((navLink) => (
          <div className="text-white text-[16px] font-semibold gap-7 md:flex md:items-center text-center cursor-pointer m-2">
            <Link onClick={() => setOpenNav(false)} key={navLink.id} to={navLink.path} className="hover:underline underline-offset-8">
              <i className={`md:inline-block hidden pe-3 ${navLink.icon}`}></i>
              {navLink.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderComponent;
