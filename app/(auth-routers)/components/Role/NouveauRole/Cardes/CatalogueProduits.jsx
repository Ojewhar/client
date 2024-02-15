import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const CatalogueProduits = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold">Catalogue produits</h2>

      <div className="relative overflow-x-auto mt-4">
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3  border-t border-b">
          <input
            id="NomCatalogue"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="NomCatalogue"
          >
            Nom du droit
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="VoirCatalogue"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="VoirCatalogue"
          >
            Voir les différents produits
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="AjoutCatalogue"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="AjoutCatalogue"
          >
            Ajout/modifier et supprimer des produits
          </label>
        </div>
      </div>
    </div>
  );
};

export default CatalogueProduits;
