import { Calendar, DollarSignIcon } from "lucide-react";
import React from "react";
import SimpleLineChart from "./Charts/SimpleLineChart";
import { useSelector } from "react-redux";

const TopSummery = () => {
  const isBrands = useSelector((state) => state.brandsInfo.brands);
  const isReseller = useSelector((state) => state.resellerInfo.resellers);

  return (
    <>
      <div className=" grid md:grid-cols-5 relative gap-4 px-4 py-10 flex-wrap items-center bg-white rounded-2xl ">
        <div className="col-span-1 md:pl-8 pl-4">
          <div className="px-2 py-1 rounded-md bg-lightsky opacity-40 inline-block">
            <Calendar className=" inline-block mr-2 w-5 h-5 text-slate-400 " />
            <p className=" inline-block text-slate-400 "> Date</p>
          </div>
          <div className="mt-10">
            <h3 className=" text-primary font-semibold text-5xl">
              {isBrands.length < 10 ? `0${isBrands.length}` : isBrands.length}
            </h3>
            <p className="text-primary opacity-50 ">Marques</p>
          </div>
          <div className="mt-10">
            <h3 className="  text-lightsky font-semibold text-5xl">
              {isReseller.length < 10
                ? `0${isReseller.length}`
                : isReseller.length}
            </h3>
            <p className="text-primary opacity-50 ">Revendeurs</p>
          </div>
        </div>
        <div className=" col-span-4">
          <SimpleLineChart />
        </div>
      </div>
    </>
  );
};

export default TopSummery;
