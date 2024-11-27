"use client";
import JobDescription from "@/components/pages/getStartedWithAi/JobDescription";
import JobPostDetails from "@/components/pages/getStartedWithAi/JobPostDetails";
import { default as WithAiJobPostProgressBar } from "@/components/pages/getStartedWithAi/WithAiJobPostProgressBar";
import { JobPostWithoutAiJobBudget } from "@/components/pages/getStartedWithoutAi/ServerComponents";
import TopWarning from "@/components/shared/common/topWarning";
import Container from "@/components/shared/wrapper/Container";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const StartJobPost = () => {
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.withAiActiveStage
  );
  return (
    <>
      <main className="text-[#30353E] relative w-full h-[100%] pb-[50px] md:pb-[100px] 2xl:pb-[178px] pt-[130px] lg:pt-[149px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
        <Container className="w-full ai-page min-h-[100%] mx-auto">
          <TopWarning
            className="pb-[50px] md:pb-[60px] lg:pb-[80px]"
            warning="As part of our continued efforts to remain compliant with tax laws globally, please enter your Tax Identification Number here."
          />
          <div className="w-full pb-[60px] h-full">
            {activeStage === "JOB_DETAILS" ? (
              <JobPostDetails />
            ) : activeStage === "DESCRIPTION" ? (
              <JobDescription />
            ) : activeStage === "BUDGET" ? (
              <JobPostWithoutAiJobBudget />
            ) : (
              <p className="text-center">ERROR: Loading Component</p>
            )}
          </div>
        </Container>
        {activeStage !== "JOB_DETAILS" && <WithAiJobPostProgressBar />}
      </main>
    </>
  );
};

export default StartJobPost;
