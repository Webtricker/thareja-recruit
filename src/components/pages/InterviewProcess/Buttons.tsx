"use client";
import {
  setActiveModal,
  setActiveSkillTestComponent,
} from "@/redux/features/GptVettilngSlice/SkillTest";
import { useDispatch } from "react-redux";
import { ForwardArrowSVG } from "./Icons";

// ========= STATE ======
// const STATE = useSelector(
//   (state: RootState) => state.interviewProcess.miceStatus
// );

export const StartTestButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setActiveModal("MIC_TEST"))}
      className="flex items-center gap-[14px] fs-md btn-medium btn-bg-blue mt-[50px] lg:mt-[60px]"
    >
      <span>Start test</span>
      <ForwardArrowSVG />
    </button>
  );
};

export const ContinueIntroductionButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setActiveSkillTestComponent("ADD_SKILLS"))}
      className="flex items-center gap-[14px] fs-md btn-medium btn-bg-blue mb-5"
    >
      <span> Continue</span>
      <ForwardArrowSVG />
    </button>
  );
};
