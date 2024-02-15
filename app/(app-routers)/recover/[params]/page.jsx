"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/icons/logo.svg";
import useUnprotectedRoute from "@/app/hooks/useUnprotectedRoute";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import Loader, { LoaderHash } from "@/app/Shared/Loader";
import { updateSingleUser } from "@/app/Services/api-requests/auth";
const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isUser, setIsUser] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const { params } = useParams();
  const token = params;

  // check jwt validation
  useEffect(() => {
    if (token) {
      try {
        const decode = jwtDecode(token);
        setIsUser(decode);
        console.log(decode);
        setIsLoading(false);
      } catch (error) {
        toast.error("Invalid jwt");
        console.log(error);
        setTimeout(() => {
          router.push("/connexion");
          setIsLoading(false);
        }, 1000);
      }
    }
  }, []);

  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== cPassword) {
        toast.error("Password did not match !");
        return;
      } else {
        const user = {
          id: isUser.id,
          password: password,
        };
        const result = await updateSingleUser(user);
        if (result.data) {
          toast.success("Password created successfully");
          router.push("/connexion");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image className="w-36 h-8 mr-2" src={logo} alt="logo" />
          </Link>
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-lg underline text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Recover Your Password
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  disabled
                  required
                  value={isUser ? isUser?.email : "loading"}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className=" absolute top-12 right-5 cursor-pointer translate-x-1/2 text-gray-400 -translate-y-3">
                  {isShow ? (
                    <Eye onClick={() => setIsShow(!isShow)} />
                  ) : (
                    <EyeOff onClick={() => setIsShow(!isShow)} />
                  )}
                </span>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
