import GlobalFooter from "@/app/Layouts/GlobalFooter";
import GlobalHeader from "@/app/Layouts/GlobalHeader";
import React from "react";

const page = () => {
  return (
    <section>
      <GlobalHeader />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Faqs</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What is Certnow?</h2>
          <p className="mb-4">
            Certnow is an online medical consultation service providing medical
            certificates, saving you the hassle of needing to book an
            appointment with your doctor.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Why should I choose Certnow?
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Time efficient</li>
            <li>Affordable</li>
            <li>
              Hassle-free certificate from the comfort of your home when you
              need it most{" "}
              <span role="img" aria-label="Sick emoji">
                🤒
              </span>
            </li>
            <li>Professional service provided by a registered Aussie doctor</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            What can I get a certificate for?
          </h2>
          <p className="mb-4">
            You can get a certificate for work, study (university, TAFE,
            apprenticeship, etc.), or carer responsibilities.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            How many days can I get a certificate for?
          </h2>
          <p className="mb-4">Between 1 to 3 days.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            How quickly can I get my certificate?
          </h2>
          <p className="mb-4">
            We aim to deliver your certificate within four hours, but it may
            take longer depending on doctor availability and the details of your
            submission.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Is there any reason that I may not be granted a certificate?
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>You are under 18 or above 65</li>
            <li>You require a certificate for more than 3 days</li>
            <li>
              You have indicated you are suffering from serious symptoms, or
              other factors (e.g., immunocompromised or pregnant)
            </li>
            <li>Your personal details do not match your digital iD</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Does getting a medical certificate mean I don't need to speak to a
            doctor?
          </h2>
          <p className="mb-4">
            No, our service providing medical certification is NOT a substitute
            for a thorough medical assessment. Always seek in-person medical
            attention for serious symptoms and conditions.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Do you do Telehealth consults?
          </h2>
          <p className="mb-4">
            No, at this point we do not offer Telehealth consultations; our
            service currently only provides consultations for medical
            certificates.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Is my doctor based in Australia?
          </h2>
          <p className="mb-4">
            Yes, the doctor that will assess your medical request is based in
            Australia and AHPRA registered, meaning they are fully licensed to
            practise medicine in Australia.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            What is the price for a medical certificate?
          </h2>
          <p className="mb-4">The cost of a medical certificate is $29.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            What happens if I accidentally put in the wrong personal details, or
            details that do not match my Govt iD?
          </h2>
          <p className="mb-4">
            You will not be verified by our digital iD software and will
            therefore need to re-submit your application.
          </p>
        </div>
      </div>
      <GlobalFooter />
    </section>
  );
};

export default page;
