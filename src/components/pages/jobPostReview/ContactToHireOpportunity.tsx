"use client";
import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setJobPostWorkingSchedule } from "@/redux/features/jobpost/jobPostSlice";
import { setActiveWorkingSchedule } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { workingSchedule } from "@/staticData/JobPost";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";

const ContactToHireOpportunity = () => {
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
            Contract-to-hire opportunity (optional)
          </h4>
          <p className="fs-base text-[#525966]">
            Let talent know this job could become a full-time role
          </p>
        </div>
        <DownArrowSVG className={`duration-300  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`text-[#525966] flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[9999px] border border-[#005aff1a] mt-[18px] rounded-[20px] bg-[#005aff05] p-4 md:p-5 2xl:p-[30px]"
        }`}
      >
        <div>
          <h4 className="text-[#30353E] fs-lg-lh-lg mb-[12px]">
            Is this job a contract-to-hire opportunity?
          </h4>
          <p className="fs-base ">
            This helps set expectations with talent and won&apos;t restrict who
            can submit proposals.
          </p>
        </div>

        {workingSchedule.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            <button
              onClick={() => {
                dispatch(setJobPostWorkingSchedule(item.label));
                dispatch(setActiveWorkingSchedule(item.type));
              }}
            >
              <LinearGradientRoundedCheckbox
                className="!max-w-6"
                active={activeWorkingSchedule === item.type}
              />
            </button>
            {item.type === "FULL_TIME" ? (
              <div className="w-full">
                <h4 className="fs-md mb-1.5 max-w-[624px]">
                  Yes, this could become full time
                </h4>
                <h5 className="fs-base">
                  {item.label}{" "}
                  <Link href="#" className="text-[#005AFF]">
                    Learn more
                  </Link>
                </h5>
              </div>
            ) : (
              <h5 className="fs-md">{item.label}</h5>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactToHireOpportunity;
