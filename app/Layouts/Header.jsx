"use client";
import React, { useState } from "react";
import MainNavRoutes from "../Shared/MainNavRoutes";
import MobileNavbar from "../Shared/MobileNavbar";
import Image from "next/image";
import profile from "@/public/icons/profile.svg";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Notifications from "../Shared/Notifications";
const Header = ({ pathName }) => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="p-4 relative border-b h-full flex items-center bg-white dark:bg-slate-950 shadow-sm">
      <menu className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center">
          <MobileNavbar />
        </div>

        <div>
          <div className="md:hidden">
            <MainNavRoutes />
          </div>
          <div className="flex justify-between items-center gap-3  ">
            {/* <DarkMode />
            <Image
              onClick={() => setShowNotification(!showNotification)}
              src={profile}
              alt="profile"
              width={28}
              height={28}
              className=" cursor-pointer"
            /> */}
          </div>
        </div>
      </menu>
      {/* <div className="absolute top-12 right-0">
        <Notifications />
      </div> */}
    </div>
  );
};

export default Header;
