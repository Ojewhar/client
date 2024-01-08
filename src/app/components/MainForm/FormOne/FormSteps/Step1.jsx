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
import logo from "../../../../../../public/images/logo.png";
import {
  addFormOne,
  removeFromOne,
} from "@/app/redux/states/formOneCertificate/formOneCertificateSlice";
const Step1 = ({ nextStep, currentStep, prevStep }) => {
  // Value add on state
  const dispatch = useDispatch();
  const [leave, setLeave] = useState("Work");
  const seeking = "Sick Leave";

  // Update the selected value when a radio button is clicked

  // const data = useSelector((state) => state.formOneCertificate.alldata);

  // Update the selected value when a radio button is clicked
  const handleLeaveChange = (event) => {
    setLeave(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormOne({ leave: leave, seeking: seeking }));
    nextStep();
  };

  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };
  const data = useSelector((state) => state.formOneCertificate.alldata);
  console.log(data);
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
            <h2 className="text-2xl font-semibold works">
              What is this leave from?
            </h2>
            <p className="py-3 text-[12px] text-uptexform">
              Please note: The Partner Doctors are currently unable to review
              requests for fitness for work certificates as part of your
              consultation outcome.
            </p>
          </div>

          <div>
            <div className="mb-6">
              <h5 className="font-semibold  text-uptexform text-[15px] mb-5">
                I am seeking
              </h5>
              <div className="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Sick Leave"
                  defaultChecked
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 "
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-[16px] font-semibold text-uptexform dark:text-gray-300"
                >
                  Sick Leave
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold  text-uptexform text-[15px] mb-5">
                The leave is from
              </h5>
              <div className="flex items-center mb-4">
                <input
                  id="work"
                  type="radio"
                  value="Work"
                  name="work"
                  checked={leave === "Work" ? true : false}
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 fill-upurple outline-none "
                />
                <label
                  htmlFor="work"
                  className="ml-2 text-[16px] font-semibold text-uptexform dark:text-gray-300"
                >
                  Work
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="studies"
                  type="radio"
                  value="Studies"
                  name="work"
                  checked={leave === "Studies" ? true : false}
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="studies"
                  className="ml-2 text-[16px] font-semibold text-uptexform dark:text-gray-300"
                >
                  Studies
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="leaveothers"
                  type="radio"
                  value="Other"
                  name="work"
                  checked={leave === "Other" ? true : false}
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="leaveothers"
                  className="ml-2 text-[16px] font-semibold text-uptexform dark:text-gray-300"
                >
                  Other
                </label>
              </div>
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
