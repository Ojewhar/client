" use client";
import { FNCButton } from "@/app/components/buttons/FNCButton";
import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import wc from "@/public/images/wc.png";
import { useDispatch, useSelector } from "react-redux";
import { addFormOne } from "@/app/context/states/formOneCertificate/formOneCertificateSlice";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Link from "next/link";
const Start = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormOne({ formName: "Medical Certificate" }));
    nextStep();
  };
  // const data = useSelector((state) => state.formOneCertificate.alldata);
  return (
    <>
      <section>
        <div>
          <div className="w-[661px] mx-auto">
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
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            </div>
            <form className="px-2 rounded-lg" onSubmit={handleSubmit}>
              {/* part 01 start */}
              <div>
                <div className="text-center">
                  <h2 className="text-2xl font-semibold works">
                    Request your Medical Certificate Doctor in just 2 minutes
                  </h2>
                  <p className="py-3 text-[11px] text-uptext">
                    {" "}
                    If suitable they can provide you with a number of outcomes
                    including medical certificates.
                  </p>
                </div>
                <div>
                  <Image
                    src={wc}
                    width={615}
                    height={500}
                    alt="wcimage"
                    className="mx-auto"
                  />
                </div>

                <div className="flex justify-between gap-4 items-center">
                  <div className="md:w-1/2">
                    <Link
                      href="/"
                      className="border-2 block font-semibold py-3 bg-black  rounded-lg shadow-sm  text-center  text-white border-black "
                    >
                      Go Home
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <SubmitButton
                      title="Continue"
                      className="border-2 text-white bg-upurple  border-upurple "
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Start;
