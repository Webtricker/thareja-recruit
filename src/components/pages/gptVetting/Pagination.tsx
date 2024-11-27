"use client";
import ContentPagination from "@/components/shared/pagination/ContentPagination";
import { useState } from "react";

const Pagination = () => {
  const pagination = true; // later we will the value .
  const totalPage = 10; // later we will the value .
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <ContentPagination
      className="pb-5"
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPage={totalPage}
    />
  );
};

export default Pagination;
