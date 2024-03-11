import { FNCButton } from '@/app/components/buttons/FNCButton';
import { SubmitButton } from '@/app/components/buttons/SubmitButton';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import logo from '@/public/images/logo.png';
import {
  addFormOne,
  removeFromOne,
} from '@/app/context/states/formOneCertificate/formOneCertificateSlice';

const Step5 = ({ nextStep, prevStep }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [firstFormEmail, setFirstFormEmail] = useState('');
  const [firstFormPassword, setfirstFormPassword] = useState('');
  const [firstFormCPassword, setfirstFormCPassword] = useState('');
  const [firstFormFName, setFirstFormFName] = useState('');
  const [firstFormLName, setFirstFormLName] = useState('');
  const [firstFormMobile, setFirstFormMobile] = useState('');
  const [firstFormStreet, setFirstFormStreet] = useState('');
  const [firstFormSuburb, setFirstFormSuburb] = useState('');
  const [firstFormState, setFirstFormState] = useState('');
  const [firstFormPost, setFirstFormPost] = useState('');
  const [isError, setIsError] = useState(false);
  const [dobError, setDobError] = useState(true);

  const thisYear = new Date();
  const dispatch = useDispatch();
  // Format the date and time

  const handleDateOfBirth = (e) => {
    let selectedDate = new Date(e.target.value);

    if (thisYear.getFullYear() - selectedDate.getFullYear() < 18) {
      setDobError(true);
    } else {
      setDobError(false);
      let formattedDate = selectedDate.toISOString().slice(0, 10);
      setDateOfBirth(formattedDate);
    }
  };
  // const formattedDOBTime =
  //   dateOfBirth && dateOfBirth?.toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dobError) {
      return toast.error('Please fix date of birth');
    }
    if (firstFormPassword !== firstFormCPassword) {
      return toast.error('Both password are did not match !');
    }
    dispatch(
      addFormOne({
        firstFormFName: firstFormFName,
        firstFormLName: firstFormLName,
        firstFormEmail: firstFormEmail,
        firstFormPassword: firstFormPassword,
        firstFormCPassword: firstFormCPassword,
        dateOfBirth: dateOfBirth,
        firstFormMobile: firstFormMobile,
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
    // dispatch(removeFromOne());
    prevStep();
  };

  // Fetch default value from Redux store
  const defaultValue = useSelector(
    (state) => state.formOneCertificate.alldata[4]
  );

  useEffect(() => {
    if (defaultValue) {
      setFirstFormFName(defaultValue.firstFormFName);
      setFirstFormLName(defaultValue.firstFormLName);
      setFirstFormEmail(defaultValue.firstFormEmail);
      setfirstFormPassword(defaultValue.firstFormPassword);
      setfirstFormCPassword(defaultValue.firstFormCPassword);
      setfirstFormCPassword(defaultValue.firstFormCPassword);
      setDateOfBirth(new Date(defaultValue.dateOfBirth));
      setFirstFormMobile(defaultValue.firstFormMobile);
      setFirstFormStreet(defaultValue.firstFormStreet);
      setFirstFormSuburb(defaultValue.firstFormSuburb);
      setFirstFormState(defaultValue.firstFormState);
      setFirstFormPost(defaultValue.firstFormPost);
    }
  }, [defaultValue]);

  // const data = useSelector((state) => state.formOneCertificate.alldata);
  // console.log(firstFormPassword, firstFormCPassword);

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
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl mt-5 font-semibold works text-uptexform">
              Your information
            </h2>
            <p className="py-5 text-[12px] text-slate-500">
              Please enter your details - these will be used to create your
              account and the details that will be displayed on your certificate
            </p>
          </div>

          {/* form data section start */}

          <div className="">
            <div className="md:grid grid-cols-2 gap-6 mt-5">
              <div>
                <label htmlFor="fname" className="text-uptext font-bold">
                  First name(s)
                </label>
                <input
                  required
                  id="fname"
                  type="text"
                  name="fname"
                  value={firstFormFName}
                  onChange={(e) => setFirstFormFName(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded  hover:border-upurple"
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
                  value={firstFormLName}
                  onChange={(e) => setFirstFormLName(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
                />
              </div>
            </div>
            <small className="-mt-2 text-[10px]">
              Please enter the name of the person who requires leave.
            </small>

            <div className="mt-6 ">
              <label className="text-uptext font-bold">Date Of Birth</label>
              <br></br>
              <div className="relative w-full block border focus:border-2 outline-none rounded focus:ring-upurple focus:border-upurple  border-slate-300">
                <input
                  type="date"
                  className="w-full p-4 rounded-md text-base border"
                  value={dateOfBirth}
                  onChange={handleDateOfBirth}
                />
              </div>
              {dobError && (
                <p className=" text-[12px] uppercase text-red-600 tracking-wider">
                  YOU MUST BE 18 YEARS OLD TO USE THIS SERVICE
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="mobile" className="text-uptext font-bold">
                Mobile number
              </label>
              <input
                required
                id="mobile"
                placeholder="0412345678"
                value={firstFormMobile}
                onChange={(e) => setFirstFormMobile(e.target.value)}
                type="tel"
                name="mobile"
                className="w-full focus:ring-upurple focus:border-upurple p-3 border  focus:border-2 outline-none border-slate-300 rounded  hover:border-upurple"
              />
              <small className="-mt-2 text-[10px]">
                We&apos;ll send any documents via SMS to this number in addition
                to email.
              </small>
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
                value={firstFormStreet}
                onChange={(e) => setFirstFormStreet(e.target.value)}
                className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
              />
            </div>

            <div className="md:grid grid-cols-3 gap-6 md:mt-5">
              <div>
                <label htmlFor="Suburb" className="text-uptext font-bold">
                  Suburb
                </label>
                <input
                  required
                  id="Suburb"
                  type="text"
                  name="Suburb"
                  value={firstFormSuburb}
                  onChange={(e) => setFirstFormSuburb(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
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
                  value={firstFormState}
                  onChange={(e) => setFirstFormState(e.target.value)}
                  className="w-full  focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
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
                  value={firstFormPost}
                  onChange={(e) => setFirstFormPost(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
                />
              </div>
            </div>

            <div className=" md:mt-3">
              <label htmlFor="email" className="text-uptext font-bold">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                name="email"
                value={firstFormEmail}
                onChange={(e) => setFirstFormEmail(e.target.value)}
                className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded  hover:border-upurple"
              />
            </div>
            <div className="md:grid grid-cols-2 gap-6 mt-3">
              <div>
                <label htmlFor="lname" className="text-uptext font-bold">
                  Password
                </label>
                <input
                  required
                  id="password"
                  type="password"
                  name="password"
                  value={firstFormPassword}
                  onChange={(e) => setfirstFormPassword(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
                />
              </div>

              <div>
                <label htmlFor="lname" className="text-uptext font-bold">
                  Confirm Password
                </label>
                <input
                  required
                  id="cpassword"
                  type="password"
                  name="cpassword"
                  value={firstFormCPassword}
                  onChange={(e) => setfirstFormCPassword(e.target.value)}
                  className="w-full focus:ring-upurple focus:border-upurple p-3 border focus:border-2 outline-none border-slate-300 rounded hover:border-upurple"
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
                  ? 'border-2 md:mb-2 text-white bg-upurple border-upurple cursor-pointer'
                  : 'border-2 md:mb-2 text-white bg-upurple border-upurple'
              }
              disable={isError ? true : false}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step5;
