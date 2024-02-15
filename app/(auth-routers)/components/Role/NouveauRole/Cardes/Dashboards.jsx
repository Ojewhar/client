import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Dashboards = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold">Dashboards</h2>

      <div className="relative overflow-x-auto mt-4">
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3  border-t border-b">
          <input
            id="NomDashboard"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="NomDashboard"
          >
            Nom du droit
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3  ">
          <input
            id="direction"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="direction"
          >
            Dashboard direction
          </label>
        </div>

        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Dashboardcommercial"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Dashboardcommercial"
          >
            Dashboard commercial
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Dashboardfinance"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Dashboardfinance"
          >
            Dashboard finance
          </label>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
