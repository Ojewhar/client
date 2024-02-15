"use client";
import React from "react";
import { Layout, Compass } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { adminRoutes, guestRoutes } from "@/app/data/SidebarMenu";
import SidebarAdmin from "./SidebarAdmin";
import Image from "next/image";

const Sidebars = () => {
  const user = "admin";
  const pathname = usePathname();
  const isAdminPage = pathname.includes("/admin");
  const routes = guestRoutes;
  const adminroutes = adminRoutes;

  return (
    <div className="flex relative flex-col justify-between w-full h-full">
      <div className="flex flex-col justify-between w-full ">
        <div className="mb-0.5">
          {routes.map((route, index) => {
            return (
              <SidebarItem
                key={index}
                icon={route.icon}
                label={route.label}
                href={route.href}
              />
            );
          })}
          {user === "admin" &&
            adminroutes.map((route, index) => {
              return (
                <SidebarAdmin
                  key={index}
                  icon={route.icon}
                  label={route.label}
                  href={route.href}
                  user={user}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebars;
