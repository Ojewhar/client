"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/Layouts/Header";
import SidebarWrapper from "../components/LeftSidebar/SidebarWrapper";
import { usePathname, useRouter } from "next/navigation";

import { LoaderHash } from "@/app/Shared/Loader";
import useProtectedRoute from "@/app/hooks/useProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { decodeUser } from "@/app/Services/access-token/access_token";
import { setUser } from "@/app/context/slices/userSlice";

const Page = ({ children }) => {
  const path = usePathname();
  const activePath = path.split("/").pop();
  const fullPath = path
    .split("/")
    .slice(2, path.length - 1)
    .join(" / ");

  const loading = useProtectedRoute();
  const dispatch = useDispatch();
  useEffect(() => {
    const duser = decodeUser();
    dispatch(setUser(duser.user));
  }, []);

  return (
    <>
      {loading ? (
        <LoaderHash />
      ) : (
        <div className="h-full">
          <header className="h-[75px] md:pl-56 fixed inset-y-0 w-full z-50">
            <Header />
          </header>

          <div className="hidden md:flex h-full w-60 flex-col inset-y-0 fixed z-50">
            <SidebarWrapper />
          </div>

          <main className="md:pl-60 m-2 h-full pt-[75px]">{children}</main>
        </div>
      )}
    </>
  );
};

export default Page;
