import React from "react";
import { GridLoader, HashLoader, ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <ScaleLoader color="#1f049b" />
    </div>
  );
};

export const LoaderHash = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-lightbg h-screen">
        <div>
          <HashLoader color="#1f049b" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
