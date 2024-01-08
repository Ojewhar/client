import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import { BsInfoCircle } from "react-icons/bs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { TbFileUpload } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import logo from "../../../../../../public/images/logo.png";
import DatePicker from "react-datepicker";
import { DatePickerDemo } from "@/app/components/buttons/DatePicker";
import {
  addTelehealth,
  removeTelehealth,
} from "@/app/redux/states/telehealthConsultation/telehealthConsultationSlice";

const Step4 = ({ nextStep, prevStep }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState("");
  const [firstFormStreet, setFirstFormStreet] = useState("");
  const [firstFormSuburb, setFirstFormSuburb] = useState("");
  const [firstFormState, setFirstFormState] = useState("");
  const [firstFormPost, setFirstFormPost] = useState("");
  const [isError, setIsError] = useState(false);

  const thisYear = new Date();
  const dispatch = useDispatch();
  // Format the date and time
  const formattedDOBTime = dateOfBirth.toISOString().split("T")[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      thisYear.getFullYear() - dateOfBirth.getFullYear() < 18 ||
      gender === ""
    ) {
      return toast.error("Please fix the errors");
    }
    dispatch(
      addTelehealth({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: formattedDOBTime,
        gender: gender,
        firstFormStreet: firstFormStreet,
        firstFormSuburb: firstFormSuburb,
        firstFormState: firstFormState,
        firstFormPost: firstFormPost,
      })
    );

    nextStep();
  };
  // Back Button Function
  const backButtonFunc = () => {
    dispatch(removeTelehealth());
    prevStep();
  };

  const data = useSelector((state) => state.formOneCertificate.alldata);
  console.log(data);

  return (
    <section>
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
              Patient Information
            </h2>
            <p className="py-3 text-[12px] text-opacitytext">
              Please ensure that you input the details of the person requiring
              medical advice as per Medicare Card.
            </p>
          </div>

          {/* form data section start */}

          <div className="">
            <div className="grid grid-cols-2 gap-6 mt-5">
              <div>
                <label htmlFor="fname" className="text-uptext font-bold">
                  First name(s)
                </label>
                <input
                  required
                  id="fname"
                  type="text"
                  name="fname"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg  hover:border-upurple"
                />
              </div>

              <div>
                <label htmlFor="lname" className="text-uptext font-bold">
                  Last name
                </label>
                <input
                  required
                  id="lname"
                  type="text"
                  name="lname"
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                />
              </div>
            </div>
            <small className="-mt-2 text-[10px]">
              Please enter the name of the person who requires leave.
            </small>

            <div>
              <h3 className="mt-5 mb-4 text-uptext font-bold ">Gender</h3>
              <div className="flex items-center mb-5">
                <input
                  id="Male"
                  type="radio"
                  value="Male"
                  name="Male"
                  checked={gender === "Male" ? true : false}
                  onChange={() => setGender("Male")}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 fill-upurple outline-none "
                />
                <label
                  htmlFor="Male"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Male
                </label>
              </div>

              <div className="flex items-center mb-5">
                <input
                  id="Female"
                  type="radio"
                  value="Female"
                  name="Female"
                  checked={gender === "Female" ? true : false}
                  onChange={() => setGender("Female")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="Female"
                  className="ml-2 text-[15px] font-bold text-uptexform dark:text-gray-300"
                >
                  Female
                </label>
              </div>
              {gender === "" ? (
                <p className="text-red-500 font-light uppercase text-[14px] tracking-wider">
                  Required
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-6 ">
              <label className="text-uptext font-bold">Date Of Birth</label>
              <br></br>
              <div className="relative w-full block border focus:border-2 outline-none rounded-lg focus:ring-upurple focus:border-upurple  border-slate-300">
                <DatePicker
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  id="formdatepicker"
                  placeholderText="mm/dd/yyyy"
                  className=" p-3 md:w-[660px] w-full rounded-lg"
                  onChange={(date) => setDateOfBirth(date)}
                  selected={dateOfBirth}
                  required
                />
                <label
                  htmlFor="formdatepicker"
                  className="absolute top-1/3 right-2 -mt-2 "
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
              {thisYear.getFullYear() - dateOfBirth.getFullYear() < 18 ? (
                <p className=" text-[12px] uppercase text-red-600 tracking-wider">
                  YOU MUST BE 18 YEARS OLD TO USE THIS SERVICE
                </p>
              ) : (
                <small></small>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="street" className="text-uptext font-bold">
                Street address
              </label>
              <input
                required
                id="street"
                type="text"
                name="street"
                onChange={(e) => setFirstFormStreet(e.target.value)}
                className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
              />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-5">
              <div>
                <label htmlFor="Suburb" className="text-uptext font-bold">
                  Suburb
                </label>
                <input
                  required
                  id="Suburb"
                  type="text"
                  name="Suburb"
                  onChange={(e) => setFirstFormSuburb(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                />
              </div>

              <div>
                <label htmlFor="State" className="text-uptext font-bold">
                  State
                </label>
                <input
                  required
                  id="State"
                  type="text"
                  name="State"
                  onChange={(e) => setFirstFormState(e.target.value)}
                  className="w-full  focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                />
              </div>

              <div>
                <label htmlFor="Postalcode" className="text-uptext font-bold">
                  Postalcode
                </label>
                <input
                  required
                  id="Postalcode"
                  type="text"
                  name="Postalcode"
                  onChange={(e) => setFirstFormPost(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded-lg hover:border-upurple"
                />
              </div>
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

export default Step4;
