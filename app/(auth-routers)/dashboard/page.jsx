"use client";
import React, { useState } from "react";
import TopSummery from "../components/Dashboard/TopSummery";
import TotalDesCommandes from "../components/Dashboard/Charts/TotalDesCommandes";
import LatestPatients from "../components/Dashboard/Charts/LatestPatients";
const page = () => {
  return (
    <section>
      <div>
        <div>
          <TopSummery />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  mt-6 relative gap-5  ">
          <div className=" md:col-span-2 lg:col-span-3 px-4 py-10  items-center bg-white rounded-2xl dark:text-primary">
            <TotalDesCommandes />
          </div>
          <div className="col-span-1 px-4 py-4  items-center bg-white rounded-2xl">
            <h2 className="text-lg font-semibold text-primary">
              Latest Patients
            </h2>
            <LatestPatients />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
