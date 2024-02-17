"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/images/logo.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { ImWarning } from "react-icons/im";
import { sendLoginLink } from "@/app/Services/api-requests/sendmail";

const LoginPasswordLess = () => {
  const [passlessMail, setpasslessMail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //const isToken = useSelector((state) => state.loginAccessToken.token ) ;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const result = await sendLoginLink(passlessMail);
      toast.success(result.data.message);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      if (error.response.data === "You are not registerd") {
        setIsError(true);
        toast.error(error.response.data);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-[70px] items-center">
        <div className="w-[450px] md:py-8 ">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <Image
                src={logo}
                className="mx-auto"
                height={200}
                width={250}
                alt="logo"
              />
              <h3 className="text-xl font-semibold text-center space my-6 ">
                The easiest way to see a doctor
              </h3>
            </div>
            <div>
              <div>
                <label className="text-[10px] " htmlFor="email">
                  Email*
                </label>
                <input
                  onChange={(e) => setpasslessMail(e.target.value)}
                  type="email"
                  required
                  className="mt-[8px] border-[2px] font-semibold text-uptextdark border-upurple rounded-[5px] px-0 py-[5px] block w-full outline-none focus:border-opacity-100 border-opacity-80 text-[16px] "
                />
              </div>

              <div className="mt-4">
                {isLoading ? (
                  <input
                    type="submit"
                    value="Requesting......"
                    disabled
                    className="mt-[8px] cursor-not-allowed hover:bg-opacity-80 duration-100 border-[2px] border-upurple rounded-[5px] px-0 py-3  block w-full outline-none bg-upurple text-yellow-100 font-semibold works text-[13px] "
                  />
                ) : (
                  <input
                    type="submit"
                    value="Login"
                    className="mt-[8px] hover:bg-opacity-80 duration-100 border-[2px] border-upurple rounded-[5px] px-0 py-3 cursor-pointer block w-full outline-none bg-upurple text-yellow-100 font-semibold works text-[13px] "
                  />
                )}
              </div>
            </div>
          </form>
          {isError ? (
            <div
              className="block py-3 px-3 mt-7 rounded"
              style={{ background: "rgb(255, 244, 229)" }}
            >
              <div className="flex gap-1 ">
                <ImWarning className="text-5xl text-orange-600 font-bold" />
                <p
                  className="text-center text-sm "
                  style={{ color: "rgb(102, 60, 0)" }}
                >
                  Uh-oh! It appears that your email is not registered with us.
                  Please try using a different email or click{" "}
                  <Link href="/" className="underline text-indigo-800">
                    here
                  </Link>{" "}
                  to continue enjoying our services.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="block py-3 px-3 mt-7 rounded bg-[#E5F6FD]">
                <div className="flex gap-1 items-center ">
                  <AiOutlineInfoCircle className="text-xl text-sky-400 font-bold" />
                  <p
                    className="text-center text-sm"
                    style={{ color: "rgb(1, 67, 97" }}
                  >
                    We’ll email you a magic code for a password-free sign in.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPasswordLess;
