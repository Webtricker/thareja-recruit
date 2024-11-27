import { FreelancerSetUpProgressBar } from "@/components/pages/congratulations/ClientComponents";
import PageContent from "@/components/pages/congratulations/PageContent";
import Container from "@/components/shared/wrapper/Container";

const CongratulationsPage = () => {
  return (
    <main className="text-[#30353E] h-screen w-full bg-[#FFF] relative pt-[90px] md:pt-[104px] lg:pt-[112px] xl:pt-[124px] 2xl:pt-[124px] flex flex-col">
      <div className="w-full px-5 md:px-[40px] flex-grow overflow-y-auto flex flex-col">
        <Container className="flex-grow flex flex-col mx-auto !max-w-[1518px] pt-2.5 2xl:pt-[45px] pb-10">
          <PageContent />
        </Container>
      </div>
      <FreelancerSetUpProgressBar />
    </main>
  );
};

export default CongratulationsPage;
