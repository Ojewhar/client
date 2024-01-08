// components/Step1.js
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../../../public/images/logo.png";
import { addTelehealth } from "@/app/redux/states/telehealthConsultation/telehealthConsultationSlice";

const Step3 = ({ nextStep, prevStep }) => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [confMobile, setConfMobile] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  // Onboard Redux
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile !== confMobile) {
      toast.error("Oops mobile no is did not match !");
      return;
    }
    dispatch(
      addTelehealth({ email: email, mobile: mobile, confirmMobile: confMobile })
    );
    nextStep();
  };

  const backButtonFunc = () => {
    dispatch(removeTelehealth());
    prevStep();
  };

  const data = useSelector((state) => state.telehealthConsultation.allvalues);
  console.log(data);
  // if fill of the hide input its redirect to homepage and lock that ip
  const handleFillChange = () => {
    window.location.replace("/");
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
              Contact Details
            </h2>
            <p className="py-3 text-[12px] text-opacitytext ">
              Please double check the information is accurate to ensure a
              seamless process.
            </p>
          </div>

          {/* form data section start */}
          <div>
            <div>
              <label htmlFor="Email" className="text-uptext font-bold">
                Email
              </label>
              <input
                required
                id="Email"
                type="email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg  hover:border-upurple"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-5">
              <div>
                <label htmlFor="mobile" className="text-uptext font-bold">
                  Mobile number
                </label>
                <input
                  required
                  placeholder="0412345678"
                  id="mobile"
                  type="number"
                  name="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full mt-2 focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg  hover:border-upurple"
                />
                <small className="text-[10px]">
                  Your Partner Practitioner will call you at this number.
                </small>
              </div>

              <div>
                <label htmlFor="cmobile" className="text-uptext font-bold ">
                  Confirm Mobile number
                </label>
                <input
                  placeholder="0412345678"
                  required
                  id="cmobile"
                  type="number"
                  name="cmobile"
                  onChange={(e) => setConfMobile(e.target.value)}
                  className="w-full mt-2 focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                />
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

export default Step3;

{
  /* <div className="mb-6 hidden">
          <label
            htmlFor="iffillformone"
            className="none mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dont fill this input
          </label>
          <input
            onChange={handleFillChange}
            name="iffillformone"
            value={formData.iffillformone}
            type="text"
            id="iffillformone"
            className="bg-gray-50 border-gray-300 hidden text-gray-900 w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary "
            placeholder="Company/Legal Entity Name of the Sub-merchant"
          />
        </div> */
}
