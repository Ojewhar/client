// components/Step3.js
import { FNCButton } from '@/app/components/buttons/FNCButton';
import { SubmitButton } from '@/app/components/buttons/SubmitButton';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import logo from '@/public/images/logo.png';

import {
  addFormOne,
  removeFromOne,
} from '@/app/context/states/formOneCertificate/formOneCertificateSlice';

const Step3 = ({ nextStep, prevStep }) => {
  const [fromDate, setFromDate] = useState('');
  const [fromError, setFromError] = useState(false);
  const [toDate, setToDate] = useState('');
  const [toError, setToError] = useState(false);

  const dispatch = useDispatch();

  // Fetch default value from Redux store
  const defaultValue = useSelector(
    (state) => state.formOneCertificate.alldata[3]
  );

  useEffect(() => {
    if (defaultValue) {
      console.log(defaultValue);
    }
  }, [defaultValue]);

  // set the dates of today on page render
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    if (defaultValue) {
      setFromDate(defaultValue.fromDate);
      setToDate(defaultValue.toDate);
    } else {
      setFromDate(formattedDate);
      setToDate(formattedDate);
    }
  }, []);

  // 'from' date change handle
  const handleFromChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const yesterday = new Date(today);
    const tomorrow = new Date(today);

    yesterday.setDate(today.getDate() - 1);
    tomorrow.setDate(today.getDate() + 1);

    setFromDate(e.target.value);

    if (
      selectedDate.toISOString().slice(0, 10) !==
        today.toISOString().slice(0, 10) &&
      selectedDate.toISOString().slice(0, 10) !==
        yesterday.toISOString().slice(0, 10) &&
      selectedDate.toISOString().slice(0, 10) !==
        tomorrow.toISOString().slice(0, 10)
    ) {
      setFromError(true);
    } else {
      setFromError(false);
    }
  };

  // 'to' date change handle
  const handleToChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const fromDateObj = new Date(fromDate);
    const tomorrow = new Date(fromDateObj);
    tomorrow.setDate(fromDateObj.getDate() + 1);
    const threeDaysLater = new Date(fromDateObj);
    threeDaysLater.setDate(fromDateObj.getDate() + 3);

    setToDate(e.target.value);

    if (
      selectedDate.toISOString().slice(0, 10) !==
        tomorrow.toISOString().slice(0, 10) &&
      (selectedDate < fromDateObj || selectedDate > threeDaysLater)
    ) {
      setToError(true);
    } else {
      setToError(false);
    }
  };

  // Onboard Redux
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fromDate === null ||
      fromDate === '' ||
      toDate === null ||
      toDate === '' ||
      fromError ||
      toError
    ) {
      toast.error('Please fill up the fields by fullfiling the conditions!');
      return;
    }
    dispatch(addFormOne({ fromDate, toDate }));
    nextStep();
  };

  const backButtonFunc = () => {
    // dispatch(removeFromOne());
    prevStep();
  };

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
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold works text-uptexform">
            How long do you need this for?
          </h2>
          <p className="py-3 text-[12px] text-slate-500">
            If suitable, your Partner Doctor might change the end date based on
            what they believe is appropriate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          {/* from */}
          <div className="flex flex-col gap-1">
            <label htmlFor="from" className="font-medium">
              From
            </label>
            <input
              type="date"
              className="w-full p-4 rounded-md text-base border"
              value={fromDate}
              onChange={handleFromChange}
            />
            {fromError && (
              <p className="text-red-500 text-[12px] uppercase px-2 pt-1">
                PLEASE SELECT A DATE THAT IS YESTERDAY, TODAY, OR TOMORROW.
              </p>
            )}
          </div>

          {/* to */}
          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="toDate" className="font-medium">
              To
            </label>
            <input
              type="date"
              id="toDate"
              className="w-full p-4 rounded-md text-base border"
              value={toDate}
              onChange={handleToChange}
            />
            {toError && (
              <p className="text-red-500 text-[12px] uppercase px-2 pt-1">
                IMPORTANT: The amount of days you've selected exceeds the
                average number of days Partner Doctors will typically provide a
                consultation for. Your Doctor may, at their discretion, request
                more information or determine a different outcome to ensure
                proper care.
              </p>
            )}
          </div>

          <div className="md:grid gap-4 grid-cols-2 mt-6">
            <FNCButton
              onClick={backButtonFunc}
              title="Back"
              className="border-2 md:mb-2 text-upurple border-upurple "
            />
            <SubmitButton
              title="Continue"
              className={`border-2 md:mb-2 text-white bg-upurple border-upurple ${
                (!fromError || !toError) && 'cursor-pointer'
              }`}
              disable={fromError || toError}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step3;
