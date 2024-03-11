import { FNCButton } from '@/app/components/buttons/FNCButton';
import { SubmitButton } from '@/app/components/buttons/SubmitButton';
import Image from 'next/image';
import React, { useState } from 'react';
import SubscriptionImg from '/public/images/medical_certificates-subscription.svg';
import ExpressImg from '/public/images/medical_certificates-express.svg';
import EmailImg from '/public/images/medical_certificates-email.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import logo from '@/public/images/logo.png';
import {
  addFormOne,
  removeFromOne,
} from '@/app/context/states/formOneCertificate/formOneCertificateSlice';

const Step6 = ({ nextStep, prevStep }) => {
  const [isError, setIsError] = useState(false);
  const [ifOther, setIfOther] = useState('');
  const [switablityForCirtificate, setswitablityForCirtificate] =
    useState('Cough and cold');
  const dispatch = useDispatch();

  const handleLeaveReasonChange = (e) => {
    if (e.target.checked) {
      setswitablityForCirtificate(e.target.name);
    }
  };

  console.log(ifOther);
  // Back Button Function
  const backButtonFunc = () => {
    // dispatch(removeFromOne());
    prevStep();
  };

  // Previous Buttonn Function
  const handleSubmit = () => {
    dispatch(
      addFormOne({
        switablityForCirtificate: switablityForCirtificate,
        ifOther: ifOther,
      })
    );
    nextStep();
  };

  const data = useSelector((state) => state.formOneCertificate.alldata);
  console.log(data);

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
            <p className="py-5 text-[12px] text-slate-500">
              I am experiencing (this screen should not appear if for a carers
              certificate) - note these will not appear on your certificate, it
              is for your doctor to assess your suitabilityForcertificate
            </p>
          </div>

          {/* form data section start */}
          <div className="mb-6">
            <div>
              <h4 className="text-lg font-semibold">Select your section</h4>
            </div>
            <div className="flex items-center my-5">
              <input
                id="Coughandcold"
                type="checkbox"
                value="Cough and cold"
                checked={
                  switablityForCirtificate === 'Cough and cold' ? true : false
                }
                onChange={handleLeaveReasonChange}
                name="Cough and cold"
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 "
              />
              <label
                htmlFor="Coughandcold"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Cough and cold
              </label>
            </div>

            <div className="flex items-center mb-5">
              <input
                id="Headache"
                type="checkbox"
                value="Headache"
                name="Headache"
                checked={switablityForCirtificate === 'Headache' ? true : false}
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Headache"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Headache
              </label>
            </div>

            <div className="flex items-center mb-5">
              <input
                id="Mildabdominalpain"
                type="checkbox"
                value="Mild abdominal pain"
                name="Mild abdominal pain"
                checked={
                  switablityForCirtificate === 'Mild abdominal pain'
                    ? true
                    : false
                }
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Mildabdominalpain"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Mild abdominal pain
              </label>
            </div>
            <div className="flex items-center mb-5">
              <input
                id="Mensesrelatedcramps"
                type="checkbox"
                value="Menses related cramps"
                name="Menses related cramps"
                checked={
                  switablityForCirtificate === 'Menses related cramps'
                    ? true
                    : false
                }
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Mensesrelatedcramps"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Menses related cramps
              </label>
            </div>
            <div className="flex items-center mb-5">
              <input
                id="Sprainorstrains"
                type="checkbox"
                value="Sprain or strains"
                name="Sprain or strains"
                checked={
                  switablityForCirtificate === 'Sprain or strains'
                    ? true
                    : false
                }
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Sprainorstrains"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Sprain or strains
              </label>
            </div>
            <div className="flex items-center mb-5">
              <input
                id="Lowbackpain"
                type="checkbox"
                value="Low back pain"
                name="Low back pain"
                checked={
                  switablityForCirtificate === 'Low back pain' ? true : false
                }
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Lowbackpain"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Low back pain
              </label>
            </div>
            <div className="flex items-center mb-5">
              <input
                id="Diarrhea"
                type="checkbox"
                value="Diarrhea"
                name="Diarrhea"
                checked={switablityForCirtificate === 'Diarrhea' ? true : false}
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="Diarrhea"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Diarrhea
              </label>
            </div>

            <div className="flex items-center mb-5">
              <input
                id="others3"
                type="checkbox"
                value="Other"
                name="Other"
                checked={switablityForCirtificate === 'Other' ? true : false}
                onChange={handleLeaveReasonChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="others3"
                className="ml-2 text-[16px] font-semibold  text-uptexform dark:text-gray-300"
              >
                Other
              </label>
            </div>
            {switablityForCirtificate === 'Other' && (
              <div>
                <textarea
                  onChange={(e) => setIfOther(e.target.value)}
                  placeholder="Please specify....."
                  name="setIfOther"
                  id="setIfOther"
                  rows="6"
                  className="p-3 w-full border outline-none border-primary rounded-md"
                ></textarea>
              </div>
            )}
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

export default Step6;
