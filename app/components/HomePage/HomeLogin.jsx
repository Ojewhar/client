"use client";
import { sendLoginLink } from "@/app/Services/api-requests/sendmail";
import React, { useState } from "react";
import toast from "react-hot-toast";

const HomeLogin = () => {
  const [passlessMail, setpasslessMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const result = await sendLoginLink(passlessMail);
      toast.success(result.data.message);
      setIsLoading(false);
      setpasslessMail("");
    } catch (error) {
      toast.error("You are not registerd");
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold mb-2">LOGIN</h2>
        <input
          type="email"
          value={passlessMail}
          placeholder="Use your email"
          className="border border-uorange p-2 outline-none"
          onChange={(e) => setpasslessMail(e.target.value)}
        />
        <button
          disabled={isLoading ? true : false}
          type="submit"
          className="bg-uorangedark border-uorangedark border-2 hover:bg-transparent hover:text-uorangedark transition-all text-white font-bold py-2 px-4 rounded "
        >
          {isLoading ? " Login...." : " Login"}
        </button>
      </form>
    </>
  );
};

export default HomeLogin;
