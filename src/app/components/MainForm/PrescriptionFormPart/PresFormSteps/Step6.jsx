import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import React, { useState } from "react";
import SubscriptionImg from "/public/images/medical_certificates-subscription.svg";
import ExpressImg from "/public/images/medical_certificates-express.svg";
import EmailImg from "/public/images/medical_certificates-email.svg";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import logo from "/public/images/logo.png";

const Step6 = ({ nextStep, prevStep }) => {
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    nextStep();
  }

  function backButtonFunc() {
    prevStep();
  }

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
              Complete the checkout below
            </h2>
            <p className="py-5 text-[12px] text-slate-500">
              You will receive a full refund if your Partner Doctor determines
              that telehealth is not appropriate for your consultation.
            </p>
          </div>
          {/* form data section start */}
          Step 6{/* form data section start */}
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

export default Step6;
