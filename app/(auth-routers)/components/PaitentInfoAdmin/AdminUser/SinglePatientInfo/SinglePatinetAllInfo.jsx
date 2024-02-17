import { acceptSinglePatientForm } from "@/app/Services/api-requests/form";
import Loading from "@/app/components/Loader/Loading";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SinglePatinetAllInfo = ({ data }) => {
  async function handleUpdatePatientFormActive() {
    try {
      const status = "active";
      const res = await acceptSinglePatientForm(data._id, status);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleUpdatePatientFormCancled() {
    try {
      const status = "canceled";
      const res = await acceptSinglePatientForm(data._id, status);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      {data ? (
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                />
                <h1 className="text-xl font-bold">Patient Information</h1>
              </div>

              <div className="flex justify-center items-center gap-3">
                <button
                  type="button"
                  onClick={handleUpdatePatientFormActive}
                  className="px-8 py-2 hover:bg-opacity-75 transition-all bg-green-600 text-white rounded"
                >
                  Accept
                </button>
                <button
                  onClick={handleUpdatePatientFormCancled}
                  type="button"
                  className="px-8 py-2 hover:bg-opacity-75 transition-all bg-red-500 text-white rounded"
                >
                  Reject
                </button>
              </div>
            </div>
            <hr className="my-4" />
            <div className="space-y-2">
              <div className="flex">
                <span className="font-bold mr-2">First Name:</span>
                <span>{data?.firstFormFName}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Last Name:</span>
                <span>{data?.firstFormLName}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Email:</span>
                <span>{data?.firstFormEmail}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Mobile:</span>
                <span>{data?.firstFormMobile}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Address:</span>
                <span>{`${data?.firstFormStreet}, ${data?.firstFormSuburb}, ${data?.firstFormState}, ${data?.firstFormPost}`}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Date of Birth:</span>
                <span>{data?.dateOfBirth}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Form Name:</span>
                <span>{data?.formName}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">From Date:</span>
                <span>{data?.fromDate}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">To Date:</span>
                <span>{data?.toDate}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Reason for Certificate:</span>
                <span>{data?.requireAcertificate}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">
                  Switchability for Certificate:
                </span>
                <span>{data?.switablityForCirtificate}</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Other Info:</span>
                <span>{data?.ifOther}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center flex justify-center items-center gap-3">
            <Link
              href="/dashboard/patientinfo"
              className="px-8 py-2 hover:bg-opacity-75 transition-all bg-uptext text-white rounded"
            >
              Back
            </Link>
            <button className="px-8 py-2 hover:bg-opacity-75 transition-all bg-blue-500 text-white rounded">
              Download PDF
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default SinglePatinetAllInfo;
