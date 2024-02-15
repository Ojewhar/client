import React, { useState } from "react";

const GlobalSendButton = ({ buttontext, buttonloadingtext, onClick }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading ? (
        <button
          disabled
          type="submit"
          className="text-white bg-primary opacity-60 cursor-not-allowed h-[50px] px-10 font-normal rounded-xl text-lg"
        >
          {buttonloadingtext}
        </button>
      ) : onClick ? (
        <button
          onClick={onClick}
          type="button"
          className="text-white border-2 border-primary hover:bg-transparent hover:text-primary transition-all bg-primary h-[50px] px-10 font-normal rounded-xl text-lg"
        >
          {buttontext}
        </button>
      ) : (
        <button
          type="submit"
          className="text-white border-2 border-primary hover:bg-transparent hover:text-primary transition-all bg-primary h-[50px] px-10 font-normal rounded-xl text-lg"
        >
          {buttontext}
        </button>
      )}
    </div>
  );
};

export default GlobalSendButton;
