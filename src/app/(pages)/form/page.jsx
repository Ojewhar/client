import FormOne from "@/app/components/MainForm/FormOne/FormOne";
import React from "react";

export const metadata = {
  title: "Telehealth Consultation Form | updoc ",
  description: "Telehealth Consultation Form | updoc",
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
