import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import copy from "@/public/icons/copy.svg";
import Image from "next/image";
const TooltipContainer = ({ clipText, tooltipText }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image
            onClick={() => {
              window.navigator.clipboard.writeText(clipText);
            }}
            src={copy}
            alt="copy"
            width={18}
            height={18}
            className="ml-2 cursor-pointer"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy : {clipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipContainer;
