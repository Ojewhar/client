import hero from "@/public/images/HeroImg.png";
import HeroShape from "@/public/images/HeroShape.svg";
import arrow_white from "@/public/images/arrow_white.svg";
import arrrow_green from "@/public/images/arrrow_green.svg";
import mirror from "@/public/images/mirror.svg";
import Image from "next/image";
const SliderTwo = () => {
  return (
    <div>
      <div className="flex justify-between gap-4 items-center h-[80vh]">
        <div className="md:w-1/2 relative flex justify-center h-full items-end">
          <Image
            src={hero}
            alt="hero"
            className="w-[75%] mx-auto relative z-30 "
          />
          <Image
            src={HeroShape}
            alt="HeroShape"
            className=" absolute w-full top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2  "
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-white max-w-sm mx-auto text-center">
            <h1 className=" italic  lg:text-[101px] font-semibold lg:leading-[101px] mb-8">
              Define® <br></br>Fresh
            </h1>
            <p>Natural-toned hues that accentuate with bold charisma.</p>
            <div className="mt-5">
              <div className="flex justify-center items-center">
                <button className="border flex items-center justify-center gap-1 border-white rounded-full w-[226px] h-[62px] bg-[#FFFFFF33]">
                  Explore Define®
                  <Image src={arrow_white} alt="arrow_white" />
                </button>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button className="border flex text-primary font-semibold items-center justify-center gap-2 border-white rounded-full w-[200px] h-[62px] bg-white">
                  <Image src={mirror} alt="arrow_white" width={20} />
                  Virtual Mirror
                  <Image src={arrrow_green} alt="arrow_white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
