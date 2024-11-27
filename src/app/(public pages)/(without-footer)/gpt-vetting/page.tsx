import BodyTopRightCornerButtons from "@/components/pages/gptVetting/BodyTopRightCornerButtons";
import { GPTVettingPageContent } from "@/components/pages/gptVetting/DynamicComponents";

import {
  InviteCandidateModal,
  ModalSuccess,
  TestDetailsModal,
} from "@/components/pages/gptVetting/Modals";
import TabSwitcher from "@/components/pages/gptVetting/TabSwitcher";

import AddBlueBGToMainHeader from "@/components/shared/bgModifyer/AddBlueBGToMainHeader";
import Container from "@/components/shared/wrapper/Container";
import { ToastContainer } from "react-toastify";

const GptVettingPage = () => {
  return (
    <div className="px-5 md:px-[40px] text-[#30353E] h-screen w-full bg-[#FBFCFF] relative pt-[130px] lg:pt-[159px]">
      {/* add blue background to the header */}
      <AddBlueBGToMainHeader />
      <Container className="mx-auto !max-w-[1720px] h-full flex flex-col">
        <div className="flex items-center justify-between flex-wrap gap-10">
          <h2 className="fs-4xl ">gpt-vetting</h2>
          <BodyTopRightCornerButtons />
        </div>
        <TabSwitcher />
        <GPTVettingPageContent />

        {/* ======== toast and modal ======= */}
        <ModalSuccess />
        <InviteCandidateModal />
        <TestDetailsModal />
        <ToastContainer />
      </Container>
    </div>
  );
};

export default GptVettingPage;
