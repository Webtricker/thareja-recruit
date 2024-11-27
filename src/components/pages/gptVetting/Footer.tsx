"use client";

import React, { useState } from "react";
import JobsPagination from "@/components/shared/pagination/JobsPagination";

interface JobsPaginationProps {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
}

const Footer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10; // Example total page count, adjust as needed

  return (
    <div className="flex justify-center lg:gap-12 items-center py-4">
      <JobsPagination
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Footer;
