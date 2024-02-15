"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sort from "@/public/icons/sort.svg";
import Search from "@/public/icons/Search.svg";
import { Input } from "@/components/ui/input";
import NoCart from "@/app/Shared/NoCart";
import { Button } from "@/components/ui/button";
import { Filter, PlusIcon, SquarePen, Trash2 } from "lucide-react";
import axios from "axios";
import Loader from "@/app/Shared/Loader";
import { pageItems } from "@/app/data/PageItem";
import TableFooter from "../Global/TableFooter";
import FilterTableData from "../Global/FilterTableData";
import EquipeAdd from "./RoleAdd";
import RoleDelete from "./RoleDelete";
import RoleUpdate from "./RoleUpdate";
import RoleAdd from "./RoleAdd";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RoleTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [showModel, setShowModel] = useState(false);
  const [modelType, setModelType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemPerPage] = useState(pageItems);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortedData = sortData(data, sortConfig);
    setCurrentData(sortedData.slice(startIndex, endIndex));
  }, [data, itemsPerPage, currentPage, sortConfig]);

  // filter data by search
  function filterData(value) {
    if (value) {
      const v = value.toLowerCase();
      const tdata = data?.filter((item) =>
        item?.title?.toLowerCase().includes(v)
      );
      setCurrentData(tdata);
    } else {
      setCurrentData(currentData);
    }
    setCurrentPage(1);
  }
  // Function to handle sorting
  const makeSortArr = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Function to sort the data
  const sortData = (currentData, sortConfig) => {
    if (!sortConfig.key) return currentData;

    const sortedData = [...currentData].sort((a, b) => {
      const keyA = String(a[sortConfig.key]);
      const keyB = String(b[sortConfig.key]);

      if (sortConfig.direction === "ascending") {
        return keyA.localeCompare(keyB);
      } else {
        return keyB.localeCompare(keyA);
      }
    });

    return sortedData;
  };

  useEffect(() => {
    async function getProductData() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setData(res.data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getProductData();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // show selected item and store
  function editSingleData(item) {
    setShowModel(true);
    setSelectedItem(item);
    setModelType("update");
  }

  // add data for marque button
  function addProductData() {
    setShowModel(true);
    setModelType("add");
  }
  // add data for marque button
  function deleteProductData(item) {
    setShowModel(true);
    setSelectedItem(item);
    setModelType("delete");
  }
  const router = useRouter();

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-end items-center gap-5 mb-4">
            <Button
              className="text-white  rounded-xl font-normal"
              onClick={addProductData}
            >
              <PlusIcon className="mr-2" />
              Ajouter un rôle
            </Button>
          </div>
          <div className="md:flex justify-between rounded-tr-xl rounded-tl-xl items-center bg-white dark:bg-gray-800 dark:text-white p-5">
            <h1 className="font-semibold text-xl mb-2 md:mb-0">Rôles</h1>
            <div className="mb-2 md:mb-0 flex gap-1 justify-end items-center">
              <div className=" relative  ">
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 outline-none"
                  onChange={(e) => filterData(e.target.value)}
                />
                <Image
                  src={Search}
                  alt="Search"
                  className=" absolute top-1/2 left-4 -translate-x-2 -translate-y-1/2"
                />
              </div>
              <FilterTableData />
            </div>
          </div>

          {currentData.length === 0 ? (
            <NoCart
              title="Aucune commande"
              desc="Cette marque n’a encore jamais reçue de commande."
              btntext="Commande"
              onClick={addProductData}
            />
          ) : (
            <div className="pt-5 rounded-br-xl rounded-bl-xl bg-white dark:bg-gray-700 dark:text-gray-400 p-5">
              <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs font-normal border-t border-b bg-white  dark:border-white text-gray-700 uppercase   dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Nom du rôle
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("title")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Membres rattachés
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("title")}
                          />
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData?.map((item) => {
                      return (
                        <tr
                          key={item.id}
                          className="bg-white dark:border-b  dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-3">
                            {/* <Image
                              src={item.thumbnail}
                              width={50}
                              height={50}
                              className="p-0.5 rounded-md "
                              alt={item.title}
                            /> */}
                          </td>
                          <td className="px-6 py-3">{item.title}</td>
                          <td className="px-6 py-3">{item.stock}</td>
                          <td className="px-6 py-3">
                            <div className="flex justify-end gap-4 items-center">
                              <Link
                                href={`/dashboard/roles/${item.id}`}
                                size={35}
                                className="text-yellow-900 hover:shadow-sm px-4 py-1 cursor-pointer bg-[#FFF2E2]  rounded-lg"
                              >
                                Modifier
                              </Link>
                              <button
                                onClick={() => deleteProductData(item)}
                                size={35}
                                className="text-red-800 hover:shadow-sm px-4 py-1 cursor-pointer bg-red-200 p-2 rounded-lg"
                              >
                                Supprimer
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-3"></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div>
                <TableFooter
                  data={data}
                  setItemPerPage={setItemPerPage}
                  pagename="factures"
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  itemsPerPage={itemsPerPage}
                />
              </div>
            </div>
          )}
          {modelType === "add" ? (
            <RoleAdd showModel={showModel} setShowModel={setShowModel} />
          ) : modelType === "update" ? (
            <RoleUpdate
              showModel={showModel}
              setShowModel={setShowModel}
              data={selectedItem}
            />
          ) : (
            <RoleDelete
              showModel={showModel}
              setShowModel={setShowModel}
              data={selectedItem}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default RoleTable;
