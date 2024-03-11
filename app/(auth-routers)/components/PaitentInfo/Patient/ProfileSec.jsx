import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar2Event, BsEnvelope, BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import idicon from "@/public/images/verify-with-digital-id.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProfileSec = ({ userInfo }) => {
  return (
    <>
      <h2 className="font-semibold text-2xl text-ublack">Profile</h2>

      <div className="mt-3">
        {/* Personal details section in profile */}

        <h3 className="font-semibold text-xl text-ublack">Personal details</h3>
        <div className="p-5 bg-white border border-slate-300 rounded mt-5 shadow-md">
          <div className="flex items-center mb-3">
            {userInfo ? (
              <>
                <AiOutlineUser className=" text-uorangedark text-xl font-semibold mr-3" />
                <p>{userInfo?.name}</p>
              </>
            ) : (
              <>
                <div className="animate-pulse flex gap-3">
                  <div className="rounded-full bg-slate-200 h-6 w-6"></div>
                  <div>
                    <div className="h-2 w-[100px] bg-slate-200 rounded"></div>
                    <div className="h-2 w-[100px] bg-slate-200 rounded"></div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center mb-3">
            {userInfo ? (
              <>
                <BsEnvelope className=" text-uorangedark text-xl font-semibold mr-3" />
                <p>{userInfo?.email}</p>
              </>
            ) : (
              <>
                <div className="animate-pulse flex gap-3">
                  <div className="rounded-full bg-slate-200 h-6 w-6"></div>
                  <div>
                    <div className="h-2 w-[100px] bg-slate-200 rounded"></div>
                    <div className="h-2 w-[100px] bg-slate-200 rounded"></div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center mb-3">
            {userInfo ? (
              <>
                <BsTelephone className=" text-uorangedark text-xl font-semibold mr-3" />
                <p>{userInfo?.mobile}</p>
              </>
            ) : (
              <>
                <div className="animate-pulse flex gap-3">
                  <div className="rounded-full bg-slate-200 h-6 w-6"></div>
                  <div>
                    <div className="h-2 w-[100px] bg-slate-200 rounded"></div>
                    <div className="h-2 w-[100px] bg-slate-200 rounded"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* <h3 className="font-semibold text-xl text-ublack mt-6">Payment</h3>
        <div className="p-5 bg-white border border-slate-300 rounded mt-5 shadow-md">
          <Button
            type="button"
            className="bg-uorangedark w-full text-white rounded"
          >
            Manage Billing
          </Button>
        </div> */}

        {/* id verification section in profile */}

        <h3 className="font-semibold text-xl text-ublack mt-6">
          ID Verification
        </h3>
        <div className="p-5 bg-white border border-slate-300 rounded shadow-md mt-5">
          {/* if any component or text that will placed on here  */}
          <Link
            href="https://digitalid.com/products/idv/start"
            className={`relative w-full font-semibold py-2 block  bg-blue-700 text-white text-xl rounded text-center shadow-sm`}
          >
            <span className="flex justify-center items-center">
              <Image src={idicon} alt="idicon" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileSec;
