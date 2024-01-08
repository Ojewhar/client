// components/MultiStepForm.js
"use client";
import React, { useEffect, useState } from "react";
import Step1 from "./PresFormSteps/Step1";
import Step2 from "./PresFormSteps/Step2";
import Step3 from "./PresFormSteps/Step3";
import Preview from "./PresFormSteps/Preview";
import axios from "axios";
import Start from "./PresFormSteps/Start";
import Step4 from "./PresFormSteps/Step4";
import Step5 from "./PresFormSteps/Step5";
import Step6 from "./PresFormSteps/Step6";

const PresFroms = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Start nextStep={nextStep} currentStep={currentStep} />;
      case 2:
        return <Step1 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 4:
        return <Step3 nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step4 nextStep={nextStep} prevStep={prevStep} />;

      case 6:
        return <Step5 prevStep={prevStep} nextStep={nextStep} />;
      case 7:
        return <Step6 prevStep={prevStep} nextStep={nextStep} />;
      case 8:
        return <Preview prevStep={prevStep} nextStep={nextStep} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-[661px] mx-auto p-4">{renderStep()}</div>
    </section>
  );
};

export default PresFroms;
