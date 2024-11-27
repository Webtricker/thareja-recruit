"use client";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";
import WriteYourOwnQuestion from "./WriteYourOwnQuestion";

const ReviewScreeningQuestions = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeWorkingSchedule = useSelector(
    (state: RootState) => state.jobPostingStages.activeWorkingSchedule
  );
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const [expandTextArea, setExpandTextArea] = useState(false);

  return (
    <div className={`job-scope-dropdown !px-0 !py-0 !border-none `}>
      <div
        onClick={() => setExpand(!expand)}
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        <div className="w-[80%]">
          <h4 className="fs-lg-lh-md mb-1.5">Screening questions (optional)</h4>
          <p className="fs-base text-[#525966]">Narrow down your candidates</p>
        </div>
        <DownArrowSVG className={`duration-300  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={` flex flex-col gap-5 mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[9999px] border border-[#005aff1a] mt-[18px] rounded-[20px] bg-[#005aff05] p-4 md:p-5 2xl:p-[30px]"
        }`}
      >
        <h4 className="fs-lg-lh-md">Select or add up to 5 questions</h4>
        <WriteYourOwnQuestion />
      </div>
    </div>
  );
};

export default ReviewScreeningQuestions;
