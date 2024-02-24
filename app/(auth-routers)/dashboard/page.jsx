"use client";
import React, { useEffect, useState } from "react";
import TopSummery from "../components/Dashboard/TopSummery";
import TotalDesCommandes from "../components/Dashboard/Charts/TotalDesCommandes";
import LatestPatients from "../components/Dashboard/Charts/LatestPatients";
import { getAllFormData } from "@/app/Services/api-requests/form";
import { setFormOne } from "@/app/context/slices/fomrOneSlice";
import { useSelector } from "react-redux";
import Loading from "@/app/components/Loader/Loading";
import { useRouter } from "next/navigation";
import { LoaderHash } from "@/app/Shared/Loader";
const Page = () => {
  const [forms, setForms] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.userInfo.user);
  useEffect(() => {
    async function getAllForm() {
      try {
        const res = await getAllFormData();
        setForms(res.data);
        setFormOne(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllForm();
  }, []);

  useEffect(() => {
    function checkUser() {
      if (user.role === "patient") {
        router.push("/dashboard/patient");
      }
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
    checkUser();
  }, [user]);

  return (
    <section>
      {!loading ? (
        <div className="grid grid-cols-3">
          <div className=" col-span-2">
            <TopSummery forms={forms} />
          </div>
          <div className="col-span-1 px-4  py-10  items-center bg-white rounded-2xl">
            <h2 className="text-lg font-semibold text-primary">
              Latest Patients
            </h2>
            <LatestPatients forms={forms} />
          </div>
        </div>
      ) : (
        <div>
          <LoaderHash />
        </div>
      )}
    </section>
  );
};

export default Page;
