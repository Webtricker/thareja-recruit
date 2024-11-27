"use client";
import Checkbox from "@/components/shared/common/Checkbox";
import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { setJobPostProjectType } from "@/redux/features/jobpost/jobPostSlice";
import {
  setActiveJobDetailsAccordion,
  setActiveProjectType,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import Image from "next/image";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const JobTypeAccordion = () => {
  const activePostType = useSelector(
    (state: RootState) => state.jobPostingStages.activeProjectType
  );
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobDetailsAccordion
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "PROJECT_TYPE";
  return (
    <div
      className={`job-scope-dropdown ${
        expand
          ? "bg-[#005aff05] !p-3 !pt-7 "
          : "!py-[18px] !px-0 !border-t-0 !border-l-0 !border-r-0 !rounded-none"
      }
      ${activeDropDown === "DRAFT_EDITING" && "!border-none"}
      `}
    >
      <div
        onClick={() =>
          dispatch(setActiveJobDetailsAccordion(expand ? null : "PROJECT_TYPE"))
        }
        className="flex items-center gap-4 justify-between"
      >
        <h4 className={`jobpost-details-label ${expand && "ml-4"}`}>
          I want to create a new job post
        </h4>

        <DownArrowSVG className={` ${expand && "rotate-180 mr-4"}`} />
      </div>
      <div
        className={`grid md:grid-cols-2 md:gap-[25px] lg:gap-[42px]  mt-0 h-auto  max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-7 p-4"
        }`}
      >
        <div
          onClick={() => {
            dispatch(setActiveProjectType("LONG_TERM_PROJECT"));
            dispatch(setJobPostProjectType("Long term project"));
          }}
          className={`mb-5 md:mb-0 py-[30px] md:py-[20px] lg:py-[30px] px-[30px] md:px-[20px] lg:px-[40px]  w-full bg-white rounded-[20px] border  ${
            activePostType === "LONG_TERM_PROJECT"
              ? "job-post-card-select-shadow border-transparent"
              : "border-[#E6E6E6] "
          } `}
        >
          <div className="gap-[10px] mb-[20px] xl:mb-[26px] flex items-start justify-between">
            {/* client logo */}
            <Image
              alt="project icon"
              src="/svgs/long-term-project.svg"
              width={93}
              height={83}
              className="w-[55px] h-[50px] lg:w-[65px] lg:h-[60px] xl:w-[93.75px] xl:h-[83.56px]"
            />
            <Checkbox
              active={activePostType === "LONG_TERM_PROJECT"}
              key="LONG_TERM_PROJECT"
            />
          </div>
          <h4 className="fs-md mb-2">Long term project</h4>
          <p className="fs-base font-light">
            More than thirty hours a week and/or will be longer than three
            months.
          </p>
        </div>
        {/* short term project */}
        <div
          onClick={() => {
            dispatch(setActiveProjectType("SHORT_TERM_PROJECT"));
            dispatch(setJobPostProjectType("Short term project"));
          }}
          className={`py-[30px] md:py-[20px] lg:py-[30px] px-[30px] md:px-[20px] lg:px-[40px]  w-full bg-white rounded-[20px] border  ${
            activePostType === "SHORT_TERM_PROJECT"
              ? "job-post-card-select-shadow border-transparent"
              : "border-[#E6E6E6] "
          } `}
        >
          <div className="gap-[10px] mb-[20px] xl:mb-[26px] flex items-start justify-between">
            {/* client logo */}
            <Image
              alt="project icon"
              src="/svgs/short-term-project.svg"
              width={93}
              height={83}
              className="w-[55px] h-[50px] lg:w-[65px] lg:h-[60px] xl:w-[93.75px] xl:h-[83.56px]"
            />
            <Checkbox
              active={activePostType === "SHORT_TERM_PROJECT"}
              key="SHORT_TERM_PROJECT"
            />
          </div>
          <h4 className="fs-md mb-2">Short term project</h4>
          <p className="fs-base font-light">
            Less than thirty hours a week and/or will be shorter than three
            months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobTypeAccordion;
