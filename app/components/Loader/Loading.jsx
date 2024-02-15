import React from "react";

const Loading = ({ height }) => {
  return (
    <>
      <div
        className={`flex justify-center items-center`}
        style={{ height: height }}
      >
        <div className="rounded-md h-12 w-12 border-4 border-t-4 border-uorangedark animate-spin absolute"></div>
      </div>
    </>
  );
};

export default Loading;
