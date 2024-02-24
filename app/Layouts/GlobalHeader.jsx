import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { Menu, MenuIcon, X } from "lucide-react";
import { FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
const GlobalHeader = () => {
  return (
    <header className=" border-b border-uorange bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} width={150} />
          </Link>
        </div>

        <nav>
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <ul className="md:flex space-x-4 hidden">
            <li>
              <Link className="hover:text-gray-300" href="/#pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/login-passwordless">
                Login
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;
