import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import {
  setJobPostJobDuration,
  setJobPostJobExperienceLevel,
  setJobPostJobScale,
} from "@/redux/features/jobpost/jobPostSlice";
import {
  setActiveExperienceLavel,
  setActiveJobDuration,
  setActiveJobScale,
  setActiveJobScope,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { jobDuration, jobExperience, jobScale } from "@/staticData/JobPost";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";

// ====== Types ========
type SelectedJobScale = {
  type: "LARGE" | "MEDIUM" | "SMALL";
  label: string | null;
};

type SelectedJobDuration = {
  type: "LONG" | "MEDIUM" | "SHORT";
  label: string | null;
};

type SelectedJobExperience = {
  type: "ENTRY" | "INTERMEDIATE" | "EXPERT";
  label: string | null;
};

const EditJobScope = () => {
  const dispatch = useDispatch();

  // ==== REDUX DATA=====
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );

  // ====== JOB SCALE REQUIRED DATA ======
  const activeJobScale = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScale
  );
  const matchedJobScale = jobScale.find((item) => item.type === activeJobScale);

  const [selectedJobScale, setSelectedJobScale] =
    useState<SelectedJobScale | null>({
      type: activeJobScale,
      label: null,
    });

  // ====== JOB DURATION REQUIRED DATA ======
  const activeJobDuration = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobDuration
  );
  const filteredJobDuration = jobDuration.find(
    (item) => item.type === activeJobDuration
  );

  const [selectedJobDuration, setSelectedJobDuration] =
    useState<SelectedJobDuration | null>({
      type: activeJobDuration,
      label: null,
    });

  // ====== JOB EXPERIENCE REQUIRED DATA ======
  const activeJobExperience = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobExperience
  );

  const filteredJobExperience = jobExperience.find(
    (item) => item.type === activeJobExperience
  );

  const [selectedJobExperience, setSelectedJobExperience] =
    useState<SelectedJobExperience | null>({
      type: activeJobExperience,
      label: null,
    });

  // ======= Handlers ========
  const handleCloseModal = () => {
    // reset active states
    dispatch(setPostReviewActiveEditField(null));
    dispatch(setActiveJobScope(null));
  };
  const handleSaveData = () => {
    // save job scale updated data
    if (selectedJobScale?.label) {
      dispatch(setJobPostJobScale(selectedJobScale.label));
      dispatch(setActiveJobScale(selectedJobScale.type));
    }

    // save job duration updated data
    if (selectedJobDuration?.label) {
      dispatch(setJobPostJobDuration(selectedJobDuration.label));
      dispatch(setActiveJobDuration(selectedJobDuration.type));
    }

    // save job experience updated data
    if (selectedJobExperience?.label) {
      dispatch(setJobPostJobExperienceLevel(selectedJobExperience.label));
      dispatch(setActiveExperienceLavel(selectedJobExperience.type));
    }

    // reset active states
    dispatch(setPostReviewActiveEditField(null));
    dispatch(setActiveJobScope(null));
  };
  return (
    <div className="overflow-y-auto w-full max-w-[776px] max-h-[95%] min-h-[250px] py-[20px] h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="max-h-full  relative px-[20px] md:px-[50px] md:pl-[32px] md:py-[30px] w-full h-full">
        <JobReviewModalTitle handler={handleCloseModal} label="Edit scope" />
        <div className="flex flex-col gap-[28px] w-full mb-[30px] md:mb-[50px] 2xl:mb-[72px]">
          {/* ===== JOB SCALE===== */}
          <div
            className={`job-scope-dropdown ${
              activeDropDown === "JOB_SCALE" && "bg-[#005aff05]"
            }`}
          >
            <div
              onClick={() =>
                dispatch(
                  setActiveJobScope(
                    activeDropDown === "JOB_SCALE" ? null : "JOB_SCALE"
                  )
                )
              }
              className="cursor-pointer flex items-center gap-4 w-full justify-between"
            >
              <div className="w-[80%]">
                {
                  <>
                    <h4 className="fs-lg-lh-md mb-1.5">
                      {matchedJobScale?.label}
                    </h4>
                    <p className="fs-base">{matchedJobScale?.des}</p>
                  </>
                }
              </div>

              <DownArrowSVG
                className={` ${activeDropDown === "JOB_SCALE" && "rotate-180"}`}
              />
            </div>
            <div
              className={`flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
                activeDropDown === "JOB_SCALE" && "!max-h-[9999px] pt-[28px]"
              }`}
            >
              {jobScale.map((item) => (
                <div className="flex items-center gap-[10px]" key={item.type}>
                  <button
                    onClick={() => {
                      setSelectedJobScale({
                        type: item.type,
                        label: item.label,
                      });
                    }}
                  >
                    <LinearGradientRoundedCheckbox
                      active={selectedJobScale?.type === item.type}
                    />
                  </button>
                  <div>
                    <h4 className="fs-lg-lh-normal">{item.label}</h4>
                    <p className="fs-base">{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ===== JOB DURATION===== */}
          <div
            className={`job-scope-dropdown ${
              activeDropDown === "JOB_DURATION" && "bg-[#005aff05]"
            }`}
          >
            <div
              onClick={() =>
                dispatch(
                  setActiveJobScope(
                    activeDropDown === "JOB_DURATION" ? null : "JOB_DURATION"
                  )
                )
              }
              className="cursor-pointer flex items-center gap-4 justify-between"
            >
              {
                <h4 className="jobpost-details-label w-[80%]">
                  {activeDropDown === "JOB_DURATION"
                    ? "How long will your work take?"
                    : filteredJobDuration?.label}
                </h4>
              }
              <DownArrowSVG
                className={`  ${
                  activeDropDown === "JOB_DURATION" && "rotate-180"
                }`}
              />
            </div>
            <div
              className={` flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
                activeDropDown === "JOB_DURATION" && "!max-h-[9999px] pt-[28px]"
              }`}
            >
              {jobDuration.map((item) => (
                <div className="flex items-center gap-[10px]" key={item.type}>
                  <button
                    onClick={() => {
                      setSelectedJobDuration({
                        type: item.type,
                        label: item.label,
                      });
                    }}
                  >
                    <LinearGradientRoundedCheckbox
                      active={selectedJobDuration?.type === item.type}
                    />
                  </button>
                  <h5 className="fs-md">{item.label}</h5>
                </div>
              ))}
            </div>
          </div>
          {/* ===== JOB EXPERIENCE LAVEL===== */}
          <div
            className={`job-scope-dropdown ${
              activeDropDown === "JOB_EXPERIENCE" && "bg-[#005aff05]"
            }`}
          >
            <div
              onClick={() =>
                dispatch(
                  setActiveJobScope(
                    activeDropDown === "JOB_EXPERIENCE"
                      ? null
                      : "JOB_EXPERIENCE"
                  )
                )
              }
              className="cursor-pointer flex items-center gap-1 justify-between"
            >
              <div>
                {activeDropDown === "JOB_EXPERIENCE" ? (
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
                  <h4 className="jobpost-details-label">
                    {filteredJobExperience?.label}
                  </h4>
                )}
              </div>
              <DownArrowSVG
                className={` ${
                  activeDropDown === "JOB_EXPERIENCE" && "rotate-180"
                }`}
              />
            </div>
            <div
              className={`flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
                activeDropDown === "JOB_EXPERIENCE" &&
                "!max-h-[9999px] pt-[28px]"
              }`}
            >
              {jobExperience.map((item) => (
                <div className="flex items-center gap-[10px]" key={item.type}>
                  <button
                    onClick={() => {
                      setSelectedJobExperience({
                        type: item.type,
                        label: item.label,
                      });
                    }}
                  >
                    <LinearGradientRoundedCheckbox
                      active={selectedJobExperience?.type === item.type}
                    />
                  </button>
                  <div>
                    <h4 className="jobpost-details-label">{item.label}</h4>
                    <p className="jobpost-details-des">{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <JobReviewModalButtons
          key="EDIT_SCOPE_FIELD"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditJobScope;
