import React from "react";

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="bg-white border flex justify-between flex-col border-uorange rounded p-6 mb-5 md:mb-0">
      <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="text-4xl font-bold mb-4">{price}</div>
      </div>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="h-5 w-5 fill-current text-green-500 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.706 10.706a1 1 0 0 1 1.32-.083l.094.083L9 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083L9 12.586l-5.293-5.293a1 1 0 0 1-.083-1.32l.083-.094z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-uorange border-uorange border-2 hover:bg-transparent hover:text-primary transition-all rounded text-white font-bold py-2 px-4 w-full">
        Choose Plan
      </button>
    </div>
  );
};

export default PriceCard;
