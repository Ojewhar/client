import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
const GlobalHeader = () => {
  return (
    <header className=" border-b border-uorange bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} width={150} />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-gray-300" href="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/login">
                Login
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;
