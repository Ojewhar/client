"use client";
import React, { useState } from "react";

const Model = ({ showModel, setShowModel, title, children, modelwidth }) => {
  return (
    <section className=" relative">
      {/* <!-- Main modal --> */}
      <div
        className={`${
          showModel === true ? "" : "hidden"
        } overflow-y-auto overflow-x-hidden bg-[#A3A3A333] backdrop-blur-sm fixed top-0  right-0 left-0 z-50 justify-center items-center w-full h-full`}
      >
        <div
          className={
            modelwidth
              ? `${modelwidth} p-4 max-h-full  `
              : " p-4 min-w-[400px] max-h-full   "
          }
        >
          {/* <!-- Modal content --> */}
          <div
            className={
              modelwidth
                ? `${modelwidth} md:absolute m-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-lg shadow dark:bg-gray-700  `
                : " md:absolute m-0 min-w-[400px] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-lg shadow dark:bg-gray-700  "
            }
          >
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl text-gray-400 dark:text-white">
                {title ? title : "Use Heading"}
              </h3>
              <button
                onClick={() => setShowModel(false)}
                type="button"
                className="text-gray-900 bg-[#FFBF69] hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* <!-- Modal Edit body --> */}
            {children}
            {/* <!-- Modal footer --> */}
            {/* <!-- Modal Add Body --> */}

            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => setShowModel(false)}
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            >
              I accept
            </button>
            <button
              onClick={() => setShowModel(false)}
              data-modal-hide="default-modal"
              type="button"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
