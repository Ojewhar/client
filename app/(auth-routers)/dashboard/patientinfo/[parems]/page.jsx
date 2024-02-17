"use client";
import SinglePatinetAllInfo from "@/app/(auth-routers)/components/PaitentInfoAdmin/AdminUser/SinglePatientInfo/SinglePatinetAllInfo";
import { getAFormOne, getAUser } from "@/app/Services/api-requests/auth";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState({});
  const { parems } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const res = await getAFormOne(parems);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [parems]);

  return <SinglePatinetAllInfo data={data} />;
};

export default Page;
