// components/Step1.js
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/public/images/logo.png";
import {
  addFormOne,
  removeFromOne,
} from "@/app/context/states/formOneCertificate/formOneCertificateSlice";

const Step2 = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const [requireAcertificate, setRequireAcertificate] = useState("Work");

  const dispatch = useDispatch();

  const handleLeaveReasonChange = (event) => {
    setRequireAcertificate(event.target.value); // Update the selected value when a radio button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormOne({ requireAcertificate: requireAcertificate }));
    nextStep();
  };

  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };

  // const data = useSelector((state) => state.formOneCertificate.alldata);

  // console.log(data);

  return (
    <section>
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
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-left mb-3">
            <h2 className="text-2xl font-semibold works text-uptexform">
              I require a certificate for:
            </h2>
          </div>

          {/* form data section start */}
          <div className="mb-6">
            <div className="flex items-center mb-5">
              <input
                id="Work"
                type="radio"
                value="Work"
                checked={requireAcertificate === "Work"}
                onChange={handleLeaveReasonChange}
                name="Work"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
              <label
                htmlFor="Work"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Work
              </label>
            </div>

            <div className="flex items-center mb-5">
              <input
                id="Study"
                type="radio"
                value="Study"
                name="Study"
                checked={requireAcertificate === "Study"}
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Study"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Study
              </label>
            </div>

            <div className="flex items-center mb-5">
              <input
                id="Carer’sleave"
                type="radio"
                value="Carer’s leave"
                name="Carer’sleave"
                checked={requireAcertificate === "Carer’s leave"}
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Carer’sleave"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Carer’s leave
              </label>
            </div>

            {/* <div className="flex items-center mb-5">
                <input
                  id="others3"
                  type="radio"
                  value="Other"
                  name="Other"
                  checked={requireAcertificate === "Other"}
                  onChange={handleLeaveReasonChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="others3"
                  className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
                >
                  Other
                </label>
              </div> */}
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
