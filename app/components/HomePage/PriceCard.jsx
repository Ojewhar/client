import Link from "next/link";
import React from "react";

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="bg-white border flex text-center justify-between flex-col border-uorange rounded p-6 mb-5 md:mb-0">
      <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="text-4xl font-bold mb-6 mt-3">
          <span className="">{price}</span>/month
        </div>
      </div>

      <Link
        href="/form"
        className="bg-uorange text-center border-uorange border-2 hover:bg-transparent hover:text-primary transition-all rounded text-white font-bold py-2 px-4 w-full"
      >
        Start Now
      </Link>
    </div>
  );
};

export default PriceCard;
