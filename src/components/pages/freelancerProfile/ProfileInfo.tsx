import FreelancerInvitationModalWrapper from "@/components/shared/modal/FreelancerInvitationModal";
import Application from "./Application";
import Certifications from "./Certifications";
import CoverLetter from "./CoverLetter";
import EmploymentHistory from "./EmploymentHistory";
import LocationInfo from "./LocationInfo";
import OtherExperience from "./OtherExperience";
import ProfileImageAndInitialInfo from "./ProfileImageAndInitialInfo";
import SkillsDetails from "./SkillsDetails";
import ViewProfile from "./ViewProfile";

// ========= root component =========
const ProfileInfo = () => {
  return (
    <>
      <ProfileImageAndInitialInfo />
      {/* ============ Location info ============ */}
      <LocationInfo />
      {/* ======== Application & Letters ============   */}
      <div className="w-full lg:flex items-start justify-between gap-5 mb-[30px]">
        <div className="mb-10 lg:mb-0 w-full lg:w-3/6 2xl:w-full 2xl:max-w-[398px]  px-5 py-[30px] md:py-10 md:px-6 rounded-[20px] border border-[#0059ff33] bg-[#0059ff05]">
          <Application />
        </div>
        <div className="w-full lg:w-3/6 2xl:w-full 2xl:max-w-[1088px] flex flex-col gap-8">
          <CoverLetter />
        </div>
      </div>
      <div className="w-full lg:flex justify-between gap-5 ">
        <div className="w-full lg:w-3/6 2xl:w-full 2xl:max-w-[398px] px-5  py-5 md:px-6 rounded-[20px] border border-[#0059ff33] bg-[#0059ff05] mb-10 lg:mb-0">
          <ViewProfile />
        </div>
        <div className="w-full lg:w-3/6 2xl:w-full 2xl:max-w-[1088px] flex flex-col px-5 py-[30px] md:p-[30px] border border-[#0059ff33] rounded-[20px]">
          <SkillsDetails />
        </div>
      </div>
      <Certifications />
      <EmploymentHistory />
      <OtherExperience />
      {/* ======== Freelancer invite modal ========= */}
      <FreelancerInvitationModalWrapper />
    </>
  );
};

export default ProfileInfo;
