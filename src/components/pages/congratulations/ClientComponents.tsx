"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { BackButton, NextStepButtons } from "./Buttons";
import { EmptyCircleSVG, SelectedSVG } from "./Icons";

export const CurrentStep = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.freelancerOnboarding.activeComponent
  );
  switch (activeComponent) {
    case "WORKING_EXPERIENCE":
      return <>1/3</>;
    case "FREELANCING_GOAL":
      return <>2/3</>;
    case "WORKING_TYPE":
      return <>3/3</>;
    default:
      return <>1/3</>;
  }
};

// ===== active or deactive checkbox =====
type CheckBoxProps = {
  activeKey: string;
  className?: string;
  dataKey: "workingExperience" | "biggestGoal" | "workingTechnique";
};
export const CheckBox = ({ activeKey, className, dataKey }: CheckBoxProps) => {
  const selectedKey = useSelector(
    (state: RootState) => state.freelancerOnboarding.queryData[dataKey]
  );

  return selectedKey === activeKey ? <SelectedSVG /> : <EmptyCircleSVG />;
};

// ========= Freelancer setup progress bar =======
export const FreelancerSetUpProgressBar = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.freelancerOnboarding.activeComponent
  );

  // PROGRESS BAR STYLE
  let progressBarStyle = "";
  switch (activeComponent) {
    case "WORKING_EXPERIENCE":
      progressBarStyle = "!w-[33.33%]";
      break;
    case "FREELANCING_GOAL":
      progressBarStyle = "!w-[66.66%]";
      break;
    case "WORKING_TYPE":
      progressBarStyle = "!w-[100%]";
      break;
    default:
      progressBarStyle = "!w-[0%]";
      break;
  }

  if (activeComponent === "GET_STARTED") return <></>;
  return (
    <div className="progress-bar bg-white relative w-full pt-[30px] pb-[30px] md:pb-[40px] 2xl:pb-[62px]">
      <span
        className={` duration-300 progress-bar-active absolute top-0 left-0 h-1 bg-[#005AFF] z-[2] w-[33.33%] 
       ${progressBarStyle}
      `}
      ></span>
      <span className="progress-bar w-full absolute top-0 left-0 h-1 bg-[#DDE3E7] z-[1]"></span>

      <div className=" w-full flex-wrap gap-y-5 flex items-center justify-between  px-5 md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[47px]">
        <BackButton />
        <div className="flex-grow gap-2.5 flex flex-wrap items-center justify-end">
          <NextStepButtons />
        </div>
      </div>
    </div>
  );
};
