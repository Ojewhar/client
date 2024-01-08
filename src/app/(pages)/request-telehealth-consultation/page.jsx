import FormOne from "@/app/components/MainForm/FormOne/FormOne";
import PresFroms from "@/app/components/MainForm/PrescriptionFormPart/PresFroms";
import Head from "next/head";
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
          <PresFroms />
        </div>
      </section>
    </>
  );
};

export default page;
