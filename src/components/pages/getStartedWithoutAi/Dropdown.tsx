"use client";
import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import {
  setJobPostJobDuration,
  setJobPostJobExperienceLevel,
  setJobPostJobScale,
  setJobPostWorkingSchedule,
} from "@/redux/features/jobpost/jobPostSlice";
import {
  setActiveExperienceLavel,
  setActiveJobDuration,
  setActiveJobScale,
  setActiveJobScope,
  setActiveWorkingSchedule,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import {
  jobDuration,
  jobExperience,
  jobScale,
  workingSchedule,
} from "@/staticData/JobPost";
import { useDispatch, useSelector } from "react-redux";
import { ActiveCheckboxSVG, InActiveCheckboxSVG } from "./Icons";

export const JobScale = () => {
  const dispatch = useDispatch();
  const { activeJobScope, activeJobScale } = useSelector(
    (state: RootState) => state.jobPostingStages
  );
  const matchedJobScale = jobScale.find((item) => item.type === activeJobScale);

  const expand = activeJobScope === "JOB_SCALE";

  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() => dispatch(setActiveJobScope(expand ? null : "JOB_SCALE"))}
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        <div>
          {
            <>
              <h4 className="jobpost-details-label">
                {matchedJobScale?.label}
              </h4>
              <p className="jobpost-details-des">{matchedJobScale?.des}</p>
            </>
          }
        </div>

        <DownArrowSVG className={` ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {jobScale.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeJobScale === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostJobScale(item.label));
                  dispatch(setActiveJobScale(item.type));
                }}
              >
                <InActiveCheckboxSVG />
              </button>
            )}
            <div>
              <h4 className="jobpost-details-label">{item.label}</h4>
              <p className="jobpost-details-des">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ====== job duration =====
export const JobDuration = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeJobDuration = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobDuration
  );
  const filteredItem = jobDuration.find(
    (item) => item.type === activeJobDuration
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "JOB_DURATION";
  console.log(activeJobDuration);
  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() =>
          dispatch(setActiveJobScope(expand ? null : "JOB_DURATION"))
        }
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        {
          <h4 className="jobpost-details-label">
            {expand ? "How long will your work take?" : filteredItem?.label}
          </h4>
        }
        <DownArrowSVG className={`  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={` flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {jobDuration.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeJobDuration === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostJobDuration(item.label));
                  dispatch(setActiveJobDuration(item.type));
                }}
              >
                <InActiveCheckboxSVG />
              </button>
            )}
            <h5 className="fs-md">{item.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

//   ===== job experience level ===========
export const JobExperienceLavel = () => {
  const activeJobExperience = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobExperience
  );
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );

  const filteredItem = jobExperience.find(
    (item) => item.type === activeJobExperience
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "JOB_EXPERIENCE";
  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() =>
          dispatch(setActiveJobScope(expand ? null : "JOB_EXPERIENCE"))
        }
        className="cursor-pointer flex items-center gap-1 justify-between"
      >
        <div>
          {expand ? (
            <>
              <h4 className="jobpost-details-label">
                What level of experience will it need?
              </h4>
              <p className="jobpost-details-des">
                This won&apos;t restrict any proposals, but helps match
                expertise to your budget.
              </p>
            </>
          ) : (
            <h4 className="jobpost-details-label">{filteredItem?.label}</h4>
          )}
        </div>
        <DownArrowSVG className={` ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {jobExperience.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeJobExperience === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostJobExperienceLevel(item.label));
                  dispatch(setActiveExperienceLavel(item.type));
                }}
              >
                <InActiveCheckboxSVG />
              </button>
            )}
            <div>
              <h4 className="jobpost-details-label">{item.label}</h4>
              <p className="jobpost-details-des">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//   ======= job work schedule =======

export const JobWorkSchedule = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeWorkingSchedule = useSelector(
    (state: RootState) => state.jobPostingStages.activeWorkingSchedule
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "JOB_WORKING_SCHEDULE";
  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() =>
          dispatch(setActiveJobScope(expand ? null : "JOB_WORKING_SCHEDULE"))
        }
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        {expand ? (
          <>
            <div>
              <h4 className="jobpost-details-label">
                Is this job a contract-to-hire opportunity?
              </h4>
              <p className="jobpost-details-des">
                This helps set expectations with talent and won&apos;t restrict
                who can submit proposals.
              </p>
            </div>
          </>
        ) : (
          <h4 className="jobpost-details-label">
            Contract-to-hire opportunity
          </h4>
        )}

        <DownArrowSVG className={`  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={` flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {workingSchedule.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeWorkingSchedule === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostWorkingSchedule(item.label));
                  dispatch(setActiveWorkingSchedule(item.type));
                }}
              >
                <InActiveCheckboxSVG />
              </button>
            )}
            <h5 className="fs-md">{item.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
