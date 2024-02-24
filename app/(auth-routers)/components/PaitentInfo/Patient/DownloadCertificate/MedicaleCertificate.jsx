"use client";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import { FileText } from "lucide-react";
import { LoaderHash } from "@/app/Shared/Loader";
import Link from "next/link";

const MedicaleCertificate = () => {
  const certificateUser = useSelector(
    (state) => state.downloadCertificate.certificate
  );

  console.log(certificateUser);
  const handleDownload = () => {
    const input = document.getElementById("certificate");

    html2canvas(input, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("certificate.pdf");
    });
  };

  if (!certificateUser) {
    return <LoaderHash />;
  }

  return (
    <section>
      <div className="max-w-3xl mx-auto">
        <div id="certificate" style={{ padding: "3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Medicale Certificate
            </h3>
            <img className="w-[80px]" src="/images/favicon.png" alt="fabicon" />
          </div>
          <div className="mt-1">
            {certificateUser.createdAt && (
              <>
                Date of issue:{" "}
                <strong>{certificateUser.createdAt.split("T")[0]}</strong>
              </>
            )}
          </div>
          <div className="mt-1">
            This document certifies that in my professional opinion{" "}
            <strong>
              {certificateUser.firstFormFName} {certificateUser.firstFormLName}
            </strong>{" "}
            is unfit to attend
          </div>
          <div className="mt-1">
            WORK/STUDIES between <strong>{certificateUser.fromDate}</strong> -{" "}
            <strong>{certificateUser.toDate}</strong> inclusive
          </div>
          <div className="mt-1">Medical Practitioner: Dr Emil Khalid</div>
          <div className="mt-1">
            <img className="w-[120px]" src="/images/sign.jpg" alt="fabicon" />
          </div>
          <div className="mt-1">Address: 470 St Kilda Rd, Melbourne 3004</div>
          <div className="mt-1">AHPRA registration number: MED0002555681</div>
        </div>

        <div className="mt-3 flex justify-center gap-2 items-center">
          <Link
            className="px-6 py-2 rounded-lg bg-slate-200 text-slate-800 hover:bg-opacity-80 transition-all"
            href="/dashboard/patient"
          >
            Back
          </Link>
          <button
            className="px-4 py-2 flex justify-center items-center gap-1  rounded-lg bg-indigo-700 text-white hover:bg-opacity-80 transition-all"
            onClick={handleDownload}
          >
            <FileText className="text-white w-5 h-5" />
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default MedicaleCertificate;
