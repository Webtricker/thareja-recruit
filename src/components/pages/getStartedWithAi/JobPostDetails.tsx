"use client";
import {
  setJobPostErrors,
  setWithAiJobPostActiveStage,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import EditingDrafPostAccordion from "./EditingDrafPostAccordion";
import JobTypeAccordion from "./JobTypeAccordion";
import ReworkPrevJobPost from "./ReworkPrevJobPost";

const JobPostDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const projectType = useSelector(
    (state: RootState) => state.jobPosting.projectType
  );

  const handleContinue = () => {
    if (!projectType) return;
    dispatch(setWithAiJobPostActiveStage("DESCRIPTION"));
    dispatch(setJobPostErrors(null));
  };
  return (
    <div className="w-full max-w-[894px] mx-auto block">
      <h1 className="text-4xl  lg:text-5xl 2xl:text-6xl tracking-[-1.8px] text-center mb-[42px]">
        How can we help you get started?
      </h1>
      <div className=" job-details-accordion-container">
        <JobTypeAccordion />
        <EditingDrafPostAccordion />
        <ReworkPrevJobPost />

        <div className="w-full flex items-center justify-end mt-[48px]">
          <button
            onClick={() => router.push("/")}
            className="btn-large fs-md bg-transparent hover:bg-transparent text-[#005AFF]"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className={`btn-large fs-md btn-bg-blue ${
              !projectType &&
              "!bg-[#dde3e766] pointer-events-none !text-[#525966cc]"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostDetails;

// change
