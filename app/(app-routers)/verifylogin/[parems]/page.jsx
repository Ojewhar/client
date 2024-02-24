"use client";
import React, { useState } from "react";
import verify from "/public/images/verify.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { verifyLogin } from "@/app/Services/api-requests/auth";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const parm = useParams();

  async function handleSend() {
    try {
      setLoading(true);
      const isToken = parm.parems;
      const res = await verifyLogin(isToken);
      if (res.data) {
        Cookies.set("access_token", isToken);
      }
      toast.success(res.data);
      window.location.replace("/dashboard");
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-3xl font-bold text-zinc-800">
            Confirm Your Verification
          </h2>
          <div>
            <Image
              src={verify}
              alt="verify"
              style={{ width: "100%", height: "360px" }}
              className="my-5"
            />
          </div>
          {loading ? (
            <button
              type="button"
              className="mt-3 inline-block w-96 rounded bg-uorangedark opacity-75 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 cursor-not-allowed hover:bg-uorange"
              disabled={true}
            >
              Verifing.....
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSend}
              className="mt-3 inline-block w-96 rounded bg-uorangedark px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-uorange"
            >
              Verify Now →
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
