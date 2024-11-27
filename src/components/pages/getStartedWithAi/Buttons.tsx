"use client";
import { resetJobPost } from "@/redux/features/jobpost/jobPostSlice";
import {
  resetActiveState,
  setActiveJobDetailsAccordion,
  setJobPostErrors,
  setWithAiJobPostActiveStage,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const NextButtonText = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [show, setShow] = useState(false);

  // job post details variables
  const projectType = useSelector(
    (state: RootState) => state.jobPosting.projectType
  );
  const jobBudget = useSelector(
    (state: RootState) => state.jobPosting.jobBudget
  );
  const jobDescription = useSelector(
    (state: RootState) => state.jobPosting.jobDescription
  );

  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.withAiActiveStage
  );

  const handleNext = () => {
    // VALIDATE DESCRIPTION COMPONENT OF GET STARTED WITH AI AND CHANGE ACTIVE STAGE
    if (activeStage === "DESCRIPTION" && !jobDescription) {
      dispatch(
        setJobPostErrors({
          field: "DESCRIPTION",
          message: "Discription is required!",
        })
      );
      return;
    }

    if (activeStage === "DESCRIPTION" && jobDescription) {
      // currently show alert for development purpose
      dispatch(setWithAiJobPostActiveStage("BUDGET"));
      dispatch(setJobPostErrors(null));
    }

    // VALIDATE BUDGET COMPONENT OF GET STARTED WITH AI AND CHANGE ACTIVE STAGE
    if (activeStage === "BUDGET") {
      router.push("/job-post-review");
    }
  };

  return (
    <>
      <button className="btn-large fs-md btn-bg-blue" onClick={handleNext}>
        Continue
      </button>
    </>
  );
};

export const PreviousButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.withAiActiveStage
  );
  const handlePrev = () => {
    switch (activeStage) {
      case "JOB_DETAILS":
        // have to reset everything
        dispatch(setJobPostErrors(null));
        dispatch(resetJobPost("RESET"));
        dispatch(resetActiveState("RESET"));
        router.push("/");
      case "DESCRIPTION":
        dispatch(setWithAiJobPostActiveStage("JOB_DETAILS"));
        dispatch(setActiveJobDetailsAccordion(null));
        return;
      case "BUDGET":
        dispatch(setWithAiJobPostActiveStage("DESCRIPTION"));
        return;
      default:
        return;
    }
  };
  return (
    <button
      className="btn-large fs-md bg-transparent hover:bg-transparent text-[#005AFF]"
      onClick={handlePrev}
    >
      Back
    </button>
  );
};
