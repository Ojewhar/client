import React from "react";
import img3 from "@/public/images/MedCert.png";
import { LinkButton } from "@/app/components/buttons/LinkButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { handleCheckoutStripe } from "@/app/Services/api-requests/stripe";

const ConsultationForm = ({ item }) => {
  const router = useRouter();

  async function handleChangeRoute() {
    if (item.status === "active") {
      try {
        const res = await handleCheckoutStripe(item._id);
        if (res.data) {
          window.location.replace(res.data.url);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

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
      <button
        type="button"
        onClick={handleChangeRoute}
        className="bg-upurple px-5 py-2 text-center hover:bg-opacity-80 transition-all opacity-90 text-white rounded"
      >
        {item.status === "active"
          ? "This certificate is actived"
          : item.status === "pending"
          ? "This certificate is pending"
          : "This certificated is canceled"}
      </button>
    </div>
  );
};

export default ConsultationForm;
