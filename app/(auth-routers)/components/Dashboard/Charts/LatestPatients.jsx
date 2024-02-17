import React from "react";
import profileimg from "@/public/images/profile.png";
import Image from "next/image";

const LatestPatients = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-4 mt-5 shadow-md p-3 rounded-lg">
        <Image src={profileimg} alt="profileimg" />
        <div>
          <h4 className=" text-primary font-semibold ">Mr. John Doe</h4>
          <p className="text-slate-400 text-sm">02/16/2024</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 mt-5 shadow-md p-3 rounded-lg">
        <Image src={profileimg} alt="profileimg" />
        <div>
          <h4 className=" text-primary font-semibold ">Mr. John Doe</h4>
          <p className="text-slate-400 text-sm">02/16/2024</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 mt-5 shadow-md p-3 rounded-lg">
        <Image src={profileimg} alt="profileimg" />
        <div>
          <h4 className=" text-primary font-semibold ">Mr. John Doe</h4>
          <p className="text-slate-400 text-sm">02/16/2024</p>
        </div>
      </div>
    </>
  );
};

export default LatestPatients;
