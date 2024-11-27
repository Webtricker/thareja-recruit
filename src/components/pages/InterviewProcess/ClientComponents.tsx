"use client";

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddSkills from "./AddSkills";
import InterviewQNA from "./InterviewQNA";
import Introduction from "./Introduction";

export const UploadingAndLoadingQuestion = () => {
  const [activeEL, setActiveEL] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEL((prevActiveEL) =>
        prevActiveEL === 3 ? 1 : prevActiveEL + 1
      );
    }, 500);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  return (
    <div className="flex gap-2.5 mb-6">
      <span
        className={`duration-500 bg-[#C2D8FF] h-5 w-5 rounded-full ${
          activeEL === 1 ? "!bg-[#005AFF]" : ""
        }`}
      ></span>
      <span
        className={`duration-500 bg-[#C2D8FF] h-5 w-5 rounded-full ${
          activeEL === 2 ? "!bg-[#005AFF]" : ""
        }`}
      ></span>
      <span
        className={`duration-500 bg-[#C2D8FF] h-5 w-5 rounded-full ${
          activeEL === 3 ? "!bg-[#005AFF]" : ""
        }`}
      ></span>
    </div>
  );
};

export const TotalQuestions = () => {
  const currentQuestion = useSelector(
    (state: RootState) => state.interviewProcess.currentQuestionIndx
  );

  const totalQuestions = useSelector(
    (state: RootState) => state.interviewProcess.interviewQuestions
  );

  return (
    <h5 className="text-center fs-lg-lh-normal">
      Question {currentQuestion}/{totalQuestions.length}
    </h5>
  );
};

//  ========= main content of start-interview-process page =====================
export const InterviewPageContent = () => {
  const activeComponent = useSelector(
    (state: RootState) => state.interviewProcess.activeSkillTestComponent
  );

  switch (activeComponent) {
    case "INTRODUCTION":
      return <Introduction />;
    case "ADD_SKILLS":
      return <AddSkills />;
    case "INTERVIEW_QNA":
      return <InterviewQNA />;
    default:
      return <></>;
  }
};
