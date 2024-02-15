import React from "react";
import profileimg from "@/public/images/profile.png";
import Image from "next/image";

const TopMarques = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-4 mt-5 shadow-md p-3 rounded-lg">
        <Image src={profileimg} alt="profileimg" />
        <div>
          <h4 className=" text-primary font-semibold ">Unknow Brand</h4>
          <p className="text-slate-400 text-sm">12 revendeurs</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 mt-5 shadow-md p-3 rounded-lg">
        <Image src={profileimg} alt="profileimg" />
        <div>
          <h4 className=" text-primary font-semibold ">Unknow Brand</h4>
          <p className="text-slate-400 text-sm">12 revendeurs</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 mt-5 shadow-md p-3 rounded-lg">
        <Image src={profileimg} alt="profileimg" />
        <div>
          <h4 className=" text-primary font-semibold ">Unknow Brand</h4>
          <p className="text-slate-400 text-sm">12 revendeurs</p>
        </div>
      </div>
    </>
  );
};

export default TopMarques;
