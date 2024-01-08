import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import { TbFileUpload } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import logo from "/public/images/logo.png";
import Link from "next/link";
import {
  addTelehealth,
  removeTelehealth,
} from "@/app/redux/states/telehealthConsultation/telehealthConsultationSlice";

const Step5 = ({ nextStep, prevStep }) => {
  const [isError, setIsError] = useState(false);
  const [medicareFirstName, setMedicareFirstName] = useState("");
  const [medicareLastName, setMedicareLastName] = useState("");
  const [medicareNumber, setMedicareNumber] = useState("");
  const [iRN, setIRN] = useState("");
  const [medicareExpiryMonth, setMedicareExpiryMonth] = useState("");
  const [medicalExpiryYear, setMedicalExpiryYear] = useState("");
  const [iHINumber, setIHINumber] = useState("");
  const [medicare, setMedicare] = useState(true);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    setIsError(false);
    if (medicare) {
      dispatch(
        addTelehealth({
          medicareFirstName: medicareFirstName,
          medicareLastName: medicareLastName,
          medicareNumber: medicareNumber,
          iRN: iRN,
          medicareExpiryMonth: medicareExpiryMonth,
          medicalExpiryYear: medicalExpiryYear,
        })
      );
      nextStep();
    } else {
      if (!iHINumber.startsWith(8003)) {
        setIsError(true);
        return;
      }
      dispatch(
        addTelehealth({
          iHINumber: iHINumber,
        })
      );
      nextStep();
    }

    nextStep();
  }

  function backButtonFunc() {
    dispatch(removeTelehealth());
    prevStep();
  }

  return (
    <section>
      <div className="w-[661px] mx-auto">
        <div>
          <div>
            <Image
              width={93}
              height={93}
              alt="logo2"
              src={logo}
              className="mx-auto mt-4"
            />
          </div>
          <div className="flex max-w-[400px] my-12 mx-auto justify-center gap-4 items-center">
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {medicare ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold works text-uptexform">
                Medicare Details
              </h2>
              <p className="py-3 text-[12px] text-opacitytext">
                Required for receiving a prescription.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold works text-uptexform">
                Individual Healthcare Identifier (IHI) Information
              </h2>
              <p className="py-3 text-[12px] text-opacitytext">
                If you do not have a Medicare card, you will need to provide
                your IHI number. You can find your IHI number on your myGov
                account.
              </p>
            </div>
          )}

          {/* form data section start */}

          <div>
            {medicare ? (
              <div className="px-10">
                <div className="grid grid-cols-2 gap-6 mt-5">
                  <div>
                    <label
                      htmlFor="fname"
                      className="text-uptext font-bold pb-2 block"
                    >
                      First name(s)
                    </label>
                    <input
                      required
                      id="fname"
                      type="text"
                      name="fname"
                      onChange={(e) => setMedicareFirstName(e.target.value)}
                      className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg  hover:border-upurple"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lname"
                      className="text-uptext font-bold pb-2 block"
                    >
                      Last name
                    </label>
                    <input
                      required
                      id="lname"
                      type="text"
                      name="lname"
                      onChange={(e) => setMedicareLastName(e.target.value)}
                      className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 mt-5">
                  <div className=" col-span-3">
                    <label
                      htmlFor="Suburb"
                      className="text-uptext font-bold pb-2 block"
                    >
                      Medicare number
                    </label>
                    <input
                      required
                      id="Suburb"
                      type="text"
                      name="Suburb"
                      onChange={(e) => setMedicareNumber(e.target.value)}
                      className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                    />
                  </div>

                  <div className=" col-span-2">
                    <label
                      htmlFor="State"
                      className="text-uptext font-bold pb-2 block"
                    >
                      IRN
                    </label>
                    <input
                      required
                      id="State"
                      type="text"
                      name="State"
                      onChange={(e) => setIRN(e.target.value)}
                      className="w-full  focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-5">
                  <div>
                    <label
                      htmlFor="Suburb"
                      className="text-uptext font-bold pb-2 block"
                    >
                      Medicare expiry month
                    </label>
                    <input
                      placeholder="12"
                      maxLength="2"
                      required
                      id="Suburb"
                      type="text"
                      name="Suburb"
                      onChange={(e) => setMedicareExpiryMonth(e.target.value)}
                      className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="State"
                      className="text-uptext font-bold pb-2 block"
                    >
                      Medical expiry year
                    </label>
                    <input
                      placeholder="2025"
                      maxLength="4"
                      required
                      id="State"
                      type="text"
                      name="State"
                      onChange={(e) => setMedicalExpiryYear(e.target.value)}
                      className="w-full  focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center my-6">
                  <Image
                    className="w-[330px]"
                    alt="medicare"
                    src={require("../../../../../../public/images/medicare.png")}
                  />
                </div>
                <div className="text-center">
                  <span
                    onClick={() => setMedicare(false)}
                    className="underline cursor-pointer text-uptext font-bold"
                  >
                    I don't have Medicare
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 gap-6 mt-5">
                  <div>
                    <label
                      htmlFor="fname"
                      className="text-uptext font-bold pb-2 block"
                    >
                      IHI number*
                    </label>
                    <input
                      required
                      placeholder="8003601234567890"
                      id="fname"
                      type="text"
                      name="fname"
                      onChange={(e) => setIHINumber(e.target.value)}
                      className={`w-full focus:ring-upurple focus:border-upurple  p-3 border focus:border-2 outline-none border-slate-300 rounded-lg  hover:border-upurple  ${
                        isError
                          ? "focus:ring-red-600 focus:border-red-600 hover:border-red-600"
                          : "focus:ring-upurple focus:border-upurple hover:border-upurple"
                      }`}
                    />
                  </div>
                  {isError && (
                    <p
                      className="text-red-600 font-semibold uppercase text-[13px] -mt-2 mb-3"
                      style={{ letterSpacing: "0.7px" }}
                    >
                      The IHI number format you provided is incorrect. Please
                      verify and re-enter.
                    </p>
                  )}
                </div>

                <div className=" mt-3 border flex items-center gap-4 border-sky-600 bg-sky-100 rounded-lg py-4 pb-6 px-4">
                  <Image
                    src={require("../../../../../../public/images/info-sky.png")}
                    className="w-6 h-6"
                    alt="info-sky"
                  />
                  <div className=" text-[12px] ">
                    <p>For more information, please see:</p>
                    <a
                      className=" underline"
                      href="https://www.servicesaustralia.gov.au/individual-healthcare-identifiers"
                    >
                      https://www.servicesaustralia.gov.au/individual-healthcare-identifiers
                    </a>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <span
                    onClick={() => setMedicare(true)}
                    className="underline cursor-pointer text-uptext font-bold"
                  >
                    I have Medicare
                  </span>
                </div>
              </div>
            )}
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

export default Step5;
