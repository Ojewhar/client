"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo.png";
import { CircleUserRound, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import msg from "@/public/icons/Message.svg";
import lock from "@/public/icons/Lock.svg";
import Link from "next/link";
import GlobalSendButton from "@/app/Layouts/GlobalSendButton";

const Page = () => {
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className=" bg-lightbg h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <form className="p-10 rounded-xl bg-white  flex justify-between flex-col max-w-md">
          <div className="text-center">
            <Image src={logo} alt="logo" className="w-auto mx-auto" />
            <h3 className="font-semibold my-2 text-xl">
              Register As An <span className="text-primary">Admin</span>
            </h3>
          </div>
          {/**form body start**/}
          <div className="">
            <div className="relative py-4">
              <Image
                src={msg}
                alt="msg"
                className=" absolute top-1/2 left-3 translate-x-0 text-gray-400 -translate-y-1/2"
              />
              <input
                placeholder="example@compay.com"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full py-3 border focus:border-primary border-gray-300 rounded-md pl-12 outline-none pr-4 font-normal"
              />
            </div>
            <div className="relative py-4">
              <Image
                src={lock}
                alt="lock"
                className=" absolute top-1/2 left-3 translate-x-0 text-gray-400 -translate-y-1/2"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={isShow ? "text" : "password"}
                required
                placeholder="**************"
                className="w-full py-3 border focus:border-primary border-gray-300 rounded-md pl-12 outline-none pr-4 font-normal"
              />
              <span className=" absolute top-1/2 right-5 translate-x-1/2 text-gray-400 cursor-pointer -translate-y-3">
                {isShow ? (
                  <Eye onClick={(e) => setIsShow(!isShow)} />
                ) : (
                  <EyeOff onClick={(e) => setIsShow(!isShow)} />
                )}
              </span>
            </div>
            <div className="py-4  text-sm">
              <p>
                Have you already account ?{" "}
                <Link
                  href="/login"
                  className="text-primary underline font-normal"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
          {/**form body end**/}
          <div className="flex justify-center items-center">
            <GlobalSendButton
              buttonloadingtext="Sending...."
              buttontext="Register Now"
            />
          </div>
          {/**form body end**/}
        </form>
      </div>
    </section>
  );
};

export default Page;
