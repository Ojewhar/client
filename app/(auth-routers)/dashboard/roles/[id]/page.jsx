import NouveauRole from "@/app/(auth-routers)/components/Role/NouveauRole/NouveauRole";
import NoCart from "@/app/Shared/NoCart";
import React from "react";

const page = () => {
  const isData = true;

  return (
    <section>
      <div>
        <div>{isData ? <NouveauRole /> : <NoCart />}</div>
      </div>
    </section>
  );
};

export default page;
