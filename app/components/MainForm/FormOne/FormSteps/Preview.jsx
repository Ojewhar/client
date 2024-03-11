import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import logo from "/public/images/logo.png";
import { useRouter } from "next/navigation";
import { removeFromOne } from "@/app/context/states/formOneCertificate/formOneCertificateSlice";
import { createFormOne } from "@/app/Services/api-requests/form";

const Preview = ({ prevStep, nextStep }) => {
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formOneCertificate.alldata);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = {
        formName: data[0].formName,
        agree: data[1].agree,
        requireAcertificate: data[2].requireAcertificate,
        fromDate: data[3].fromDate,
        toDate: data[3].toDate,
        dateOfBirth: data[4].dateOfBirth,
        firstFormEmail: data[4].firstFormEmail,
        firstFormPassword: data[4].firstFormPassword,
        firstFormFName: data[4].firstFormFName,
        firstFormLName: data[4].firstFormLName,
        firstFormMobile: data[4].firstFormMobile,
        firstFormPost: data[4].firstFormPost,
        firstFormState: data[4].firstFormState,
        firstFormStreet: data[4].firstFormStreet,
        firstFormSuburb: data[4].firstFormSuburb,
        switablityForCirtificate: data[5].switablityForCirtificate,
        ifOther: data[5].ifOther,
      };
      const response = await createFormOne(formData);
      toast.success(response?.data.message);
      if (response.data) {
        setTimeout(() => {
          router.push("/form/thank-you");
        }, 500);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeFromOne());
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
              height={200}
              alt="logo"
              src={logo}
              className="mx-auto mt-4"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl mt-5 font-semibold works text-uptexform">
              Review your details!
            </h2>
            <p className="py-5 text-[12px] text-slate-500">
              Please double check your details below. This will be included on
              any documents provided by your Partner Doctor and{" "}
              <strong>cannot be edited after submission.</strong>
            </p>
          </div>

          {/* form data section start */}

          <div className=" bg-ulightorange mt-8 p-6 shadow rounded-md ">
            <div>
              <h6 className="font-bold text-white">Full name</h6>
              <p className="text-white">
                {data.length > 5
                  ? `${data[4].firstFormFName} ${data[4].firstFormLName} `
                  : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-white">Date of birth</h6>
              <p className="text-white">
                {data.length > 5 ? data[4].dateOfBirth : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-white">Email address</h6>
              <p className="text-white">
                {data.length > 5 ? data[4].firstFormEmail : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-white">Mobile number</h6>
              <p className="text-white">
                {data.length > 5 ? data[4].firstFormMobile : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-white">Type of leave</h6>
              <p className="text-white uppercase">
                {data.length > 5 ? data[5].switablityForCirtificate : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-white">Date from</h6>
              <p className="text-white">
                {data.length > 5 ? data[3].fromDate : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-white">Date to</h6>
              <p className="text-white">
                {data.length > 5 ? data[3].toDate : ""}
              </p>
            </div>
          </div>

          {/* form data section start */}

          <div className="md:grid gap-4 grid-cols-2 mt-6">
            <FNCButton
              onClick={backButtonFunc}
              title="Back"
              className="border-2 md:mb-2 text-upurple border-upurple "
            />
            {loading ? (
              <button
                className="w-full font-semibold my-3 block py-3  rounded-lg shadow-sm border-2 md:mb-2 text-white bg-upurple opacity-70 border-upurple cursor-not-allowed "
                disabled={true}
              >
                Submiting.....
              </button>
            ) : (
              <button
                type="submit"
                className="w-full font-semibold my-3 block py-3  rounded-lg shadow-sm border-2 md:mb-2 text-white bg-upurple border-upurple cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Preview;
