import RoleTable from "@/app/(auth-routers)/components/Role/RoleTable";
import NoCart from "@/app/Shared/NoCart";
import React from "react";

const page = () => {
  const isData = true;

  return (
    <section>
      <div>
        <div>{isData ? <RoleTable /> : <NoCart />}</div>
      </div>
    </section>
  );
};

export default page;
