import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import logo from "/public/images/logo.png";

const Preview = ({ prevStep, nextStep }) => {
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };

  return (
    <section>
      <Toaster />
      <div className="w-[661px] mx-auto">
        <div>
          <div>
            <Image
              width={93}
              height={93}
              alt="logo"
              src={logo}
              className="mx-auto mt-4"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl mt-5 font-semibold works text-uptexform">
              Review your details!
            </h2>
            <p className="py-5 text-[12px] text-slate-500">
              Please double check your details below. This will be included on
              any documents provided by your Partner Doctor and{" "}
              <strong>cannot be edited after submission.</strong>
            </p>
          </div>
          {/* form data section start */}
          preview
          {/* form data section start */}
          <div className="md:grid gap-4 grid-cols-2 mt-6">
            <FNCButton
              onClick={backButtonFunc}
              title="Back"
              className="border-2 md:mb-2 text-upurple border-upurple "
            />
            <SubmitButton
              title="Continue"
              className={
                isError
                  ? "border-2 md:mb-2 text-white bg-upurple border-upurple cursor-pointer"
                  : "border-2 md:mb-2 text-white bg-upurple border-upurple"
              }
              disable={isError ? true : false}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Preview;
