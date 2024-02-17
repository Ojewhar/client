"use client";
import { LoaderHash } from "@/app/Shared/Loader";
import IsItPatient from "./Patient/IsItPatient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Main = () => {
  const [loading, setLoading] = useState(true);
  const admin = useSelector((state) => state.userInfo.user);
  const isAdmin = admin?.role;
  const router = useRouter();
  useEffect(() => {
    function changeRoute() {
      if (isAdmin !== "patient") {
        router.push("/dashboard");
      } else {
        setLoading(false);
      }
    }
    changeRoute();
  }, [isAdmin]);

  return <>{loading ? <LoaderHash /> : <IsItPatient />}</>;
};

export default Main;
