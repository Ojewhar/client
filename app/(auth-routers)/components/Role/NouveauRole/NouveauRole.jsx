"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sort from "@/public/icons/sort.svg";
import Search from "@/public/icons/Search.svg";
import { Input } from "@/components/ui/input";
import { TableData } from "@/app/data/TableData";
import NoCart from "@/app/Shared/NoCart";
import { Button } from "@/components/ui/button";
import { Filter, PlusIcon, SquarePen, Trash2 } from "lucide-react";
import axios from "axios";
import Loader from "@/app/Shared/Loader";
import { useRouter } from "next/navigation";
import { pageItems } from "@/app/data/PageItem";
import TableFooter from "../../Global/TableFooter";
import FilterTableData from "../../Global/FilterTableData";
import CatalogueProduits from "./Cardes/CatalogueProduits";
import Revendeurs from "./Cardes/Revendeurs";
import Commandes from "./Cardes/Commandes";
import Equipe from "./Cardes/Equipe";
import Roles from "./Cardes/Roles";
import Marque from "./Cardes/Marque";
import Facturation from "./Cardes/Facturation";
import Dashboards from "./Cardes/Dashboards";

const NouveauRole = () => {
  return (
    <section>
      <div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <h1 className="font-semibold text-xl mb-2 md:mb-0">Nom du rôle</h1>
          <div className="flex justify-end gap-4 items-center">
            <Button className="text-white px-5 bg-red-500 hover:bg-red-400 rounded-xl font-normal">
              Supprimer
            </Button>
            <Button className="text-white px-12 rounded-xl font-normal">
              Créer
            </Button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <CatalogueProduits />
        <Revendeurs />
        <Commandes />
        <Equipe />
        <Roles />
        <Marque />
        <Facturation />
        <Dashboards />
      </div>
    </section>
  );
};

export default NouveauRole;
