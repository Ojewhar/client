import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import { TbFileUpload } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import logo from "/public/images/logo.png";
import {
  addFormOne,
  removeFromOne,
} from "@/app/redux/states/formOneCertificate/formOneCertificateSlice";

const Step5 = ({ nextStep, prevStep }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [firstFormEmail, setFirstFormEmail] = useState("");
  const [firstFormFName, setFirstFormFName] = useState("");
  const [firstFormLName, setFirstFormLName] = useState("");
  const [firstFormMobile, setFirstFormMobile] = useState("");
  const [firstFormStreet, setFirstFormStreet] = useState("");
  const [firstFormSuburb, setFirstFormSuburb] = useState("");
  const [firstFormState, setFirstFormState] = useState("");
  const [firstFormPost, setFirstFormPost] = useState("");
  const [isError, setIsError] = useState(false);

  const thisYear = new Date();
  const dispatch = useDispatch();
  // Format the date and time
  const formattedDOBTime = dateOfBirth.toISOString().split("T")[0];
  const [selectedAttachedFile, setSelectedAttachedFile] = useState(null);

  const handleAttachedFileChange = (event) => {
    setSelectedAttachedFile(event.target.files[0]);
  };
  const handleAttachedRemoveFile = () => {
    setSelectedAttachedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (thisYear.getFullYear() - dateOfBirth.getFullYear() < 18) {
      return toast.error("Please fix date of birth");
    }
    dispatch(
      addFormOne({
        firstFormEmail: firstFormEmail,
        firstFormFName: firstFormFName,
        firstFormLName: firstFormLName,
        dateOfBirth: formattedDOBTime,
        firstFormMobile: firstFormMobile,
        firstFormStreet: firstFormStreet,
        firstFormSuburb: firstFormSuburb,
        firstFormState: firstFormState,
        firstFormPost: firstFormPost,
      })
    );

    nextStep();
    // let attachedfileData = null;
    // if (selectedAttachedFile) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(selectedAttachedFile);
    //   reader.onload = () => {
    //     attachedfileData = reader.result;

    //     dispatch(
    //       addFormOne({
    //         firstFormEmail: firstFormEmail,
    //         firstFormFName: firstFormFName,
    //         firstFormLName: firstFormLName,
    //         dateOfBirth: formattedDOBTime,
    //         firstFormMobile: firstFormMobile,
    //         firstFormStreet: firstFormStreet,
    //         firstFormSuburb: firstFormSuburb,
    //         firstFormState: firstFormState,
    //         firstFormPost: firstFormPost,
    //         attachID: attachedfileData,
    //       })
    //     );
    //     nextStep();
    //   };
    // } else {
    //   dispatch(
    //     addFormOne({
    //       firstFormEmail: firstFormEmail,
    //       firstFormFName: firstFormFName,
    //       firstFormLName: firstFormLName,
    //       dateOfBirth: formattedDOBTime,
    //       firstFormMobile: firstFormMobile,
    //       firstFormStreet: firstFormStreet,
    //       firstFormSuburb: firstFormSuburb,
    //       firstFormState: firstFormState,
    //       firstFormPost: firstFormPost,
    //       attachID: "You dont upload your Attached ID ",
    //     })
    //   );
    //   nextStep();
    // }
  };
  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
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
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl mt-5 font-semibold works text-uptexform">
              Your information
            </h2>
            <p className="py-5 text-[12px] text-slate-500">
              This information is needed to confirm your identity and to be
              included on any documents your Partner Doctor provides.
            </p>
          </div>

          {/* form data section start */}

          <div className="">
            <div>
              <label htmlFor="email" className="text-uptext font-bold">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                name="email"
                onChange={(e) => setFirstFormEmail(e.target.value)}
                className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded  hover:border-upurple"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-5">
              <div>
                <label htmlFor="fname" className="text-uptext font-bold">
                  First name(s)
                </label>
                <input
                  required
                  id="fname"
                  type="text"
                  name="fname"
                  onChange={(e) => setFirstFormFName(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded  hover:border-upurple"
                />
              </div>

              <div>
                <label htmlFor="lname" className="text-uptext font-bold">
                  Last name
                </label>
                <input
                  required
                  id="lname"
                  type="text"
                  name="lname"
                  onChange={(e) => setFirstFormLName(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
                />
              </div>
            </div>
            <small className="-mt-2 text-[10px]">
              Please enter the name of the person who requires leave.
            </small>

            <div className="mt-6 ">
              <label className="text-uptext font-bold">Date Of Birth</label>
              <br></br>
              <div className="relative w-full block border focus:border-2 outline-none rounded focus:ring-upurple focus:border-upurple  border-slate-300">
                <DatePicker
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  id="formdatepicker"
                  placeholderText="mm/dd/yyyy"
                  className=" p-3 md:w-[660px] w-full rounded"
                  onChange={(date) => setDateOfBirth(date)}
                  selected={dateOfBirth}
                  required
                />
                <label
                  htmlFor="formdatepicker"
                  className="absolute top-1/3 right-2 -mt-2 "
                >
                  <svg
                    className="w-[36px] fill-gray-500 cursor-pointer h-[36px] p-1.5 hover:bg-sky-50 rounded-full"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CalendarIcon"
                  >
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                  </svg>
                </label>
              </div>
              {thisYear.getFullYear() - dateOfBirth.getFullYear() < 18 ? (
                <p className=" text-[12px] uppercase text-red-600 tracking-wider">
                  YOU MUST BE 18 YEARS OLD TO USE THIS SERVICE
                </p>
              ) : (
                <small></small>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="mobile" className="text-uptext font-bold">
                Mobile number
              </label>
              <input
                required
                id="mobile"
                placeholder="0412345678"
                onChange={(e) => setFirstFormMobile(e.target.value)}
                type="tel"
                name="mobile"
                className="w-full focus:ring-upurple focus:border-upurple p-3 border  focus:border-2 outline-none border-slate-300 rounded  hover:border-upurple"
              />
              <small className="-mt-2 text-[10px]">
                We&apos;ll send any documents via SMS to this number in addition
                to email.
              </small>
            </div>

            <div className="mt-6">
              <label htmlFor="street" className="text-uptext font-bold">
                Street address
              </label>
              <input
                required
                id="street"
                type="text"
                name="street"
                onChange={(e) => setFirstFormStreet(e.target.value)}
                className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
              />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-5">
              <div>
                <label htmlFor="Suburb" className="text-uptext font-bold">
                  Suburb
                </label>
                <input
                  required
                  id="Suburb"
                  type="text"
                  name="Suburb"
                  onChange={(e) => setFirstFormSuburb(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
                />
              </div>

              <div>
                <label htmlFor="State" className="text-uptext font-bold">
                  State
                </label>
                <input
                  required
                  id="State"
                  type="text"
                  name="State"
                  onChange={(e) => setFirstFormState(e.target.value)}
                  className="w-full  focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
                />
              </div>

              <div>
                <label htmlFor="Postalcode" className="text-uptext font-bold">
                  Postalcode
                </label>
                <input
                  required
                  id="Postalcode"
                  type="text"
                  name="Postalcode"
                  onChange={(e) => setFirstFormPost(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
                />
              </div>
            </div>

            {/* attach id */}
            {/* <div>
              <p htmlFor="upload" className="font-bold text-uptext pt-4 pb-2">
                Attach ID
              </p>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="attachedfile"
                  className="flex flex-col items-center justify-center w-full h-[180px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                >
                  {selectedAttachedFile ? (
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
                        {selectedAttachedFile.name}{" "}
                        <IoMdCloseCircle
                          className="ml-2 inline-block opacity-70 text-xl"
                          onClick={handleAttachedRemoveFile}
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
                        Drag &apos;n&apos; drop some files here, or click to
                        select files
                      </p>
                      <p
                        htmlFor="attachedfile"
                        className="bg-upurple py-2 px-4 rounded text-white font-semibold hover:opacity-90"
                      >
                        UPLOAD
                      </p>
                    </div>
                  )}
                  <input
                    required
                    name="attachedfile"
                    id="attachedfile"
                    type="file"
                    className="hidden"
                    onChange={handleAttachedFileChange}
                    multiple
                  />
                </label>
              </div>
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
