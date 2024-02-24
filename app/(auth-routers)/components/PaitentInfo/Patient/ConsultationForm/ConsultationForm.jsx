// ConsultationForm.jsx
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { handleCheckoutStripe } from "@/app/Services/api-requests/stripe";
import { useDispatch } from "react-redux";
import { setCertificateUser } from "@/app/context/slices/downloadCertificateSlice";
import { useRouter } from "next/navigation";

const ConsultationForm = ({ item }) => {
  const singleData = item;
  const handleChangeRoute = async () => {
    if (item.status === "active") {
      try {
        const res = await handleCheckoutStripe(singleData._id);
        if (res.data) {
          window.location.replace(res.data.url);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const handleDownload = () => {
    dispatch(setCertificateUser(item));
    router.push("/dashboard/patient/download-certificate");
  };
  return (
    <div className="p-5 flex shadow-md justify-between flex-col min-h-[220px] bg-white border border-slate-300 rounded">
      <h3 className="font-semibold text-xl text-center text-ublack">
        Medical Certificate
      </h3>
      <div className="py-6">
        <p className=" text-sm text-ublack opacity-70">
          Request a consultation with a Partner Doctor who can provide outcomes
          including: medical certificates, sick notes, doctors notes.
        </p>
      </div>
      {item?.payment && item?.payment.status === "paid" ? (
        <button
          type="button"
          onClick={handleDownload}
          className=" bg-indigo-700 px-5 py-2 text-center hover:bg-opacity-80 transition-all opacity-90 text-white rounded"
        >
          Download Certificate
        </button>
      ) : (
        <button
          type="button"
          onClick={handleChangeRoute}
          className={
            item.status === "active"
              ? "bg-green-700 px-5 py-2 text-center hover:bg-opacity-80 transition-all opacity-90 text-white rounded"
              : item.status === "pending"
              ? "bg-yellow-400 px-5 py-2 text-center hover:bg-opacity-80 transition-all opacity-90 text-black rounded"
              : "This certificated is canceled bg-red-600 cursor-not-allowed px-5 py-2 text-center hover:bg-opacity-80 transition-all opacity-90 text-white rounded"
          }
        >
          {item.status === "active"
            ? "Pay Now"
            : item.status === "pending"
            ? "This certificate is pending"
            : "This certificated is canceled"}
        </button>
      )}
    </div>
  );
};

export default ConsultationForm;
