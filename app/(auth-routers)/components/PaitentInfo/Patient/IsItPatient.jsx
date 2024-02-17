import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import bannerImg from "@/public/images/subscription-banner-main-image.png";
import Link from "next/link";
import img3 from "@/public/images/MedCert.png";
import GenCons from "@/public/images/GenCons.png";
import { LinkButton } from "@/app/components/buttons/LinkButton";
import { FaRegTimesCircle } from "react-icons/fa";
import ProfileSec from "./ProfileSec";

const IsItPatient = () => {
  const userInfo = false;
  return (
    <section className="p-5">
      <div>
        <div className=" bg-upurple  rounded flex p-10 md:p-0 ">
          <div className=" hidden md:flex ml-4  items-end ">
            <Image
              src={bannerImg}
              alt="banner-main-img"
              width={125}
              height={125}
            />
          </div>
          <div className="md:ml-12 md:py-5 md:flex items-center text-white">
            <div>
              <h5 className="font-semibold">Upgrade to Updoc Plus</h5>
              <p className="text-sm py-2">
                Unlock unlimited consultation requests for just $19.95/month.
              </p>

              <div className="py-3">
                <Link
                  href="/"
                  className="py-4 px-20 md:inline-block block text-center bg-white hover:opacity-85 transition-all text-ublack font-semibold rounded"
                >
                  {userInfo ? "Start trial" : "Upgrade Now"}
                </Link>
              </div>
              <p className="text-sm pt-2">
                Unlock unlimited consultation requests for just $19.95/month.
              </p>
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-5 py-4">
          <div className="col-span-2">
            <h2 className="font-semibold text-2xl text-ublack">
              Consultations
            </h2>
            <h3 className="font-semibold text-xl text-ublack mt-3">
              Start a new consultation with a partner practitioner who, if
              applicable, can provide an outcome which includes
            </h3>

            <div className="md:grid grid-cols-2 gap-5 py-6">
              <div className="p-5 flex justify-between flex-col h-[300px] bg-white border border-slate-300 rounded">
                <h3 className="font-semibold text-xl text-ublack">
                  Medical Certificate
                </h3>
                <div className="grid grid-cols-3 py-6">
                  <p className="col-span-2 text-sm text-ublack opacity-70">
                    Request a consultation with a Partner Doctor who can provide
                    outcomes including: medical certificates, sick notes,
                    doctors notes.
                  </p>
                  <Image
                    className="col-span-1 mx-auto"
                    src={img3}
                    width={70}
                    alt="image-3"
                  />
                </div>

                <LinkButton
                  href="/form"
                  title="Request A Consultation Now"
                  className="bg-uorangedark transition-all opacity-90 text-white rounded"
                />
              </div>

              <div className="p-5 bg-white flex justify-between flex-col h-[300px] border border-slate-300 rounded mt-6 md:mt-0">
                <h3 className="font-semibold text-xl text-ublack ">
                  Telehealth Consultation
                </h3>
                <div className="grid grid-cols-3 py-6">
                  <p className="col-span-2 text-sm  text-ublack opacity-70">
                    The easiest way to speak to a registered medical
                    practitioner for advice or a prescription.
                  </p>
                  <Image
                    className="col-span-1 mx-auto"
                    src={GenCons}
                    width={70}
                    alt="image-4"
                  />
                </div>

                <LinkButton
                  href="/request-telehealth-consultation"
                  title="Request A Call Now"
                  className=" bg-uorangedark transition-all opacity-90 text-white rounded"
                />
              </div>
            </div>

            {/* past consaltation */}
            <div>
              <h3 className="font-semibold text-lg mb-3  text-ublack ">
                Past Consultations
              </h3>
              <div className="md:grid grid-cols-2">
                <div className="p-5 bg-white flex justify-between flex-col h-[300px] border border-slate-300 rounded mt-6 md:mt-0">
                  <h3 className="font-semibold text-xl text-ublack ">
                    Medical Certificate
                  </h3>
                  <h5 className="text-md font-semibold text-uorange">Date</h5>
                  <div className="grid grid-cols-3 py-6">
                    <p className="col-span-2 text-sm  text-ublack opacity-70">
                      The easiest way to speak to a registered medical
                      practitioner for advice or a prescription.
                    </p>
                    <Image
                      className="col-span-1 mx-auto"
                      src={img3}
                      width={70}
                      alt="image-4"
                    />
                  </div>

                  <button className="px-3 flex gap-2 items-center  py-2 text-[12px] w-1/3 outline-none bg-gray-400/65 text-white rounded-md">
                    <FaRegTimesCircle className="text-white text-lg" />
                    <span>Rejected</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <ProfileSec userInfo={userInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsItPatient;
