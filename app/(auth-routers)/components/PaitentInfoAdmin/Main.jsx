"use client";
import { useSelector } from "react-redux";
import IsItAdmin from "./AdminUser/IsItAdmin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderHash } from "@/app/Shared/Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const admin = useSelector((state) => state.userInfo.user);
  const isAdmin = admin?.role;
  const router = useRouter();
  useEffect(() => {
    function changeRoute() {
      if (isAdmin !== "admin") {
        router.push("/dashboard");
      } else {
        setLoading(false);
      }
    }
    changeRoute();
  }, [isAdmin]);

  return <>{loading ? <LoaderHash /> : <IsItAdmin />}</>;
};

export default Main;
