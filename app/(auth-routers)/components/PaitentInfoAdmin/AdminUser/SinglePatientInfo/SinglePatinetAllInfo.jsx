import { acceptSinglePatientForm } from "@/app/Services/api-requests/form";
import {
  sendCertificateActiveMail,
  sendCertificateRejectMail,
} from "@/app/Services/api-requests/sendmail";
import Loading from "@/app/components/Loader/Loading";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const SinglePatinetAllInfo = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [loading2, set2Loading] = useState(false);
  const router = useRouter();
  async function handleUpdatePatientFormActive() {
    try {
      setLoading(true);
      const status = "active";
      const res = await acceptSinglePatientForm(data._id, status);
      if (res.data) {
        const formData = {
          toemail: data.firstFormEmail,
          fullname: data.firstFormFName + data.firstFormLName,
        };
        await sendCertificateActiveMail(formData);
      }
      toast.success(res.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  async function handleUpdatePatientFormCancled() {
    try {
      set2Loading(true);
      const status = "canceled";
      const res = await acceptSinglePatientForm(data._id, status);
      if (res.data) {
        const formData = {
          toemail: data.firstFormEmail,
          fullname: data.firstFormFName + data.firstFormLName,
        };
        await sendCertificateRejectMail(formData);
      }
      toast.success(res.data.message);
      set2Loading(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      set2Loading(false);
    }
  }
  console.log(data);
  return (
    <section>
      {data ? (
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8 border m-3">
            <div className="flex justify-between items-center mb-4">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                />
                <h1 className="text-xl font-bold">Patient Information</h1>
                <p className="font-semibold">
                  Payment Status :{" "}
                  {data?.payment?.status === "paid" ? (
                    <span className="text-green-700 font-bold">Paid</span>
                  ) : (
                    <span className="text-red-700 font-bold">Unpaid</span>
                  )}
                </p>
              </div>

              <div className="flex justify-center items-center gap-3">
                <button
                  disabled={data?.status === "active" ? true : false}
                  type="button"
                  onClick={handleUpdatePatientFormActive}
                  className="px-6 py-1.5 hover:bg-opacity-75 transition-all bg-green-600 text-white rounded-lg"
                >
                  {loading ? "Accepting..." : "Accept"}
                </button>
                <button
                  disabled={data?.status === "canceled" ? true : false}
                  onClick={handleUpdatePatientFormCancled}
                  type="button"
                  className="px-6 py-1.5 hover:bg-opacity-75 transition-all bg-red-500 text-white rounded-lg"
                >
                  {loading2 ? "Rejecting..." : "Reject"}
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
          <div className="mt-4 text-center flex justify-center items-center gap-3 mb-3">
            <Link
              href="/dashboard/patientinfo"
              className="px-8 py-2 hover:bg-opacity-75 transition-all bg-uptext text-white rounded-lg"
            >
              Back
            </Link>
            {/* <button className="px-8 py-2 hover:bg-opacity-75 transition-all bg-blue-500 text-white rounded-lg">
              Download PDF
            </button> */}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default SinglePatinetAllInfo;
