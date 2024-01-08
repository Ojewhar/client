import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import {
  addFormOne,
  removeFromOne,
} from "@/app/redux/states/formOneCertificate/formOneCertificateSlice";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import logo from "/public/images/logo.png";
import { BASE_URL } from "@/app/admin/url-manager/url-manager";
import { createFormOne } from "@/app/admin/api-requests/form";
import { addPersonInfo } from "@/app/admin/api-requests/auth";
import { useRouter } from "next/navigation";

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
        leave: data[1].leave,
        seeking: data[1].seeking,
        leavereason: data[2].leavereason,
        fromDate: data[3].fromDate,
        toDate: data[3].toDate,
        detailSymptoms: data[4].detailSymptoms,
        //optionalFileFirstForm: data[3].optionalFileFirstForm,
        dateOfBirth: data[5].dateOfBirth,
        firstFormEmail: data[5].firstFormEmail,
        firstFormFName: data[5].firstFormFName,
        firstFormLName: data[5].firstFormLName,
        firstFormMobile: data[5].firstFormMobile,
        firstFormPost: data[5].firstFormPost,
        firstFormState: data[5].firstFormState,
        firstFormStreet: data[5].firstFormStreet,
        firstFormSuburb: data[5].firstFormSuburb,
        firstFormCheckoutOption: data[6].firstFormCheckoutOption,
      };

      const response = await createFormOne(formData);

      if (response.data) {
        const parsonData = {
          name:
            response.data.formOne.firstFormFName +
            " " +
            response.data.formOne.firstFormLName,
          email: response.data.formOne.firstFormEmail,
          mobile: response.data.formOne.firstFormMobile,
          formInfo: {
            formId: response.data.formOne._id,
            formName: response.data.formOne.formName,
          },
        };

        const res = await addPersonInfo(parsonData);
      }

      toast.success(response.data.message);
      setTimeout(() => {
        router.replace("/");
      }, [1000]);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
      setLoading(false);
    }
    //nextStep();
  };

  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };

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
              Review your details!
            </h2>
            <p className="py-5 text-[12px] text-slate-500">
              Please double check your details below. This will be included on
              any documents provided by your Partner Doctor and{" "}
              <strong>cannot be edited after submission.</strong>
            </p>
          </div>

          {/* form data section start */}

          <div className=" bg-ulightorange mt-8 p-4 rounded-md ">
            <div>
              <h6 className="font-bold text-[#211252]">Full name</h6>
              <p className="text-[#211252]">
                {data.length > 5
                  ? `${data[5].firstFormFName} ${data[5].firstFormLName} `
                  : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-[#211252]">Date of birth</h6>
              <p className="text-[#211252]">
                {data.length > 5 ? data[5].dateOfBirth : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-[#211252]">Email address</h6>
              <p className="text-[#211252]">
                {data.length > 5 ? data[5].firstFormEmail : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-[#211252]">Mobile number</h6>
              <p className="text-[#211252]">
                {data.length > 5 ? data[5].firstFormMobile : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-[#211252]">Date from</h6>
              <p className="text-[#211252]">
                {data.length > 5 ? data[3].fromDate : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-[#211252]">Type of leave</h6>
              <p className="text-[#211252] uppercase">
                {data.length > 5 ? data[1].seeking : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-[#211252]">Leave from</h6>
              <p className="text-[#211252] uppercase">
                {data.length > 5 ? data[1].leave : ""}
              </p>
            </div>

            <div className="mt-4">
              <h6 className="font-bold text-[#211252]">Date to</h6>
              <p className="text-[#211252]">
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
