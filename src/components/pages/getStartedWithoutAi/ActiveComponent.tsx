"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  JobPostDescription,
  JobPostRequiredSkills,
  JobPostScope,
  JobPostWithoutAiJobBudget,
  JobTitle,
} from "./ServerComponents";

const ActiveComponent = () => {
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );

  return (
    <div className="w-full pb-[60px]">
      {activeStage === "TITLE_COMPONENT" ? (
        <JobTitle />
      ) : activeStage === "SKILLS_COMPONENT" ? (
        <JobPostRequiredSkills />
      ) : activeStage === "WORK_DETAILS_COMPONENT" ? (
        <JobPostScope />
      ) : activeStage === "BUDGET_COMPONENT" ? (
        <JobPostWithoutAiJobBudget />
      ) : activeStage === "DESCRIPTION_COMPONENT" ? (
        <JobPostDescription />
      ) : (
        <p className="text-center">ERROR: Loading Component</p>
      )}
    </div>
  );
};

export default ActiveComponent;
