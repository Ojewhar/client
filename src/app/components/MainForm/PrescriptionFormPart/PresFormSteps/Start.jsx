"use client";
import { FNCButton } from "@/app/components/buttons/FNCButton";
import Image from "next/image";
import React from "react";
import logo from "../../../../../../public/images/logo.png";
import wc from "../../../../../../public/images/wc.png";
import { addTelehealth } from "@/app/redux/states/telehealthConsultation/telehealthConsultationSlice";
import { useDispatch } from "react-redux";
const Start = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTelehealth({ formName: "Telehealth consultation" }));
    nextStep();
  };

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

            <form className="px-2 pt-4 rounded-lg" onSubmit={handleSubmit}>
              {/* part 01 start */}
              <div>
                <h2 className="text-2xl mb-4 font-[500] text-uptext text-center">
                  Request a telehealth consultation in just 2 minutes
                </h2>
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
                      Your Partner Health Practitioner will call you as soon as
                      possible.
                    </p>
                  </div>
                </div>
                <div className="text-[12px] my-12 text-slate-600">
                  <p>
                    Please note that Partner Practitioners are unable to
                    facilitate requests for controlled, addictive or schedule 8
                    medication such as Medication not prescribed include
                    Diazepam, Endone, Lyrica, Stilnox, Zolpidem, Codeine
                    (including Panadeine Forte), Benzodiazepines (including
                    Valium/Diazepam, Temazepam, Oxazepam, Alprazolam), Duromine,
                    Tramadol, Gabapentin, Pregabalin, Seroquel, Steroids,
                    Vyvanse, Modafinil, Dexamphetamine, Ritalin, Concerta,
                    Sofradex ear drops, Roaccutane.
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
