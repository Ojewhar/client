"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import {
  addFormOne,
  removeFromOne,
} from "@/app/context/states/formOneCertificate/formOneCertificateSlice";

const Step1 = ({ nextStep, currentStep, prevStep }) => {
  // Value add on state
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormOne({ agree: "I agree and wish to proceed" }));
    nextStep();
  };

  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };
  // const data = useSelector((state) => state.formOneCertificate.alldata);
  // console.log(data);
  return (
    <section>
      <Toaster />
      <div className="md:w-[661px] mx-auto">
        <div>
          <div>
            <Image
              width={200}
              height={93}
              alt="logo"
              src={logo}
              className="mx-auto mt-4"
            />
          </div>
          <div className="flex max-w-[400px] my-12 mx-auto justify-center gap-4 items-center">
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <p className="py-3 text-[12px] text-uptexform text-justify">
              By continuing with an application for a medical certificate, I
              acknowledge I am not experiencing significant health symptoms,
              such as (but not limited to); severe pain, severe bleeding, limb
              weakness, shortness of breath, chest pain, major trauma, severe
              anxiety or depression, suicidality, difficulty with; speech,
              swallowing, movement, vision. I also acknowledge that by
              submitting an application for a medical certificate, this in no
              way replaces the need to have a full assessment by a medical
              practitioner. I have also read and accept the terms and
              conditions, as well as the privacy policy
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <input
                id="default-radio-1"
                type="checkbox"
                value="Sick Leave"
                defaultChecked
                required
                name="default-radio"
                className="w-5 h-5 mb-1 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 "
              />
              <label
                htmlFor="default-radio-1"
                className="  text-[16px] font-semibold cursor-pointer text-uptexform dark:text-gray-300"
              >
                I agree and wish to proceed
              </label>
            </div>
          </div>

          <div className="md:grid gap-4 grid-cols-2 mt-6">
            <FNCButton
              onClick={backButtonFunc}
              title="Back"
              className="border-2 md:mb-2 text-upurple border-upurple "
            />
            <SubmitButton
              title="Continue"
              className="border-2 text-white bg-upurple  border-upurple "
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step1;
