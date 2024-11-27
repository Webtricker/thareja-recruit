import ActiveComponent from "@/components/pages/getStartedWithoutAi/ActiveComponent";
import {
  InitialReset,
  WithoutAiJobPostProgressbar,
} from "@/components/pages/getStartedWithoutAi/ClientComponents";
import TopWarning from "@/components/shared/common/topWarning"; // Assuming correct import path
import Container from "@/components/shared/wrapper/Container";
// import { RootState } from "@reduxjs/toolkit/query";

const GetStartedWithoutAiPage = () => {
  return (
    <main className="relative w-full h-[100%] pb-[50px] md:pb-[100px] 2xl:pb-[178px] pt-[130px] lg:pt-[149px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
      <Container className="w-full ai-page min-h-[100%] mx-auto">
        <TopWarning
          className="pb-[50px] md:pb-[60px] lg:pb-[80px]"
          warning="As part of our continued efforts to remain compliant with tax laws globally, please enter your Tax Identification Number here."
        />
        <ActiveComponent />
      </Container>
      <WithoutAiJobPostProgressbar />

      {/* ======= initial reset ========= */}
      <InitialReset />
    </main>
  );
};

export default GetStartedWithoutAiPage;
