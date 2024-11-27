import JobsPagination from "@/components/shared/pagination/JobsPagination";
import { useState } from "react";
import { YellowFullStarSVG } from "./Icons";

const CompletedJobDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  return (
    <>
      {/* ============== new skills ========= */}
      <h2 className="text-[#005AFF] w-full fs-4xl mb-5">
        Pillar Website Graphics
      </h2>
      <div className="w-full flex items-center gap-3 mb-2">
        <div className="flex">
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
        </div>
        <span className="fs-base ">4.96</span>
      </div>
      <p className="text-[#A1A5AD] fs-base ">Apr 8, 2024 - May 3, 2024</p>

      <p className="text-[#525966] fs-base my-4">
        &quot;Amazing designer, will use again!&quot;
      </p>
      <div className="flex w-full max-w-[474px] gap-3 2xl:gap-[56px] ">
        <p className="text-[#525966] fs-base">$500.00</p>
        <span className="w-[1px] h-[23px] bg-[#DDE3E7]"></span>
        <p className="text-[#525966] fs-base">$50.00 /hr</p>
        <span className="w-[1px] h-[23px] bg-[#DDE3E7]"></span>
        <p className="text-[#525966] fs-base">293 hours</p>
      </div>

      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-5 md:my-6 lg:my-8 bg-[#0059ff33]"></span>
      {/* ==========  new skills =============== */}
      {/* ============== new skills ========= */}
      <h2 className="text-[#005AFF] w-full fs-4xl mb-5">
        UI & UX MVP Design for SaaS platform
      </h2>
      <div className="w-full flex items-center gap-3 mb-2">
        <div className="flex">
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
        </div>
        <span className="fs-base ">500</span>
      </div>
      <p className="text-[#A1A5AD] fs-base ">Apr 8, 2024 - May 3, 2024</p>

      <p className="text-[#525966] fs-base my-4">No Feedback Given!</p>
      <div className="flex w-full max-w-[474px] gap-3 lg:gap-[56px]  ">
        <p className="text-[#525966] fs-base">$500.00</p>
        <span className="w-[1px] h-[23px] bg-[#DDE3E7]"></span>
        <p className="text-[#525966] fs-base">$500.00</p>
      </div>

      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-5 md:my-6 lg:my-8 bg-[#0059ff33]"></span>
      {/* ============== new skills ========= */}
      <h2 className="text-[#005AFF] w-full fs-4xl mb-5">
        Pillar Website Graphics
      </h2>
      <div className="w-full flex items-center gap-3 mb-2">
        <div className="flex">
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
          <YellowFullStarSVG />
        </div>
        <span className="fs-base ">4.96</span>
      </div>
      <p className="text-[#A1A5AD] fs-base ">Apr 8, 2024 - May 3, 2024</p>

      <p className="text-[#525966] fs-base my-4">
        &quot;Taras was an incredible designer, helped solve problems for us
        before we even knew what they were. Already booked on other
        contracts!&quot;
      </p>
      <div className="flex w-full max-w-[474px] gap-3 2xl:gap-[56px] ">
        <p className="text-[#525966] fs-base">$500.00</p>
        <span className="w-[1px] h-[23px] bg-[#DDE3E7]"></span>
        <p className="text-[#525966] fs-base">$50.00 /hr</p>
        <span className="w-[1px] h-[23px] bg-[#DDE3E7]"></span>
        <p className="text-[#525966] fs-base">293 hours</p>
      </div>

      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-5 md:my-6 lg:my-8 bg-[#0059ff33] max-w-[768px]"></span>

      <JobsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default CompletedJobDetails;
