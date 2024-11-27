"use client";
import IdentityVerificationPageContent from "@/components/pages/identityVerification/IdentityVerificationPageContent";
import UserSettingsSidebar from "@/components/shared/card/UserSettingsSidebar";
import Container from "@/components/shared/wrapper/Container";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const ContactInfoPage = () => {
  const { showSelfiComponent } = useSelector(
    (state: RootState) => state.settingsIdentifyVerificationSlice
  );

  return (
    <main className="text-[#30353E] px-5 md:px-[40px] w-full bg-[#FFF] pb-[100px] lg:pb-[120px]  relative pt-[130px] lg:pt-[159px]">
      <Container className="w-full !max-w-[1518px]">
        <div className="w-full mb-5 md:mb-6 lg:mb-7 2xl:mb-[30px]">
          <h1 className="fs-5xl mb-[30px]">Settings</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-[30px]">
          <div className="w-full max-w-[398px]">
            <UserSettingsSidebar activePage="identity-verification" />
          </div>
          <IdentityVerificationPageContent />
        </div>
      </Container>
    </main>
  );
};

export default ContactInfoPage;
