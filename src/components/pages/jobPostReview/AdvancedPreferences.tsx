"use client";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";
import AmountEarned from "./AmountEarned";
import EnglishLevel from "./EnglishLevel";
import HireDate from "./HireDate";
import HoursPerWeek from "./HoursPerWeek";
import Location from "./Location";
import NumberOfProfessionalsNeeded from "./NumberOfProfessionalsNeeded";
import TalentType from "./TalentType";

const AdvancedPreferences = () => {
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
          <h4 className="fs-lg-lh-md mb-1.5">
            Advanced preferences (optional)
          </h4>
          <p className="fs-base">Hours per week, hire date, and more</p>
        </div>
        <DownArrowSVG className={`duration-300  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col-reverse gap-5 lg:flex-row 2xl:gap-10 justify-between mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[9999px] border border-[#005aff1a] mt-[18px] rounded-[20px] bg-[#005aff05] p-4 md:p-5 2xl:p-[30px]"
        }`}
      >
        <div className="w-full 2xl:max-w-[927.33px]">
          <div className="w-full flex gap-[22px] 2xl:gap-5 flex-col 2xl:flex-row justify-between">
            <EnglishLevel />
            <HireDate />
            <HoursPerWeek />
          </div>
          <div className="mt-[22px] w-full 2xl:max-w-[549px] ">
            <TalentType />
            <Location />
          </div>
        </div>
        <div className=" w-full 2xl:max-w-[382px]">
          <NumberOfProfessionalsNeeded />
          <AmountEarned />
        </div>
      </div>
    </div>
  );
};

export default AdvancedPreferences;
