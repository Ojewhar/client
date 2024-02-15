import EquipeTable from "@/app/(auth-routers)/components/Equipe/EquipeTable";
import NoCart from "@/app/Shared/NoCart";
import React from "react";

const page = () => {
  const isData = true;

  return (
    <section>
      <div>
        <div>{isData ? <EquipeTable /> : <NoCart />}</div>
      </div>
    </section>
  );
};

export default page;
