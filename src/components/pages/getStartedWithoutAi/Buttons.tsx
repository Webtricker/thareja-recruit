import { resetJobPost } from "@/redux/features/jobpost/jobPostSlice";
import {
  resetActiveState,
  setActiveJobScope,
  setJobPostActiveStage,
  setJobPostErrors,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export const PreviousButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );
  const handlePrev = () => {
    switch (activeStage) {
      case "DESCRIPTION_COMPONENT":
        dispatch(setJobPostActiveStage("BUDGET_COMPONENT"));
        return;
      case "BUDGET_COMPONENT":
        dispatch(setJobPostActiveStage("WORK_DETAILS_COMPONENT"));
        dispatch(setActiveJobScope(null));
        return;
      case "WORK_DETAILS_COMPONENT":
        dispatch(setJobPostActiveStage("SKILLS_COMPONENT"));
        return;
      case "SKILLS_COMPONENT":
        dispatch(setJobPostActiveStage("TITLE_COMPONENT"));
        return;
      case "TITLE_COMPONENT":
        dispatch(resetJobPost("RESET"));
        dispatch(resetActiveState("RESET"));
        dispatch(setJobPostErrors(null));
        router.push("/");
        return;

      default:
        return;
    }
  };
  return (
    <button
      className="btn bg-transparent hover:bg-transparent text-[#005AFF]"
      onClick={handlePrev}
    >
      Back
    </button>
  );
};

// ====== Next button =========
export const NextButtonText = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // redux states
  const { title, requiredSkills, jobBudget, jobDescription } =
    useSelector((state: RootState) => state.jobPosting) || {};

  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );

  const handleNext = () => {
    if (activeStage === "TITLE_COMPONENT" && !title) {
      dispatch(
        setJobPostErrors({ field: "TITLE", message: "Job title is required" })
      );
      return;
    }

    if (activeStage === "TITLE_COMPONENT" && title) {
      console.log(title, "from start");
      dispatch(setJobPostActiveStage("SKILLS_COMPONENT"));
      // dispatch(setJobPostErrors(null));
      return;
    }

    console.log(title, "after codition");

    // VALIDATE SKILL COMPONENT AND CHANGE ACTIVE STAGE
    if (activeStage === "SKILLS_COMPONENT" && !requiredSkills.length) {
      dispatch(
        setJobPostErrors({
          field: "SKILLS",
          message: "Please select at least one skill",
        })
      );
      return;
    }

    if (activeStage === "SKILLS_COMPONENT" && requiredSkills.length) {
      // currently show alert for development purpose
      dispatch(setJobPostActiveStage("WORK_DETAILS_COMPONENT"));
      dispatch(setJobPostErrors(null));
      return;
    }

    // VALIDATE WORK DETAILS COMPONENT COMPONENT AND CHANGE ACTIVE STAGE
    if (activeStage === "WORK_DETAILS_COMPONENT") {
      dispatch(setJobPostActiveStage("BUDGET_COMPONENT"));
      return;
    }

    // VALIDATE BUDGET COMPONENT AND CHANGE ACTIVE STAGE
    // if (activeStage === "BUDGET_COMPONENT" && !jobBudget) {
    //   dispatch(
    //     setJobPostErrors({ field: "BUDGET", message: "Budget is required" })
    //   );
    // }
    // if (activeStage === "BUDGET_COMPONENT" && jobBudget) {
    if (activeStage === "BUDGET_COMPONENT") {
      dispatch(setJobPostActiveStage("DESCRIPTION_COMPONENT"));
      dispatch(setJobPostErrors(null));
      return;
    }

    // VALIDATE DESCRIPTION COMPONENT COMPONENT AND CHANGE ACTIVE STAGE
    if (activeStage === "DESCRIPTION_COMPONENT" && !jobDescription) {
      dispatch(
        setJobPostErrors({
          field: "DESCRIPTION",
          message: "Description is required",
        })
      );
      return;
    }
    if (activeStage === "DESCRIPTION_COMPONENT" && jobDescription) {
      // it is the last stage so redirect to the review job post page
      router.push("/job-post-review");
    }
  };

  const buttonText =
    activeStage === "TITLE_COMPONENT"
      ? "Next: Skills "
      : activeStage === "SKILLS_COMPONENT"
      ? "Next: Scoop"
      : activeStage === "WORK_DETAILS_COMPONENT"
      ? "Next: Budget"
      : activeStage === "BUDGET_COMPONENT"
      ? "Next: Description"
      : activeStage === "DESCRIPTION_COMPONENT"
      ? "Next: Job Post"
      : "";

  return (
    <button type="button" className="btn-large fs-md btn-bg-blue" onClick={handleNext}>
      {buttonText}
    </button>
  );
};
