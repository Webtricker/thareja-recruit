import { ReactNode } from "react";
import { ClockSVG } from "../hireFreelancers/Icons";
import {
  AddEducationBtn,
  AddWorkHistoryBtn,
  LanguageEditBtn,
  SelectedSkillsEditBtn,
} from "./Buttons";
import {
  EducationDetails,
  HourlyRate,
  RoleTitle,
  SelectedLanguages,
  SelectedProfile,
  SelectedSkills,
  SkillDescription,
  WorkDetails,
} from "./ClientComponents";
import { LocationSVG } from "./Icons";

type CardWrapperProps = {
  children: ReactNode;
  style?: string;
};

export const CardWrapper = ({ children, style = "" }: CardWrapperProps) => {
  return (
    <div
      className={`w-full p-5 md:p-6 lg:p-7 xl:p-[30px] rounded-[15px] md:rounded-[20px] border border-[#00000024]  ${style}`}
    >
      {children}
    </div>
  );
};

export const ProfileCard = () => {
  return (
    <CardWrapper
      style="bg-[#FAFCFF] border-[#97BCFF] lg:px-6 xl:px-6 max-w-[398px]"
      key="PROFILE_CARD"
    >
      <div className="w-full flex gap-5 mb-6 md:mb-7">
        <SelectedProfile />
        <div className="flex-grow">
          <h3 className="fs-lg-lh-normal">Muhammad l.</h3>
          <p className="flex items-center gap-1.5 my-1.5">
            <LocationSVG /> <span>Surat, GJ</span>
          </p>
          <p className="flex items-center gap-1.5">
            <ClockSVG style="max-w-5" /> <span>9:40 AM Local time</span>
          </p>
        </div>
      </div>
     <SelectedLanguages />
    </CardWrapper>
  );
};

export const TittleAndDescriptionCard = () => {
  return (
    <CardWrapper style="bg-[#FFFFFF] " key="PROFILE_CARD">
      <div className="w-full md:flex gap-5 justify-between mb-7 md:mb-[30px]">
        <RoleTitle />
        <HourlyRate />
      </div>
      <div className="w-full flex gap-5 justify-between items-center">
        <SkillDescription />
      </div>
    </CardWrapper>
  );
};

export const SkillsCard = () => {
  return (
    <CardWrapper style="bg-[#FFFFFF] " key="SKILLS_CARD">
      <div className="w-full flex gap-5 justify-between mb-6 md:mb-7">
        <h3 className="fs-3xl">Skills</h3>
        <SelectedSkillsEditBtn />
      </div>
      <SelectedSkills />
    </CardWrapper>
  );
};

export const WorkHistoryCard = () => {

  return (
    <CardWrapper
      style="bg-[#FFFFFF] flex flex-col gap-2.5 "
      key="WORK_HISTORY_CARD"
    >
      <div className="w-full flex gap-5 justify-between">
        <h3 className="fs-3xl">Work history</h3>
        <AddWorkHistoryBtn />
      </div>
      <WorkDetails />
    </CardWrapper>
  );
};

export const EducationCard = () => {
  return (
    <CardWrapper
      style="bg-[#FFFFFF] flex flex-col gap-2.5 "
      key="WORK_HISTORY_CARD"
    >
      <div className="w-full flex gap-5 justify-between">
        <h3 className="fs-3xl">Education</h3>
        <AddEducationBtn />
      </div>
      <EducationDetails />
    </CardWrapper>
  );
};
