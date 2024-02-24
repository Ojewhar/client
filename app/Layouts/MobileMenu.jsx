import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { Menu } from "lucide-react";
const MobileMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <Image src={logo} width={150} />
              </Link>
            </SheetTitle>
            <SheetDescription>
              <ul className="flex justify-start items-start flex-col gap-4">
                <li>
                  <Link className="hover:text-gray-300" href="/#pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-300"
                    href="/login-passwordless"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
