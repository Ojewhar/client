import React from "react";
import { cn } from "@/lib/utils";
import { ClipboardPlus } from "lucide-react";

const AdminButtons = ({ handleChangeRoute, currentPath }) => {
  return (
    <button
      onClick={() => handleChangeRoute("/dashboard/patientinfo")}
      className={cn(
        "flex items-center w-full gap-x-2 mb-1 bg-primary bg-opacity-5 text-primary hover:bg-green-100  text-sm  pl-6 transition-all hover:text-primary ",
        currentPath.startsWith("/dashboard/patientinfo") &&
          "text-white bg-primary bg-opacity-100 hover:bg-primary hover:text-white hover:opacity-85 transition-all dark:bg-primary"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <ClipboardPlus
          size={23}
          className={cn(
            "text-primary",
            currentPath.startsWith("/dashboard/patientinfo") && " text-white"
          )}
        />
        Patient Info
      </div>
    </button>
  );
};

export default AdminButtons;
