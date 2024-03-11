import Link from "next/link";
import React from "react";
import PriceCard from "./components/HomePage/PriceCard";
import GlobalHeader from "./Layouts/GlobalHeader";
import GlobalFooter from "./Layouts/GlobalFooter";
import SliderOne from "./components/HomePage/HeroSlider/SliderOne";
import HomeLogin from "./components/HomePage/HomeLogin";

export const metadata = {
  title: "Certnow",
  description:
    "Bulkee is an application facilitating streamlined connections between resellers and brands, aiming to simplify order management.",
};
const page = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <GlobalHeader />
      {/* Main Content */}
      <SliderOne />
      <main className="py-8">
        <div className="container mx-auto">
          <section className="mb-8">
            <h1 className="text-3xl font-bold mb-2">About CertNow</h1>
            <p>
              Certnow is not just a service; it’s your express ticket to
              hassle-free and caring medical certification.
            </p>
            <p>
              Designed for the dynamic lives of university students and young
              individuals, we bring you a seamless, efficient, and certified
              experience without the need to step foot outside when you’re under
              the weather.
            </p>
          </section>
          <section id="pricing" className="mb-8">
            <h2 className="text-2xl font-bold">Pricing</h2>
            <p>Insert pricing information here...</p>

            <div className="md:flex justify-start gap-12 mt-3">
              <PriceCard
                title="Basic Plan"
                price="$10/month"
                features={["Feature 1", "Feature 2", "Feature 3"]}
              />
              <PriceCard
                title="Premium Plan"
                price="$20/month"
                features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
              />
            </div>
          </section>
          <section className="md:flex justify-between items-center gap-20">
            <div className="md:w-1/2">
              <HomeLogin />
            </div>

            <div className="md:w-1/2 ">
              <h2 className="text-2xl font-bold mt-4 mb-2">
                Need a certificate?{" "}
              </h2>

              <div className="mt-4">
                <Link
                  className="bg-uorangedark block text-center border-uorangedark border-2 hover:bg-transparent hover:text-uorangedark transition-all w-full text-white font-bold py-2 px-4 rounded "
                  href="/form"
                >
                  Start Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Footer */}
      <GlobalFooter />
    </div>
  );
};

export default page;
