import GetStartedAndConnectTalent from "@/components/pages/jobs/GetStartedAndConnectTalent";
import PaymentCards from "@/components/pages/jobs/PaymentCards";
import ProjectGoals from "@/components/pages/jobs/ProjectGoals";
import SaveJobPostContent from "@/components/pages/jobs/SaveJobPostContent";
import TopWarning from "@/components/shared/common/topWarning";
import Container from "@/components/shared/wrapper/Container";

const JobsPage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <TopWarning
          className="pb-[50px] md:pb-[60px] lg:pb-[80px]"
          warning="We’re updated our Terms of Service with changes to our contract initiation fee."
        />
        <div className="w-full pb-[60px] h-full">
          <SaveJobPostContent />
          <ProjectGoals />
          <GetStartedAndConnectTalent />
          <PaymentCards />
        </div>
      </Container>
    </div>
  );
};

export default JobsPage;
