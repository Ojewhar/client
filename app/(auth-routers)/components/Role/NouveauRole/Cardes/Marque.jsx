import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Marque = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold">Marque</h2>

      <div className="relative overflow-x-auto mt-4">
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3  border-t border-b">
          <input
            id="Nommarque"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Nommarque"
          >
            Nom du droit
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Voirnmembrefacture"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Voirnmembrefacture"
          >
            Modifier la marque
          </label>
        </div>

        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Ajouteretmodifier"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Ajouteretmodifier"
          >
            Ajouter et modifier une commande manuellement
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Supprimerunecommande"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Supprimerunecommande"
          >
            Supprimer une commande
          </label>
        </div>
      </div>
    </div>
  );
};

export default Marque;
