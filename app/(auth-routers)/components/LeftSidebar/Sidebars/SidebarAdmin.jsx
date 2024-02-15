"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const SidebarAdmin = ({ icon: Icon, label, href }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/dashboard" && href === "/dashboard") ||
    pathname === href ||
    pathname?.startsWith(`/${href}`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center w-full gap-x-2 mb-1 bg-primary bg-opacity-5 text-primary   hover:bg-green-100 text-sm  pl-6 transition-all hover:text-primary ",
          isActive &&
            "text-white bg-primary hover:bg-primary bg-opacity-100 hover:text-white hover:opacity-85 dark:bg-primary transition-all"
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon
            size={23}
            className={cn("text-primary", isActive && " text-white")}
          />
          {label}
        </div>
      </button>
    </>
  );
};

export default SidebarAdmin;
