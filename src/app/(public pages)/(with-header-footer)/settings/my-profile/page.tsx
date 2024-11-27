import UserSettingsSidebar from "@/components/shared/card/UserSettingsSidebar";
import Container from "@/components/shared/wrapper/Container";

const ContactInfoPage = () => {
  return (
    <main className="text-[#30353E] px-5 md:px-[40px] w-full bg-[#FFF] relative pt-[130px] lg:pt-[159px] mb-[100px] lg:mb-[120px]">
      <Container className="w-full flex flex-col md:flex-row gap-10 md:gap-[30px] !max-w-[1518px]">
        <div className="w-full max-w-[398px]">
          <h1 className="fs-5xl mb-[30px]">Settings</h1>
          <UserSettingsSidebar activePage="my-profile" />
        </div>
      </Container>
    </main>
  );
};

export default ContactInfoPage;
