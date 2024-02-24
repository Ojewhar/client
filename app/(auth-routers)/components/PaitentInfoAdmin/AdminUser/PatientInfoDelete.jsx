import Model from "@/app/Layouts/Model";
import { deletePatientForm } from "@/app/Services/api-requests/form";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";

const PatientInfoDelete = ({ showModel, setShowModel, data }) => {
  const [loading, setLoading] = useState(false);
  async function handleDelete() {
    try {
      setLoading(true);
      const res = await deletePatientForm(data._id);
      toast.success(res.data?.message);
      setLoading(false);
      setShowModel(false);
      if (res.data) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Model
      showModel={showModel}
      setShowModel={setShowModel}
      title="Delete Your Product"
    >
      <div>
        <form className="px-10 py-7 overflow-hidden">
          <div>
            Do you want to delete{" "}
            <strong>{data?.firstFormFName + " " + data?.firstFormLName}</strong>{" "}
            !
          </div>
          <div className="mt-8 mb-4 text-center">
            <Button
              disabled={loading ? true : false}
              onClick={handleDelete}
              type="button"
              className="text-white px-8 rounded-lg bg-red-600 hover:bg-red-500"
            >
              {loading ? "Deleting...." : " Delete"}
            </Button>
          </div>
        </form>
      </div>
    </Model>
  );
};

export default PatientInfoDelete;
