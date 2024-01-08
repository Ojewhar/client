// components/Step1.js
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import { setOnboard } from "@/app/redux/states/onboardSlice/onboardSlice";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../../../public/images/logo.png";
import {
  addFormOne,
  removeFromOne,
} from "@/app/redux/states/formOneCertificate/formOneCertificateSlice";

const Step2 = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const [leavereason, setLeaveReason] = useState("Common cold or flu");

  const dispatch = useDispatch();

  const handleLeaveReasonChange = (event) => {
    setLeaveReason(event.target.value); // Update the selected value when a radio button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormOne({ leavereason: leavereason }));
    nextStep();
  };

  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };

  const data = useSelector((state) => state.formOneCertificate.alldata);

  console.log(data);

  return (
    <section>
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
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold works text-uptexform">
              What is the main reason for this leave?
            </h2>
            <p className="py-3 text-[12px] text-slate-500">
              Tell your Partner Doctor what&apos;s wrong.
            </p>
          </div>

          {/* form data section start */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-5">
                <input
                  id="Common"
                  type="radio"
                  value="Common cold or flu"
                  checked={leavereason === "Common cold or flu"}
                  onChange={handleLeaveReasonChange}
                  name="Common"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="Common"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Common cold or flu
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="Headache"
                  type="radio"
                  value="Headache"
                  name="Common"
                  checked={leavereason === "Headache"}
                  onChange={handleLeaveReasonChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="Headache"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Headache
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="Migraine"
                  type="radio"
                  value="Migraine"
                  name="Common"
                  checked={leavereason === "Migraine"}
                  onChange={handleLeaveReasonChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="Migraine"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Migraine
                </label>
              </div>
              <div className="flex items-center mb-5">
                <input
                  id="Back"
                  type="radio"
                  value="Back pain"
                  name="Common"
                  checked={leavereason === "Back pain"}
                  onChange={handleLeaveReasonChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="Back"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Back pain
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="Period"
                  type="radio"
                  value="Period pain"
                  checked={leavereason === "Period pain"}
                  onChange={handleLeaveReasonChange}
                  name="Common"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="Period"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Period pain
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="Anxiety"
                  type="radio"
                  value="Anxiety, stress or depression"
                  checked={leavereason === "Anxiety, stress or depression"}
                  onChange={handleLeaveReasonChange}
                  name="Common"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="Anxiety"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Anxiety, stress or depression
                </label>
              </div>
              <div className="flex items-center mb-5">
                <input
                  id="others3"
                  type="radio"
                  value="Other"
                  name="Common"
                  checked={leavereason === "Other"}
                  onChange={handleLeaveReasonChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="others3"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Other
                </label>
              </div>
            </div>
          </div>
          {/* form data section start */}

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

export default Step2;
