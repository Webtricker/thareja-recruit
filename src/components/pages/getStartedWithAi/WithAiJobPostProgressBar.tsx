import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { NextButtonText, PreviousButton } from "./Buttons";

const WithAiJobPostProgressBar = () => {
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.withAiActiveStage
  );

  // PROGRESS BAR STYLE
  const progressBarStyle =
    activeStage === "DESCRIPTION"
      ? "!w-[50%]"
      : activeStage === "BUDGET"
      ? "!w-[100%]"
      : "";
  return (
    <div className="progress-bar bg-white fixed bottom-0 left-0 w-full pt-[30px] pb-[30px] md:pb-[40px] 2xl:pb-[62px]">
      <span
        className={` duration-300 progress-bar-active absolute top-0 left-0 h-1 bg-[#005AFF] z-[2] w-[20%] 
       ${progressBarStyle}
      `}
      ></span>
      <span className="progress-bar w-full absolute top-0 left-0 h-1 bg-[#DDE3E7] z-[1]"></span>

      {/* next and prev buttons */}

      <div className=" w-full flex items-center justify-between px-5 md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[47px]">
        <PreviousButton />
        <NextButtonText />
      </div>
    </div>
  );
};

export default WithAiJobPostProgressBar;
