import Model from "@/app/Layouts/Model";
import { Button } from "@/components/ui/button";
import React from "react";

const RoleDelete = ({ showModel, setShowModel, data }) => {
  return (
    <Model
      showModel={showModel}
      setShowModel={setShowModel}
      title="Delete Your Product"
    >
      <div>
        <form className="px-10 py-7 overflow-hidden">
          <div>
            Do you want to delete <strong>{data?.title}</strong> !
          </div>
          <div className="mt-8 mb-4 text-center">
            <Button className="text-white px-8 rounded-lg bg-red-600 hover:bg-red-500">
              Delete
            </Button>
          </div>
        </form>
      </div>
    </Model>
  );
};

export default RoleDelete;
