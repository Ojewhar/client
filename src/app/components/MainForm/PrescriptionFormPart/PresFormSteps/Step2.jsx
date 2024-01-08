// components/Step1.js
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import { setOnboard } from "@/app/redux/states/onboardSlice/onboardSlice";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../../../public/images/logo.png";
import {
  addTelehealth,
  removeTelehealth,
} from "@/app/redux/states/telehealthConsultation/telehealthConsultationSlice";
import { TbFileUpload } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import uploadimg from "/public/uploadimg.png";
const Step2 = ({ nextStep, prevStep }) => {
  const [detailSymptoms, setDetailSymptoms] = useState("");
  const [isError, setIsError] = useState(false);

  // File upload and remove
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeTelehealth());
    prevStep();
  };

  // Continue Button Function
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    let fileData = null;

    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        fileData = reader.result;

        dispatch(
          addTelehealth({
            detailSymptoms: detailSymptoms,
            optionalFileFirstForm: fileData,
          })
        );
      };
      nextStep();
    } else {
      dispatch(
        addTelehealth({
          detailSymptoms: detailSymptoms,
          optionalFileFirstForm: "You dont upload any Optional file ",
        })
      );
      nextStep();
    }
  };

  const data = useSelector((state) => state.telehealthConsultation.allvalues);
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
              Tell your Partner Practitioner more.
            </h2>
          </div>

          {/* form data section start */}

          <div className="">
            <div>
              <label htmlFor="outcome" className="font-bold">
                Please specify the health concern or topic you&apos;re seeking
                advice or information about today.
              </label>
              <textarea
                id="outcome"
                name="outcome"
                required="requird"
                onChange={(e) => setDetailSymptoms(e.target.value)}
                className=" px-5 py-2 mt-4 w-full border rounded border-slate-300 hover:border-upurple focus:border-upurple"
                cols="20"
                rows="3"
              ></textarea>
            </div>

            <div>
              <p className="font-bold pt-4 pb-2">
                Optional file upload (Discharge papers, Doctor&apos;s letter,
                etc)
              </p>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzonefile"
                  className="flex flex-col items-center justify-center w-full h-[160px]  border hover:border-uptextdark border-slate-300 rounded-lg cursor-pointer "
                >
                  {selectedFile ? (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {/* <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg> */}
                      <Image
                        src={uploadimg}
                        alt="uploadimg"
                        className="p-1.5"
                      />
                      <p className="mb-2 border border-slate-300 rounded-full p-1 text-sm text-gray-500 dark:text-gray-400">
                        <TbFileUpload className="inline-block mr-2 text-2xl" />
                        {selectedFile.name}{" "}
                        <IoMdCloseCircle
                          className="ml-2 inline-block opacity-70 text-xl"
                          onClick={handleRemoveFile}
                        />
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {/* <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />{" "}
                      </svg> */}
                      <Image
                        src={uploadimg}
                        alt="uploadimg"
                        className="p-1.5"
                      />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Drag &apos;n&apos;drop some files here, or click to
                        select files
                      </p>
                      <p
                        htmlFor="dropzonefile"
                        className=" bg-upbutton transition box-shadow py-[7px] px-4 rounded text-white  hover:bg-uptextdark"
                      >
                        UPLOAD
                      </p>
                    </div>
                  )}
                  <input
                    name="dropzonefile"
                    id="dropzonefile"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
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
