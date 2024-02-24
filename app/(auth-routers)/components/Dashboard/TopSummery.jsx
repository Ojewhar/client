import { Calendar, DollarSignIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PieChartPatient from "./Charts/PieChartPatient";
import { COLOR } from "@/app/constant/colors";

const TopSummery = ({ forms }) => {
  const [isdata, setIsData] = useState([]);
  const activeData = forms.filter((item) => {
    if (item.status === "active") {
      return item;
    }
  });
  const pendingData = forms.filter((item) => {
    if (item.status === "pending") {
      return item;
    }
  });
  const rejectData = forms.filter((item) => {
    if (item.status === "canceled") {
      return item;
    }
  });

  const data = {
    labels: ["Accepted", "Rejected", "Pending"],
    datasets: [
      {
        label: "of Patients",
        data: [activeData.length, rejectData.length, pendingData.length],
        backgroundColor: [COLOR.uorangedark, COLOR.upred, COLOR.upyellow],
        borderColor: " #fff",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className=" grid grid-cols-3 justify-between items-start relative gap-4 px-4 py-10 flex-wrap  bg-white rounded-2xl ">
        <div className=" col-span-1 md:pl-8 pl-4">
          <div className="mt-10">
            <h3 className=" text-black font-semibold text-5xl">
              {forms.length}
            </h3>
            <p className="text-black  ">Total Patients</p>
          </div>
          <div className="mt-10">
            <h3 className="  text-green-700 font-semibold text-5xl">
              {activeData.length}
            </h3>
            <p className="text-green-700 ">Active Patients</p>
          </div>
          <div className="mt-10">
            <h3 className="  text-yellow-500 font-semibold text-5xl">
              {pendingData.length}
            </h3>
            <p className="text-yellow-500  ">Pending Patients</p>
          </div>
        </div>
        <div className="col-span-2 h-[400px]">
          {forms && <PieChartPatient data={data} />}
        </div>
      </div>
    </>
  );
};

export default TopSummery;
