import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ClipboardPlus, Layout } from "lucide-react";
import { cn } from "@/lib/utils";
import AdminButtons from "./SideBarRouteButtons/AdminButtons";
import LoginUserButtons from "./SideBarRouteButtons/LoginUserButtons";
import { useSelector } from "react-redux";

const SidebarItemNew = () => {
  const router = useRouter();
  const currentPath = usePathname(); // Get the current pathname

  const handleChangeRoute = (href) => {
    router.push(href);
  };

  const admin = useSelector((state) => state.userInfo.user);
  const isAdmin = admin?.role;

  return (
    <div className="flex relative flex-col justify-between w-full h-full">
      <div className="flex flex-col justify-between w-full ">
        <div className="mb-0.5">
          {isAdmin === "admin" && (
            <button
              onClick={() => handleChangeRoute("/dashboard")}
              className={cn(
                "flex items-center w-full gap-x-2 mb-1 bg-primary bg-opacity-5 text-primary hover:bg-green-100  text-sm  pl-6 transition-all hover:text-primary ",
                (currentPath === "/dashboard" ||
                  (currentPath.startsWith("/dashboard/") &&
                    !currentPath.startsWith("/dashboard/patient"))) &&
                  "text-white bg-primary bg-opacity-100 hover:bg-primary hover:text-white hover:opacity-85 transition-all dark:bg-primary"
              )}
            >
              <div className="flex items-center gap-x-2 py-4">
                <Layout
                  size={23}
                  className={cn(
                    "text-primary",
                    (currentPath === "/dashboard" ||
                      (currentPath.startsWith("/dashboard/") &&
                        !currentPath.startsWith("/dashboard/patient"))) &&
                      " text-white"
                  )}
                />
                Dashboard
              </div>
            </button>
          )}
          {
            isAdmin === "admin" ? (
              // admin patient info button
              <AdminButtons
                handleChangeRoute={handleChangeRoute}
                currentPath={currentPath}
              />
            ) : (
              // admin patient info button
              // user patient info button
              <LoginUserButtons
                handleChangeRoute={handleChangeRoute}
                currentPath={currentPath}
              />
            )
            // user patient info button
          }
        </div>
      </div>
    </div>
  );
};

export default SidebarItemNew;
