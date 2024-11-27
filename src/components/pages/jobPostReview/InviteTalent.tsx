"use client";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";

const InviteTalent = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeWorkingSchedule = useSelector(
    (state: RootState) => state.jobPostingStages.activeWorkingSchedule
  );
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);

  return (
    <div className={`job-scope-dropdown !px-0 !py-0 !border-none `}>
      <div
        onClick={() => setExpand(!expand)}
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        <div className="w-[80%]">
          <h4 className="fs-lg-lh-md mb-1.5">Invite talent (optional)</h4>
          <p className="fs-base">Request specific freelancers or agencies</p>
        </div>
        <DownArrowSVG className={`duration-300  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={` flex flex-col gap-2.5 mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[9999px] border border-[#005aff1a] mt-[18px] rounded-[20px] bg-[#005aff05] p-4 2xl:p-5"
        }`}
      >
        <div>
          <h4 className="fs-lg-lh-md">
            Invite talent you&apos;ve worked with before
          </h4>
        </div>
        <input
          placeholder="Select freelancers and agencies"
          className="w-full max-w-[1000px] outline-none focus:outline-none py-[14.5px] border  border-[#005aff1a] px-[10px] rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default InviteTalent;
