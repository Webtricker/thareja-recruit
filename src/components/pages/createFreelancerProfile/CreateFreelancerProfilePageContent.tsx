"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  Address,
  CommunicationLanguage,
  Education,
  Expertists,
  GetStarted,
  HourlyRate,
  ProfessionalRole,
  ProfileDescription,
  ProfileReady,
  ReleventExperience,
  SkillDescription,
} from "./ServerComponents";


const CreateFreelancerProfilePageContent = () => {
  let activeComponent = useSelector(
    (state: RootState) => state.createFreelancerProfile.activeComponent
  );
  switch (activeComponent) {
    case "GET_STARTED":
      return <GetStarted />;
    case "PROFESSIONAL_ROLE":
      return <ProfessionalRole />;
    case "RELEVENT_WORK_EXPERIENCE":
      return <ReleventExperience />;
    case "EDUCATION":
      return <Education />;
    case "COMMUNICATION_LANGUAGE":
      return <CommunicationLanguage />;
    case "SKILL_DESCRIPTION":
      return <SkillDescription />;
    case "PROFILE_DESCRIPTION":
      return <ProfileDescription />;
    case "EXPERTISTS":
      return <Expertists />;
    case "HOURLY_RATE":
      return <HourlyRate />;
    case "ADDRESS":
      return <Address />;
    case "PROFILE_READY":
      return <ProfileReady />;
    default:
      return <></>;
  }
};

export default CreateFreelancerProfilePageContent;
