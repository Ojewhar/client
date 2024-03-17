import FormOne from "@/app/components/MainForm/FormOne/FormOne";
import React from "react";

export const metadata = {
  title: "Get your medical certificate | CERTNOW ",
  description: "Get your medical certificate | CERTNOW",
};
const page = () => {
  return (
    <>
      <section>
        <div>
          <FormOne />
        </div>
      </section>
    </>
  );
};

export default page;
