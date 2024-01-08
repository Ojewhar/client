import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import { BsInfoCircle } from "react-icons/bs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IoMdCloseCircle } from "react-icons/io";
import { TbFileUpload } from "react-icons/tb";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import logo from "../../../../../../public/images/logo.png";
import {
  addFormOne,
  removeFromOne,
} from "@/app/redux/states/formOneCertificate/formOneCertificateSlice";

const Step4 = ({ nextStep, prevStep }) => {
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
    dispatch(removeFromOne());
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
          addFormOne({
            detailSymptoms: detailSymptoms,
            optionalFileFirstForm: fileData,
          })
        );
      };
      nextStep();
    } else {
      dispatch(
        addFormOne({
          detailSymptoms: detailSymptoms,
          optionalFileFirstForm: "You dont upload any Optional file ",
        })
      );
      nextStep();
    }
  };
  const data = useSelector((state) => state.formOneCertificate.alldata);

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
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold works text-uptexform">
              Tell your Partner Doctor more.
            </h2>
            <p className="py-3 text-[12px] text-slate-500">
              Please provide them as much detail as possible.
            </p>
          </div>

          {/* form data section start */}

          <div className="">
            <div>
              <label htmlFor="outcome" className="font-bold">
                Please describe the timeline of your symptoms, the details of
                your symptoms, and if you would like anything specifically
                included on any documents you might receive as part of your
                outcome.
              </label>
              <textarea
                id="outcome"
                name="outcome"
                required="requird"
                onChange={(e) => setDetailSymptoms(e.target.value)}
                className=" px-5 py-2 mt-4 w-full border rounded border-slate-300 hover:border-upurple focus:border-upurple"
                cols="20"
                rows="6"
              ></textarea>
              <small className="-mt-2 text-[11px]">20 words minimum</small>
            </div>

            <div>
              <p className="font-bold pt-4 pb-2">
                Optional file upload (Discharge papers, Doctor&apos;s letter,
                etc)
              </p>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzonefile"
                  className="flex flex-col items-center justify-center w-full h-[180px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                >
                  {selectedFile ? (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
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
                      </svg>
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
                      <svg
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
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Drag &apos;n&apos;drop some files here, or click to
                        select files
                      </p>
                      <p
                        htmlFor="dropzonefile"
                        className="bg-purple-700 py-2 px-4 rounded text-white font-semibold hover:bg-purple-800"
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

export default Step4;
