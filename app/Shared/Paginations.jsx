"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

function Paginations({ data, currentPage, onPageChange }) {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <Pagination>
      {totalPages === 1 ? (
        ""
      ) : (
        <PaginationContent>
          <PaginationItem>
            <button
              className={
                currentPage === 1
                  ? "bg-slate-300 rounded-md px-4 text-slate-700 py-1.5"
                  : "bg-black rounded-md px-4 text-white py-1.5"
              }
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              href="#"
            >
              Prev
            </button>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              href="#"
              isActive={currentPage === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <button
              onClick={() => onPageChange(2)}
              disabled={currentPage === 2 || totalPages <= 1}
              href="#"
              className={
                currentPage === 2
                  ? "px-4 py-1.5 bg-slate-100"
                  : "px-4 py-1.5 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-900"
              }
            >
              2
            </button>
          </PaginationItem>
          <PaginationItem>
            <button
              onClick={() => onPageChange(3)}
              disabled={currentPage === 3 || totalPages <= 2}
              className={
                currentPage === 3
                  ? "px-4 py-1.5 bg-slate-100"
                  : "px-4 py-1.5 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-900"
              }
            >
              3
            </button>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              href="#"
              className={
                currentPage === totalPages
                  ? "bg-slate-300 rounded-md px-4 text-slate-700 py-1.5"
                  : "bg-black rounded-md px-4 text-white py-1.5"
              }
            >
              Next
            </button>
          </PaginationItem>
        </PaginationContent>
      )}
    </Pagination>
  );
}
export default Paginations;
