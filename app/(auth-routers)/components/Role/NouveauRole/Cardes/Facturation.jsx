import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Facturation = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold">Facturation</h2>

      <div className="relative overflow-x-auto mt-4">
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3  border-t border-b">
          <input
            id="NomFacturation"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="NomFacturation"
          >
            Nom du droit
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Voirnmembrefactureune"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Voirnmembrefactureune"
          >
            Voir et télécharger une facture
          </label>
        </div>

        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Modifiermembrefacture"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Modifiermembrefacture"
          >
            Ajouter/modifier une facture
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Ajoutermembrefacture"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Ajoutermembrefacture"
          >
            Gérer l’état d’une facture
          </label>
        </div>
        <div className="py-3 px-2 grid grid-cols-4 justify-start items-center mb-3 ">
          <input
            id="Supprimerfacture"
            type="checkbox"
            value=""
            className="w-5 h-5 col-span-1"
          />
          <label
            className=" col-span-3 cursor-pointer text-sm text-lighttext"
            htmlFor="Supprimerfacture"
          >
            Supprimer une facture
          </label>
        </div>
      </div>
    </div>
  );
};

export default Facturation;
