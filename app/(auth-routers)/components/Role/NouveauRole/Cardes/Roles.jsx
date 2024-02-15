import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Roles = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold">Rôles</h2>

      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" border-b border-t ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5   "
                />{" "}
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Nom du droit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 font-normal">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5  "
                />
              </td>
              <td className="px-6 py-4 font-normal">
                Voir les différents rôles
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-normal">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5  "
                />
              </td>
              <td className="px-6 py-4 font-normal">
                Ajout/modifier et supprimer un rôle
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-normal">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5  "
                />
              </td>
              <td className="px-6 py-4 font-normal">Supprimer une commande</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
