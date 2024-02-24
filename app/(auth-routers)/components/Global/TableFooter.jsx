import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import LeftArrow from "@/public/icons/arrowleft.svg";
import RightArrow from "@/public/icons/arrowright.svg";
import Image from "next/image";
const TableFooter = ({
  setItemPerPage,
  data,
  pagename,
  currentPage,
  onPageChange,
  itemsPerPage,
}) => {
  const [calcuPages, setCalcuPages] = useState();
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setCalcuPages(totalPages);
  }, [itemsPerPage, totalPages]);

  function changePageItem(value) {
    if (data.length < value) {
      setItemPerPage(data.length);
    } else {
      setItemPerPage(value);
    }
  }
  function changeNextPage(value) {
    if (value > totalPages) {
      onPageChange(1);
    } else {
      onPageChange(value);
    }
  }

  return (
    <footer className="mt-3">
      <div className="w-full md:flex justify-between items-center min-h-[50px] border-t ">
        <div className="flex justify-start items-center gap-1">
          <div>
            <select
              className="px-1  py-0.5  rounded-md bg-gray-300"
              onChange={(e) => changePageItem(e.target.value)}
            >
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div>
            <p className="text-sm ">
              <span className="text-slate-400">{pagename} par page</span> 1-
              {itemsPerPage} of {data?.length} {pagename}
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-1 mt-3 md:mt-0">
          <div>
            <select
              className="px-1  py-0.5  rounded-md bg-gray-300"
              onChange={(e) => changeNextPage(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <p className="text-sm ">
              of {calcuPages === 0 ? 1 : calcuPages} pages
            </p>
          </div>
          <div className="flex items-center justify-end gap-4 ml-3">
            <Image
              src={LeftArrow}
              width={15}
              height={15}
              className={
                currentPage === 1
                  ? "p-1 cursor-not-allowed"
                  : "p-1 cursor-pointer"
              }
              disabled={currentPage === 1}
              onClick={() => {
                if (currentPage > 1) {
                  onPageChange(currentPage - 1);
                }
              }}
            />
            <Image
              src={RightArrow}
              width={15}
              height={15}
              disabled={currentPage === totalPages}
              onClick={() => {
                if (currentPage < totalPages) {
                  onPageChange(currentPage + 1);
                }
              }}
              className={
                currentPage === totalPages
                  ? "p-1 cursor-not-allowed"
                  : "p-1 cursor-pointer"
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TableFooter;
