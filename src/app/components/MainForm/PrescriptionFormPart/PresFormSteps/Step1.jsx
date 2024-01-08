"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import logo from "../../../../../../public/images/logo.png";
import {
  addTelehealth,
  removeTelehealth,
} from "@/app/redux/states/telehealthConsultation/telehealthConsultationSlice";

const Step1 = ({ nextStep, prevStep }) => {
  const [consaltparttwo, setConslatparttwo] = useState("Advice / Information");
  // Update the selected value when a radio button is clicked

  // Update the selected value when a radio button is clicked
  const handleLeaveChange = (event) => {
    setConslatparttwo(event.target.value);
  };

  // Value add on state
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTelehealth({ consaltparttwo: consaltparttwo }));
    nextStep();
  };

  // Back Button Function
  const backButtonFunc = () => {
    //dispatch(removeTelehealth());
    prevStep();
  };

  const data = useSelector((state) => state.telehealthConsultation.allvalues);
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
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-uptexform">
              What do you wish to speak to your Partner Practitioner about
              today?
            </h2>
            <p className="py-3 text-[12px] text-uptexform opacity-60">
              Please note that for every consultation you will only be able to
              discuss a single issue.
            </p>
          </div>

          <div>
            <div className="mb-6">
              <div className="flex items-center mb-5">
                <input
                  id="advice"
                  type="radio"
                  value="Advice / Information"
                  name="advice"
                  checked={
                    consaltparttwo === "Advice / Information" ? true : false
                  }
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 fill-upurple outline-none "
                />
                <label
                  htmlFor="advice"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Advice / Information
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="mcert"
                  type="radio"
                  value="Medical Certificate"
                  name="mcert"
                  checked={
                    consaltparttwo === "Medical Certificate" ? true : false
                  }
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="mcert"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Medical Certificate
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="Specialist"
                  type="radio"
                  value="Specialist Referral"
                  name="Specialist"
                  checked={
                    consaltparttwo === "Specialist Referral" ? true : false
                  }
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="Specialist"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Specialist Referral
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="PrescriptionMedication"
                  type="radio"
                  value="Prescription - Medication you have taken before"
                  name="PrescriptionMedication"
                  checked={
                    consaltparttwo ===
                    "Prescription - Medication you have taken before"
                      ? true
                      : false
                  }
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="PrescriptionMedication"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Prescription - Medication you have taken before
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="PrescriptionMedicationNot"
                  type="radio"
                  value="Prescription - Medication you have NOT taken before"
                  name="PrescriptionMedicationNot"
                  checked={
                    consaltparttwo ===
                    "Prescription - Medication you have NOT taken before"
                      ? true
                      : false
                  }
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="PrescriptionMedicationNot"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Prescription - Medication you have NOT taken before
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="WeightLoss"
                  type="radio"
                  value="WeightLoss"
                  name="WeightLoss"
                  checked={consaltparttwo === "Weight Loss" ? true : false}
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="WeightLoss"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Weight Loss
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="PlantMedicine"
                  type="radio"
                  value="Plant Medicine"
                  name="PlantMedicine"
                  checked={consaltparttwo === "Plant Medicine" ? true : false}
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="PlantMedicine"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Plant Medicine
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="BloodPathologyTest"
                  type="radio"
                  value="Blood / Pathology Test"
                  name="BloodPathologyTest"
                  checked={
                    consaltparttwo === "Blood / Pathology Test" ? true : false
                  }
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="BloodPathologyTest"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Blood / Pathology Test
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="ResultsDiscussionFollow"
                  type="radio"
                  value="Results Discussion / Follow-up"
                  name="ResultsDiscussionFollow-up"
                  checked={
                    consaltparttwo === "Results Discussion / Follow-up"
                      ? true
                      : false
                  }
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="ResultsDiscussionFollow"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Results Discussion / Follow-up
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="ResultsDiscussionFollow"
                  type="radio"
                  value="Other"
                  name="Other"
                  checked={consaltparttwo === "Other" ? true : false}
                  onChange={handleLeaveChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="Other"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Other
                </label>
              </div>
              {/* section footer */}
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
