" use client";
import { FNCButton } from "@/app/components/buttons/FNCButton";
import Image from "next/image";
import React from "react";
import logo from "../../../../../../public/images/logo.png";
import wc from "../../../../../../public/images/wc.png";
import { useDispatch, useSelector } from "react-redux";
import { addFormOne } from "@/app/redux/states/formOneCertificate/formOneCertificateSlice";
const Start = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormOne({ formName: "Medical Certificate" }));
    nextStep();
  };
  const data = useSelector((state) => state.formOneCertificate.alldata);
  console.log(data);
  return (
    <>
      <section>
        <div>
          <div className="w-[661px] mx-auto">
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
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
              <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            </div>
            <form className="px-2 pt-5 rounded-lg" onSubmit={handleSubmit}>
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

                  <div className="text-center my-4 text-slate-500">
                    <p className="text-[12px] leading-[1.1em]">
                      {" "}
                      Registered Australian doctors
                    </p>
                    <p className="text-[12px] leading-[1.1em]">
                      {" "}
                      Used by 100,000 Australians
                    </p>
                    <p className="text-[12px] leading-[1.1em]">
                      {" "}
                      No appointment or travel time needed
                    </p>
                  </div>
                </div>
                <div className="text-[12px] my-12 text-slate-600">
                  <p>
                    I confirm that I am not seriously unwell and I do NOT have
                    any of the following symptoms: chest pain, shortness of
                    breath, unable to swallow fluids or saliva, weakness or
                    numbness down one side, slurred speech. I confirm I do not
                    think I need to see a GP to get a medical certificate. If
                    symptoms are related to a COVID vaccine, I will consult my
                    GP or the medical professional who provided the
                    immunisation. I confirm that this is not a replacement for a
                    doctor&apos;s visit. I have read, understood and agree with
                    the information in the terms of service and consent to the
                    use of information in accordance with the privacy policy.
                  </p>
                </div>
                <div className="flex items-center py-4 gap-3">
                  <FNCButton
                    onClick={prevStep}
                    title="Continue"
                    className="border-2 text-white bg-upurple  border-upurple "
                  >
                    Previous
                  </FNCButton>
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
