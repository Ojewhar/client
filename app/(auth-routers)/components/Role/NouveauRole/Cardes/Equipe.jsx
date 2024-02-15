import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Equipe = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold">Équipe</h2>

      <div className="relative overflow-x-auto mt-4">
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3  border-t border-b">
          <input
            id="NomVoir"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="NomVoir"
          >
            Nom du droit
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Voirnmembreles"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Voirnmembreles"
          >
            Voir les membres
          </label>
        </div>

        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Modifiermembre"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Modifiermembre"
          >
            Modifier un membre
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Ajoutermembre"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Ajoutermembre"
          >
            Ajouter et supprimer un membre
          </label>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
