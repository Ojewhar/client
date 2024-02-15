import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Revendeurs = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold">Revendeurs</h2>

      <div className="relative overflow-x-auto mt-4">
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3  border-t border-b">
          <input
            id="Nomrevendeurs"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Nomrevendeurs"
          >
            Nom du droit
          </label>
        </div>

        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="supprimerdesrevendeursVoir"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="supprimerdesrevendeursVoir"
          >
            Voir les différents revendeurs
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="supprimerdesrevendeurs"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="supprimerdesrevendeurs"
          >
            Ajout/modifier et supprimer des revendeurs
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="pourlesrevendeurs"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="pourlesrevendeurs"
          >
            Modifier le prix des produits pour les revendeurs
          </label>
        </div>
      </div>
    </div>
  );
};

export default Revendeurs;
