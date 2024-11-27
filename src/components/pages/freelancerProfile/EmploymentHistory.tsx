"use client";
import Link from "next/link";
import { useState } from "react";
const Card = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-full ">
      <h3 className="fs-xl-lh-lg">Senior UX/UI designer | Upwork</h3>
      <p className="fs-md my-2.5">March 2023 - Present</p>
      <p className="fs-md">
        As a Senior UX/UI Designer specializing in AI projects, I lead the
        design efforts to create intelligent, intuitive, and user-friendly
        interfaces for AI-powered applications. My role involves collaborating
        with cross-functional teams, including AI engineers and...
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#005AFF] ml-2"
        >
          {showMore ? "less" : "more"}
        </button>
      </p>
    </div>
  );
};

//  ============= root component =================
const EmploymentHistory = () => {
  return (
    <div className="mt-10 md:mt-[50px] w-full  p-5 py-6 md:p-[40px] lg:p-[50px] border border-[#005aff08 ] rounded-[20px] ">
      <div className="w-full flex gap-5 flex-wrap items-center justify-between">
        <h2 className="fs-4xl ">Employment history</h2>
        <Link href="#" className="fs-base text-[#005AFF]">
          View More
        </Link>
      </div>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>
      <Card />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>
      <Card />
    </div>
  );
};

export default EmploymentHistory;
