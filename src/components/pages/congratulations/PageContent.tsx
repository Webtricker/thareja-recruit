"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  FreelancingGoal,
  GetStarted,
  WorkingExperience,
  WorkingType,
} from "./ServerComponents";

const PageContent = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.freelancerOnboarding.activeComponent
  );
  switch (activeComponent) {
    case "GET_STARTED":
      return <GetStarted />;
    case "WORKING_EXPERIENCE":
      return <WorkingExperience />;
    case "FREELANCING_GOAL":
      return <FreelancingGoal />;
    case "WORKING_TYPE":
      return <WorkingType />;
    default:
      return <></>;
  }
};

export default PageContent;
