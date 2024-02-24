"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import msg from "@/public/icons/Message.svg";
import lock from "@/public/icons/Lock.svg";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import { userLogin, userRegister } from "@/app/Services/api-requests/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/context/slices/userSlice";
import {
  accessToken,
  decodeUser,
} from "@/app/Services/access-token/access_token";
import { LoaderHash } from "@/app/Shared/Loader";
import GlobalSendButton from "@/app/Layouts/GlobalSendButton";
const Page = () => {
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const access_token = accessToken();

  useEffect(() => {
    if (access_token) {
      window?.location.replace("/dashboard");
    } else {
      setIsLoading(false);
    }
  }, [access_token]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const userData = {
        email,
        password,
      };
      const res = await userLogin(userData);

      if (res.data) {
        toast.success(res.data.message);
        router.push("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error?.response.data.message);
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading ? (
        <LoaderHash />
      ) : (
        <section className=" bg-lightbg h-screen overflow-hidden">
          <div className="flex justify-center items-center h-full">
            <form
              onSubmit={handleSubmit}
              className="p-10 rounded-xl bg-white   flex justify-between flex-col max-w-md"
            >
              <div className="text-center">
                <Image src={logo} alt="logo" className="w-auto mx-auto" />
                <h3 className="font-semibold my-2 text-xl">
                  Login Your
                  <span className="text-primary"> Account</span>
                </h3>
              </div>
              {/**form body start**/}
              <div className=" py-5">
                <div className="relative py-4">
                  <Image
                    src={msg}
                    alt="msg"
                    className=" absolute top-1/2 left-3 translate-x-0 text-gray-400 -translate-y-1/2"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="example@company.com"
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
                <small>
                  <Link className="underline" href="/login-passwordless">
                    Login as a patient
                  </Link>
                </small>
              </div>
              {/**form body end**/}
              <div className="flex justify-center items-center">
                <GlobalSendButton
                  buttonloadingtext="Sending...."
                  buttontext="Login Now"
                />
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
