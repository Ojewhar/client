"use client";
import React from "react";
import Sidebars from "./Sidebars/Sidebars";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Loggedout from "./Sidebars/Logout/Loggedout";

const SidebarWrapper = () => {
  return (
    <>
      <div className="flex flex-col  border-r justify-between items-center shadow-sm h-screen  pb-5 bg-white dark:bg-slate-950 ">
        <div className=" w-full ">
          <div className="flex justify-center items-center border-b py-1">
            <Image src={logo} alt="logo" width={172} />
          </div>
          <div className="mt-12 w-full">
            <Sidebars />
          </div>
        </div>

        <Loggedout />
      </div>
    </>
  );
};

export default SidebarWrapper;
