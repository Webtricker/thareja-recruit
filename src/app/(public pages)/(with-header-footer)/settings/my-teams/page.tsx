import MyTeamPageContent from "@/components/pages/myTeams/MyTeamPageContent";
import UserSettingsSidebar from "@/components/shared/card/UserSettingsSidebar";
import Container from "@/components/shared/wrapper/Container";

const ContactInfoPage = () => {
  return (
    <main className="text-[#30353E] px-5 md:px-[40px] w-full bg-[#FFF] relative pt-[130px] lg:pt-[159px] mb-[100px] lg:mb-[120px]">
      <Container className="w-full !max-w-[1518px]">
        <div className="w-full mb-5 md:mb-6 lg:mb-7 2xl:mb-[30px]">
          <h1 className="fs-5xl mb-[30px]">Settings</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-[30px]">
          <div className="w-full max-w-[398px]">
            <UserSettingsSidebar activePage="my-teams" />
          </div>
          <MyTeamPageContent />
        </div>
      </Container>
    </main>
  );
};

export default ContactInfoPage;
