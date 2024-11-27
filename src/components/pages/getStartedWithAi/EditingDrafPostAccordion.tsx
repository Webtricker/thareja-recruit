"use client";
import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import {
  setActiveJobDetailsAccordion,
  setEditingJobPost,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
// import { useState } from "react";
import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import { useDispatch, useSelector } from "react-redux";

const EditingDrafPostAccordion = () => {
  const editingDrafPost = useSelector(
    (state: RootState) => state.jobPostingStages.editingDrafPost
  );
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobDetailsAccordion
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "DRAFT_EDITING";
  return (
    <div
      className={`job-scope-dropdown ${
        expand
          ? "bg-[#005aff05] !p-[28px] "
          : "!py-[18px] !px-0 !border-t-0 !border-l-0 !border-r-0 !rounded-none"
      }
        ${activeDropDown === "REWORK_PREVIOUS_POST" && "!border-none"}
      `}
    >
      <div
        onClick={() =>
          dispatch(
            setActiveJobDetailsAccordion(expand ? null : "DRAFT_EDITING")
          )
        }
        className="flex items-center gap-4 justify-between"
      >
        <h4 className="jobpost-details-label">
          I want to continue editing a draft
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
              dispatch(setEditingJobPost(true));
            }}
          >
            <ActiveInActiveCheckboxes
              key="EDITING_DRAFT_POST_AGREE"
              className="max-w-6"
              active={editingDrafPost}
            />
          </button>
          <h4 className="jobpost-details-label">Yes, I want to.</h4>
        </div>
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => {
              dispatch(setEditingJobPost(false));
            }}
          >
            <ActiveInActiveCheckboxes
              key="EDITING_DRAFT_POST_DISAGREE"
              className="max-w-6"
              active={editingDrafPost ? false : true}
            />
          </button>
          <h4 className="jobpost-details-label">No, not at this time</h4>
        </div>
      </div>
    </div>
  );
};

export default EditingDrafPostAccordion;
