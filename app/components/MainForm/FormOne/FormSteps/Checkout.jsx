import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import React, { useState } from "react";
import SubscriptionImg from "/public/images/medical_certificates-subscription.svg";
import ExpressImg from "/public/images/medical_certificates-express.svg";
import EmailImg from "/public/images/medical_certificates-email.svg";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import logo from "@/public/images/logo.png";
import {
  addFormOne,
  removeFromOne,
} from "@/app/context/states/formOneCertificate/formOneCertificateSlice";

const Checkout = ({ nextStep, prevStep }) => {
  const [certificatePrice, setCertificatePrice] = useState("Subscription");
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };

  // Previous Buttonn Function
  const handleSubmit = () => {
    dispatch(addFormOne({ firstFormCheckoutOption: certificatePrice }));
    nextStep();
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
              Complete the checkout below
            </h2>
            <p className="py-5 text-[12px] text-slate-500">
              You will receive a full refund if your Partner Doctor determines
              that telehealth is not appropriate for your consultation.
            </p>
          </div>

          {/* form data section start */}

          <div className="md:grid grid-cols-3 gap-4">
            <div className="p-4 border-2 rounded shadow-md border-upurple ">
              <label
                htmlFor="Certificate"
                className="cursor-pointer flex justify-between gap-5 flex-col h-[250px]"
              >
                <div>
                  <div className="flex justify-between gap-3  ">
                    <Image src={SubscriptionImg} alt="SubscriptionImg" />
                    <span
                      style={{ borderRadius: "15px 0px 0px 15px" }}
                      className="px-4  flex justify-center items-center uppercase text-[10px] bg-green-800 text-white -mr-4 leading-0 pt-[1px]"
                    >
                      Popuar
                    </span>
                  </div>
                  <div className="mt-6 text-center">
                    <h5 className="font-bold text-[12px] text-upurple">
                      Medical Certificate Doctor Consult Subscription
                    </h5>
                  </div>
                  <div className="py-3 text-center">
                    <p className="text-[#9287b2] text-[10px]">
                      Unlimited express consults with Partner Doctors who can
                      provide outcomes such as: medical certificates. Make as
                      many consult requests as you need. Fair use applies.
                      Cancel anytime.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[12px] text-[#211252] ">
                    $19.95 /month
                  </p>
                  <input
                    id="Certificate"
                    name="Certificate "
                    value="Subscription"
                    checked={certificatePrice === "Subscription"}
                    onChange={(e) => setCertificatePrice(e.target.value)}
                    style={{ accentColor: "#67438f" }}
                    type="radio"
                    className="w-4 h-4"
                  />
                </div>
              </label>
            </div>

            <div className="p-4 border-2 rounded shadow-md border-upurple">
              <label
                htmlFor="Priority"
                className="cursor-pointer flex justify-between gap-5 flex-col h-[250px]"
              >
                <div>
                  <div className="flex justify-between gap-3  ">
                    <Image src={ExpressImg} alt="ExpressImg" />
                  </div>
                  <div className="mt-6 text-center">
                    <h5 className="font-bold text-[12px] text-upurple">
                      Priority Medical Certificate Doctor Consult
                    </h5>
                  </div>
                  <div className="py-3 text-center">
                    <p className="text-[#9287b2] text-[10px]">
                      Your consultation will be prioritised by Partner Doctors
                      to ensure a faster response time. They can provide
                      outcomes including: medical certificates. Any outcomes
                      will be emailed to you, usually within an hour.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[12px] text-[#211252] ">
                    $59.95
                  </p>
                  <input
                    id="Priority"
                    value="Priority"
                    checked={certificatePrice === "Priority"}
                    onChange={(e) => setCertificatePrice(e.target.value)}
                    name="Certificate "
                    style={{ accentColor: "#67438f" }}
                    type="radio"
                    className="w-4 h-4"
                  />
                </div>
              </label>
            </div>

            <div className="p-4 border-2 rounded shadow-md border-upurple">
              <label
                htmlFor="Standard"
                className="cursor-pointer flex justify-between gap-5 flex-col h-[250px]"
              >
                <div>
                  <div className="flex justify-between gap-3 ">
                    <Image src={EmailImg} alt="EmailImg" />
                  </div>
                  <div className="mt-6 text-center">
                    <h5 className="font-bold text-[12px] text-upurple">
                      Complete the checkout below
                    </h5>
                  </div>
                  <div className="py-3 text-center">
                    <p className="text-[#9287b2] text-[10px]">
                      You will receive a full refund if your Partner Doctor
                      determines that telehealth is not appropriate for your
                      consultation.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-[30px]">
                  <p className="font-bold text-[12px] text-[#211252] ">
                    $39.95
                  </p>
                  <input
                    id="Standard"
                    value="Standard"
                    checked={certificatePrice === "Standard"}
                    name="Certificate "
                    onChange={(e) => setCertificatePrice(e.target.value)}
                    style={{ accentColor: "#67438f" }}
                    type="radio"
                    className="w-4 h-4"
                  />
                </div>
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

export default Checkout;
