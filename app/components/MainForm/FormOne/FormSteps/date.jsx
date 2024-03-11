// components/Step1.js
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/public/images/logo.png";
import DatePicker from "react-datepicker";

import { BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";
import {
  addFormOne,
  removeFromOne,
} from "@/app/context/states/formOneCertificate/formOneCertificateSlice";

const date = ({ nextStep, prevStep }) => {
  const [fromDate, setFormDate] = useState(new Date());
  const [toDate, settoDate] = useState(new Date());
  const [isError, setIsError] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const dispatch = useDispatch();

  // customize date
  const filterPastDates = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
    return date >= today;
  };

  const filterUnavailableDates = (date) => {
    return fromDate === true || fromDate !== null ? date >= fromDate : true;
  };
  const formattedFromDate = fromDate?.toString().split("T")[0];
  const formattedToDate = toDate?.toString().split("T")[0];

  const isAvaiableFormDate = (date) => {
    setFormDate(date);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const selectedDateTime = date?.getTime();
    const currentDateTime = currentDate?.getTime();

    const timeDifference =
      (selectedDateTime - currentDateTime) / (24 * 60 * 60 * 1000); // Convert milliseconds to days

    if (timeDifference > 3) {
      setIsFormError(true);
    } else {
      setIsFormError(false);
    }
  };

  const isAvaiableToDate = (date) => {
    settoDate(date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const selectedDateTime = date?.getTime();
    const currentDateTime = currentDate?.getTime();

    const timeDifference =
      (selectedDateTime - currentDateTime) / (24 * 60 * 60 * 1000); // Convert milliseconds to days

    if (timeDifference > 2) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  // if fill of the hide input its redirect to homepage and lock that ip
  const handleFillChange = () => {
    window.location.replace("/");
  };
  // Onboard Redux
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (fromDate === null || fromDate === "") &&
      (toDate === null || toDate === "")
    ) {
      toast.error("Plese use date then try");
      return;
    }
    dispatch(
      addFormOne({ fromDate: formattedFromDate, toDate: formattedToDate })
    );
    nextStep();
  };

  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };

  // const data = useSelector((state) => state.formOneCertificate.alldata);

  // console.log(data);

  return (
    <section>
      <Toaster />
      <div className="md:w-[661px] mx-auto">
        <div>
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
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className=" w-1/6 h-1 bg-orange-500 rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold works text-uptexform">
              How long do you need this for?
            </h2>
            <p className="py-3 text-[12px] text-slate-500">
              If suitable, your Partner Doctor might change the end date based
              on what they believe is appropriate.
            </p>
          </div>

          {/* form data section start */}

          <div className="grid grid-cols-1">
            <div className="col-span-1 relative w-full">
              <label>Form</label>
              <br></br>

              <DatePicker
                dateFormat="MMM d yyyy"
                showMonthDropdown
                showYearDropdown
                value={fromDate}
                filterDate={filterPastDates}
                placeholderText="MM/DD/YYYY"
                className="md:w-[660px] block p-3 border rounded border-upurple"
                selected={fromDate}
                onChange={(date) => isAvaiableFormDate(date)}
                id="formdatepicker"
              />

              <label
                htmlFor="formdatepicker"
                className="absolute top-1/2 right-2 -mt-1"
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
            {isFormError && (
              <div className="mt-1">
                <p className="uppercase text-red-600 text-[12px] tracking-[0.08333em]">
                  “Sorry, medical certificates cannot be provided for more than
                  three days”
                </p>
              </div>
            )}

            <div className="col-span-1 mt-5 relative">
              <label>To</label>
              <br></br>
              <DatePicker
                dateFormat="MMM d yyyy"
                showMonthDropdown
                showYearDropdown
                value={toDate}
                filterDate={filterUnavailableDates}
                placeholderText="MM/DD/YYYY"
                className="md:w-[660px] block p-3 border rounded border-upurple"
                selected={toDate}
                onChange={(date) => isAvaiableToDate(date)}
                id="todatepicker"
              />

              <label
                htmlFor="todatepicker"
                className="absolute top-1/2 right-2 -mt-1"
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
                isError || isFormError
                  ? "border-2 md:mb-2 text-white bg-upurple border-upurple cursor-pointer"
                  : "border-2 md:mb-2 text-white bg-upurple border-upurple"
              }
              disable={isError || isFormError ? true : false}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default date;

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
