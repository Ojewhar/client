import { Calendar, DollarSignIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import PieChartPatient from "./Charts/PieChartPatient";

const TopSummery = () => {
  const isBrands = useSelector((state) => state.brandsInfo.brands);
  const isReseller = useSelector((state) => state.resellerInfo.resellers);

  return (
    <>
      <div className=" grid md:grid-cols-5 relative gap-4 px-4 py-10 flex-wrap items-center bg-white rounded-2xl ">
        <div className="col-span-1 md:pl-8 pl-4">
          {/* <div className="px-2 py-1 rounded-md bg-lightsky opacity-40 inline-block">
            <h3 className=" text-primary font-semibold text-5xl">
              All Patients
            </h3>
          </div> */}
          <div className="mt-10">
            <h3 className=" text-primary font-semibold text-5xl">65</h3>
            <p className="text-primary opacity-50 ">Total Patients</p>
          </div>
          <div className="mt-10">
            <h3 className="  text-lightsky font-semibold text-5xl">22</h3>
            <p className="text-primary opacity-50 ">Active Patients</p>
          </div>
        </div>
        <div className=" col-span-4 h-[400px]">
          <PieChartPatient />
        </div>
      </div>
    </>
  );
};

export default TopSummery;
