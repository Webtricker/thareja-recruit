"use client";
import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import {
  setActiveJobDetailsAccordion,
  setReworkPrevJobPost,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReworkPrevJobPost = () => {
  const reworkPrevJobPost = useSelector(
    (state: RootState) => state.jobPostingStages.reworkPrevJobPost
  );
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobDetailsAccordion
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "REWORK_PREVIOUS_POST";
  return (
    <div
      className={`job-scope-dropdown ${
        expand
          ? "bg-[#005aff05] !p-[28px]"
          : "!py-[18px] !px-0 !border-t-0 !border-l-0 !border-r-0 !rounded-none"
      }`}
    >
      <div
        onClick={() =>
          dispatch(
            setActiveJobDetailsAccordion(expand ? null : "REWORK_PREVIOUS_POST")
          )
        }
        className="flex items-center gap-4 justify-between"
      >
        <h4 className="jobpost-details-label">
          I want to rework a previous job post
        </h4>

        <DownArrowSVG className={` ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => {
              dispatch(setReworkPrevJobPost(true));
            }}
          >
            <ActiveInActiveCheckboxes
              key="REWORK_PREV_POST_AGREE"
              className="max-w-6"
              active={reworkPrevJobPost}
            />
          </button>
          <h4 className="jobpost-details-label">Yes, I want to.</h4>
        </div>
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => {
              dispatch(setReworkPrevJobPost(false));
            }}
          >
            <ActiveInActiveCheckboxes
              key="REWORK_PREV_POST_DISAGREE"
              className="max-w-6"
              active={reworkPrevJobPost ? false : true}
            />
          </button>
          <h4 className="jobpost-details-label">No, not at this time</h4>
        </div>
      </div>
    </div>
  );
};

export default ReworkPrevJobPost;
