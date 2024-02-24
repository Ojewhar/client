import React from "react";
import profileimg from "@/public/images/profile.png";
import Image from "next/image";

const LatestPatients = ({ forms }) => {
  const latestForms = forms?.slice(0, 5);
  return (
    <>
      {latestForms &&
        latestForms.map((item, index) => {
          const date = item.fromDate.split(" ").slice(0, 1).join("");
          const date2 = item.fromDate.split(" ").slice(1, 4).join("-");
          const bgColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`;
          const bgColorCode = `#${bgColor}`;
          const nameNumber = item.firstFormLName.split("")[0];
          return (
            <div
              key={index}
              className="flex justify-start items-center gap-4 mt-5 shadow-md p-3 rounded-lg"
            >
              <div
                style={{ backgroundColor: bgColor }}
                className={`w-8 h-8 flex justify-center items-center rounded-full`}
              >
                <p className="text-white font-semibold text-xl">{nameNumber}</p>
              </div>
              <div>
                <h4 className=" text-primary font-semibold ">
                  {item.firstFormFName + " " + item.firstFormLName}
                </h4>
                <p className="text-slate-800 text-sm">
                  {date}, {date2}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default LatestPatients;
