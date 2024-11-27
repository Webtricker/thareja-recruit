"use client";
import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import DiamondSVG from "@/components/shared/icons/DiamondSVG";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";
import AddCoWorkers from "./AddCoWorkers";
import WhoCanSeeYourJob from "./WhoCanSeeYourJob";

const JobPostPreferences = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeWorkingSchedule = useSelector(
    (state: RootState) => state.jobPostingStages.activeWorkingSchedule
  );
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const [takeAdvice, setTakeAdvice] = useState(false);

  return (
    <div className={`job-scope-dropdown !px-0 !py-0 !border-none `}>
      <div
        onClick={() => setExpand(!expand)}
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        <div className="w-[80%]">
          <h4 className="fs-lg-lh-md mb-1.5">
            Job Post preferences (optional)
          </h4>
          <p className="fs-base text-[#525966]">
            Adjust visibility and add coworkers
          </p>
        </div>
        <DownArrowSVG className={`duration-300  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-6 lg:items-center justify-between mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[9999px] border border-[#005aff1a] mt-[18px] rounded-[20px] bg-[#005aff05] p-4 md:p-5 2xl:p-[30px]"
        }`}
      >
        {/* ======= left container ======== */}
        <div className="w-full max-w-[780px]  flex flex-col gap-[20px] md:gap-[30px]">
          <WhoCanSeeYourJob />
          <div>
            <p className="fs-md flex items-center gap-[15px] mb-4 md:mb-5">
              <DiamondSVG /> <span>Boost your jobs visibility</span>
            </p>
            <p className="fs-md ">
              We’ll feature your job and top talent will receive special
              discounts to work on your project.
            </p>
          </div>
          <p className="fs-md flex items-center gap-[15px]">
            <button onClick={() => setTakeAdvice(!takeAdvice)}>
              <SquareActiveInactiveCheckboxes active={takeAdvice} />
            </button>{" "}
            <span>Boost your jobs visibility</span>
          </p>
        </div>
        {/* ======= right container ======== */}
        <div className="w-full lg:max-w-[518px] ">
          <AddCoWorkers />
        </div>
      </div>
    </div>
  );
};

export default JobPostPreferences;
