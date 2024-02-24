"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import logo from "@/public/icons/logo.svg";
import { useSelector } from "react-redux";
import Image from "next/image";
import profileImg from "@/public/images/Profile photo.png";
import Logout from "@/public/images/Logout.svg";
import Cookies from "js-cookie";

const Loggedout = () => {
  const isUser = useSelector((state) => state.userInfo.user);
  const username = isUser?.email?.split("@")[0];

  function handleLogout() {
    Cookies.remove("access_token");

    setTimeout(() => {
      window?.location.replace("/");
    }, 1000);
  }

  return (
    <>
      <AlertDialog>
        <div className="flex justify-start gap-2 items-center px-8 ">
          <Image src={profileImg} alt="profileImg" width={40} />
          <p className="text-[14px] font-semibold">{username + "..."}</p>
          <AlertDialogTrigger>
            <Image src={Logout} alt="Logout" className="cursor-pointer " />
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Logout</AlertDialogTitle>
            <AlertDialogDescription>
              <strong className="capitalize">{username}</strong> , Do you
              confirm that you want to log out ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="text-white" onClick={handleLogout}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Loggedout;
