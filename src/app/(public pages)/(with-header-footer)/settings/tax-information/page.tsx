import TaxinfoPageContent from "@/components/pages/taxtInformation/PageContent";
import UserSettingsSidebar from "@/components/shared/card/UserSettingsSidebar";
import Container from "@/components/shared/wrapper/Container";

const ContactInfoPage = () => {
  return (
    <main className="text-[#30353E] px-5 md:px-[40px] w-full h-full bg-[#FFF] relative pt-[130px] lg:pt-[159px]">
      <Container className="w-full  !max-w-[1518px] pb-[120px]">
        <div className="w-full flex items-center mb-[30px]">
          <h1 className="w-full fs-5xl hidden md:block">Settings</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-[30px] h-full">
          <div className="w-full max-w-[398px]">
            <h1 className="fs-5xl mb-5 md:hidden">Settings</h1>
            <UserSettingsSidebar activePage="tax-information" />
          </div>
          <TaxinfoPageContent />
        </div>
      </Container>
    </main>
  );
};

export default ContactInfoPage;