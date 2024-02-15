"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sort from "@/public/icons/sort.svg";
import Search from "@/public/icons/Search.svg";
import { Input } from "@/components/ui/input";
import { TableData } from "@/app/data/TableData";
import NoCart from "@/app/Shared/NoCart";
import { Button } from "@/components/ui/button";
import product from "@/public/images/dash1.svg";
import {
  Delete,
  DeleteIcon,
  Edit,
  Filter,
  PlusIcon,
  SquarePen,
  Trash2,
} from "lucide-react";
import axios from "axios";
import Loader from "@/app/Shared/Loader";
import { useRouter } from "next/navigation";
import { pageItems } from "@/app/data/PageItem";
import TableFooter from "../Global/TableFooter";
import { DatePicker } from "@/app/Shared/DatePicker";
import FilterTableData from "../Global/FilterTableData";
import EquipeAdd from "./EquipeAdd";
import EquipeUpdate from "./EquipeUpdate";
import EquipeDelete from "./EquipeDelete";
import { BASE_URL } from "@/app/Services/config/url-manager";

const EquipeTable = () => {
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
    setCurrentData(sortedData?.slice(startIndex, endIndex));
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
        const res = await axios.get(`${BASE_URL}/api/form/getAllFormData`);
        setData(res.data);
        console.log(res.data);
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
  // add data for marque button
  function csvUpload() {
    router.push("/dashboard/admin/revendeurs/uploadcsv");
  }
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
              Nouvelle facture
            </Button>
          </div>
          <div className="md:flex justify-between rounded-tr-xl rounded-tl-xl items-center bg-white dark:bg-gray-800 dark:text-white p-5">
            <h1 className="font-semibold text-xl mb-2 md:mb-0">
              Registered Patientes
            </h1>
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
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Name
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("firstFormFName")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Email
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
                          Phone
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("price")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Request Data
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("stock")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          To Data
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("stock")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Main Cause
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
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
                            {item.firstFormFName + " " + item.firstFormLName}
                          </td>
                          <td className="px-6 py-3">{item.firstFormEmail}</td>
                          <td className="px-6 py-3">{item.firstFormMobile}</td>
                          <td className="px-6 py-3">{item.firstFormEmail}</td>
                          <td className="px-6 py-3">{item.toDate}</td>
                          <td className="px-6 py-3">
                            {item.switablityForCirtificate}
                          </td>

                          <td className="px-6 py-3">
                            <button
                              size={35}
                              className={`${
                                item.status === "pending"
                                  ? "text-yellow-600 bg-yellow-100"
                                  : item.status === "active"
                                  ? "text-green-600 bg-green-100"
                                  : "text-red-600 bg-green-red"
                              }  capitalize hover:shadow-sm px-4 w-[100px] py-1 cursor-pointer p-2 rounded-lg`}
                            >
                              {item.status}
                            </button>
                          </td>
                          <td className="px-6 py-3">
                            <div className="flex justify-end items-center gap-1">
                              <Edit
                                // onClick={() => deleteProductData(item)}
                                size={28}
                                className=" text-yellow-600 hover:shadow-sm p-1 cursor-pointer bg-yellow-100 rounded"
                              />
                              <Trash2
                                onClick={() => editSingleData(item)}
                                size={28}
                                className="text-red-600 hover:shadow-sm p-1 cursor-pointer bg-red-100"
                              />
                            </div>
                          </td>
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
            <EquipeAdd showModel={showModel} setShowModel={setShowModel} />
          ) : modelType === "update" ? (
            <EquipeUpdate
              showModel={showModel}
              setShowModel={setShowModel}
              data={selectedItem}
            />
          ) : (
            <EquipeDelete
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

export default EquipeTable;
