"use client";
import { useEffect } from "react";
import Link from "next/link";
import { handlePaymentSuccess } from "@/app/Services/api-requests/stripe";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const sessionId = useParams().id;
  const router = useSearchParams();
  const paymentStatus = router.get("payment_status");
  console.log(sessionId, paymentStatus);
  useEffect(() => {
    async function handleSuccess() {
      try {
        const res = await handlePaymentSuccess(sessionId, paymentStatus);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    if (paymentStatus === "success") {
      handleSuccess();
    }
  }, [sessionId, paymentStatus]);

  return (
    <section>
      {paymentStatus === "success" ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-500 ">
              Thank you! Your medical certificate payment was successful.
            </h3>
            <div className="mt-5">
              <Link
                href="/dashboard/patient"
                className="bg-black font-semibold px-5 py-2 rounded-lg text-white "
              >
                Back To Dashboard
              </Link>
            </div>
          </div>
        </div>
      ) : paymentStatus === "failed" ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-red-500 ">
              Sorry ! Your medical certificate payment was not successfull.
            </h3>
            <div className="mt-5">
              <Link
                href="/dashboard/patient"
                className="bg-black font-semibold px-5 py-2 rounded-lg text-white "
              >
                Back To Dashboard
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-pink-500 ">
              Opps ! Your are not allowed for this page .
            </h3>
            <div className="mt-5">
              <Link
                href="/dashboard/patient"
                className="bg-black font-semibold px-5 py-2 rounded-lg text-white "
              >
                Back To Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
