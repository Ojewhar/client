import Image from "next/image";
import Link from "next/link";
import React from "react";
import weaccept from "@/public/images/we-accept.png";
const GlobalFooter = () => {
  return (
    <footer className="border-t bg-primary bg-opacity-30 border-primary text-black py-4 mt-24">
      <div className="container mx-auto md:flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-gray-700" href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-700" href="/terms-of-use">
                T&C
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-700" href="#">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
        <div className="payment-methods md:flex md:justify-end justify-start mt-4 md:mt-0 items-center">
          <p className="mr-4">We accept :</p>
          <Image alt="we-accept" src={weaccept} width={180} />
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
