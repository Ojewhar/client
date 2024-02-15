"use client";
import React, { useState } from "react";
import TopSummery from "../components/Dashboard/TopSummery";
import TotalDesCommandes from "../components/Dashboard/Charts/TotalDesCommandes";
import TopMarques from "../components/Dashboard/Charts/TopMarques";
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
            <p className="mt-4 text-sm text-slate-400 text-center">
              Quand on passe la souris sur la barre en question, on a le nombre
              de commandes pour la semaine en question
            </p>
          </div>
          <div className="col-span-1 px-4 py-4  items-center bg-white rounded-2xl">
            <h2 className="text-lg font-semibold text-primary">Top marques</h2>
            <TopMarques />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
