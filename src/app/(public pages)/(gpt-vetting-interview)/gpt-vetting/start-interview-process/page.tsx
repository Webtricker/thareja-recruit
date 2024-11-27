import { InterviewPageContent } from "@/components/pages/InterviewProcess/ClientComponents";
import SkillTestModal from "@/components/pages/InterviewProcess/Modals";
import Container from "@/components/shared/wrapper/Container";

const StartInterviewProcessPage = () => {
  return (
    <main className="text-[#525966] px-5 md:px-[40px] h-screen overflow-y-auto w-full bg-[#FBFCFF] relative pt-[130px] lg:pt-[159px]">
      <Container className="mx-auto !max-w-[1720px] h-full flex flex-col items-center">
        <InterviewPageContent />
        <SkillTestModal />
      </Container>
    </main>
  );
};

export default StartInterviewProcessPage;
