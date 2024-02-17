import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import bannerImg from "@/public/images/subscription-banner-main-image.png";
import Link from "next/link";
import img3 from "@/public/images/MedCert.png";
import GenCons from "@/public/images/GenCons.png";
import { LinkButton } from "@/app/components/buttons/LinkButton";
import { FaRegTimesCircle } from "react-icons/fa";
import ProfileSec from "./ProfileSec";
import { useSelector } from "react-redux";
import ConsultationForm from "./ConsultationForm/ConsultationForm";
import { getASingleUser } from "@/app/Services/api-requests/auth";

const IsItPatient = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const res = await getASingleUser();
        console.log(res);
        setUserInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  console.log(userInfo);

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

              {userInfo?.forms.length < 1 && (
                <div className="py-3">
                  <Link
                    href="/form"
                    className="py-4 px-20 md:inline-block block text-center bg-white hover:opacity-85 transition-all text-ublack font-semibold rounded"
                  >
                    Start Now
                  </Link>
                </div>
              )}

              <p className="text-sm pt-2">
                Unlock unlimited consultation requests for just $19.95/month.
              </p>
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-5 py-4 mt-8">
          <div className="col-span-2">
            <h2 className="font-semibold text-2xl text-ublack">
              Consultations
            </h2>
            <h3 className="font-semibold text-xl text-ublack mt-3">
              Start a new consultation with a partner practitioner who, if
              applicable, can provide an outcome which includes
            </h3>

            <div className="md:grid grid-cols-2 gap-5 py-6">
              {userInfo ? (
                userInfo.forms.map((item, index) => {
                  return (
                    <div key={index}>
                      <ConsultationForm item={item} />
                    </div>
                  );
                })
              ) : (
                <div className=" h-[200px] flex justify-center items-center">
                  <p className="font-bold text-uorange">Loading........</p>
                </div>
              )}
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
