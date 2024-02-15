"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MENU } from "../data/Menu";

const MainNavRoutes = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/dashboard/teacher");
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      <ul className="flex justify-end items-center gap-4">
        {MENU.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.href}
                className="hover:text-emerald-700 transition"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MainNavRoutes;
