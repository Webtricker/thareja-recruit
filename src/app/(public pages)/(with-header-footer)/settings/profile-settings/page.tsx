import MyProfilePageContent from "@/components/pages/myProfile/MyProfilePageContent";
import UserSettingsSidebar from "@/components/shared/card/UserSettingsSidebar";
import Container from "@/components/shared/wrapper/Container";

const ContactInfoPage = () => {
  return (
    <main className="text-[#30353E] px-5 md:px-[40px] w-full bg-[#FFF] relative pt-[130px] lg:pt-[159px]  pb-[100px] lg:pb-[120px]">
      <Container className="w-full  !max-w-[1518px]">
        <h1 className="w-full fs-5xl mb-[30px]">Settings</h1>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-[30px]">
          <div className="w-full max-w-[398px]">
            <UserSettingsSidebar activePage="profile-settings" />
          </div>
          <MyProfilePageContent />
        </div>
      </Container>
    </main>
  );
};

export default ContactInfoPage;
