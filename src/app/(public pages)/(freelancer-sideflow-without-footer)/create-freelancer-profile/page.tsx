import { CreateProfileProgressBar } from "@/components/pages/createFreelancerProfile/ClientComponents";
import CreateFreelancerProfilePageContent from "@/components/pages/createFreelancerProfile/CreateFreelancerProfilePageContent";
import Container from "@/components/shared/wrapper/Container";

const CreateFreelancerProfilePage = () => {
  return (
    <main className="text-[#30353E] h-screen w-full bg-[#FFF] relative pt-[90px] md:pt-[104px] lg:pt-[112px] xl:pt-[124px] 2xl:pt-[124px] flex flex-col">
      <div className="w-full px-5 md:px-[40px] flex-grow overflow-y-auto ">
        <Container className="flex flex-col h-full mx-auto !max-w-[1518px] pt-2.5 2xl:pt-[45px]">
          <CreateFreelancerProfilePageContent />
        </Container>
      </div>
      <CreateProfileProgressBar />
    </main>
  );
};

export default CreateFreelancerProfilePage;
