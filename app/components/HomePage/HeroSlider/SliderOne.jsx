import hero from "@/public/images/HeroImg.jpg";
import Image from "next/image";
import Link from "next/link";

const SliderOne = () => {
  return (
    <div className="bg-primary ">
      <div className="container mx-auto">
        <div className="md:flex justify-between gap-4 items-center md:h-[70vh]">
          <div className="md:w-1/2  flex justify-start items-center h-full py-10">
            <div className="text-white ">
              <h1 className=" italic  md:text-6xl text-4xl  font-semibold   mb-8">
                Welcome to CERTNOW
              </h1>
              <p>
                Your swift and caring solution for medical certification empower
                your health journey with CERTNOW
              </p>
              <h1 className="my-2 md:text-5xl font-semibold text-3xl  ">
                Medical certificates from $29
              </h1>
              <div className="my-8">
                <div className="">
                  <Link
                    href="/form"
                    className="border items-center font-semibold uppercase text-black justify-center  px-12 py-2 gap-1 border-white rounded-lg  bg-white hover:bg-transparent hover:text-white transition-all"
                  >
                    START NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center md:h-[70vh]  items-end">
            <Image
              src={hero}
              alt="hero"
              className="w-full md:h-[70vh] object-cover mx-auto relative z-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
