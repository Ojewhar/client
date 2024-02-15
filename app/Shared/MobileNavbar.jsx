"use client";
import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarWrapper from "../(auth-routers)/components/LeftSidebar/SidebarWrapper";
const MobileNavbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="pr-4 md:hidden hover:opacity-75 transition">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <SidebarWrapper />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
