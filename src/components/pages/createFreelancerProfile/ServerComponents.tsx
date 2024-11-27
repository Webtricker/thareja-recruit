// type Props = {
//     className?: string;
//   };
// export const SectionTitle = ({}:SectionTitleProps)=>{}

import Link from "next/link";
import {
  AddALanguageButton,
  FillInfoManuallyButton,
  UploadResumeButton,
} from "./Buttons";
import { DetailedProfile, Profile } from "./Cards";
import {
  AddedEducations,
  CalculatedHourlyRateAndFees,
  ChoosedLanguageProficiency,
  ChooseSkills,
  CurrentStep,
  FreelancerAddress,
  ProfessionalRoleInput,
  ProfileOverview,
  ReleventWorkExperiences,
  SelectedServices,
  SuggestedServices,
} from "./ClientComponents";
import { SmallClockSVG } from "./Icons";
import { EducationFormModal, ExperienceFormModal, FreelancerProfileEditModal } from "./Modals";
import { ServiceSelector } from "./SelectItems";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

// import { GetStartedButton } from "./Buttons";

// ======  Reusable components ========
type SectionTitleProps = {
  className?: string;
  text: string;
};
export const SectionTitle = ({ className, text }: SectionTitleProps) => (
  <h2 className={`fs-4xl ${className}`}>{text}</h2>
);

type SectionDesProps = {
  className?: string;
  text: string;
};
export const SectionDes = ({ className, text }: SectionDesProps) => (
  <p className={`fs-base ${className}`}>{text}</p>
);

// type InfoListProps = {
//   children: React.ReactNode;
//   text: string;
// };
// const InfoList = ({ children, text }: InfoListProps) => {
//   return (
//     <p className="flex items-center fs-md leading_normal tracking-[0.4px]">
//       {children}
//       <span className="ml-5">{text}</span>
//     </p>
//   );
// };

// const Seperator = () => {
//   return (
//     <span className="w-full h-[1px] block my-7 md:my-8 lg:my-[34px] bg-[#DDE3E7]"></span>
//   );
// };

// =========== conditional components ============
export const GetStarted = () => {
  return (
    <div className="w-full flex flex-wrap-reverse justify-between items-center lg:flex-nowrap gap-5 gap-y-20 ">
      <div className="w-full lg:max-w-[800px]">
        <div className="w-full flex items-center gap-5 flex-wrap gap-y-2.5">
          <CurrentStep />
          <span className="fs-base">Create your profile</span>
          <div className="w-full flex items-center gap-2.5 max-w-[200px]">
            <SmallClockSVG />
            <span className="fs-base">5-10 min</span>
          </div>
        </div>
        <SectionTitle
          className="my-10"
          text="How would you like to tell us about yourself?"
        />

        <SectionDes text="We need to get a sense of your education, experience and skills. It's quickest to import your information - you can edit it before your profile goes live." />

        <div className="text-[#005AFF] w-full max-w-[600px] flex flex-col gap-y-[16px] mt-10">
          <UploadResumeButton />
          <FillInfoManuallyButton />
        </div>
      </div>

      <Profile
        imgUrl="/svgs/onboarding/create-profile-freelancer-profile.svg"
        noticeText={`"Your Recruit profile is how you stand out from the crowd. It's what you use to win work, so let's make it a good one."
Recruit Pro Tip`}
      />
    </div>
  );
};

// ========= professional role component =================
export const ProfessionalRole = () => {
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-5">
      <CurrentStep />
      <h3 className="fs-4xl">
        Got it. Now, add a title to tell the world what you do.
      </h3>
      <p className="fs-base">
        It&apos;s the very first thing clients see, so make it count. Stand out
        by describing your expertise in your own words.
      </p>
      <div className="w-full mt-5 ">
        <label htmlFor="role-input" className="fs-lg-lh-lg mb-2.5 block">
          Your professional role
        </label>
        <ProfessionalRoleInput />
      </div>
    </div>
  );
};

// ========= ReleventExperience component =================
export const ReleventExperience = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-5 md:gap-7 lg:gap-10 pb-[181px]">
        <div className="w-full max-w-[800px] flex flex-col gap-5 ">
          <CurrentStep />
          <h3 className="fs-4xl">
            If you have relevant work experience, add it here.
          </h3>
          <p className="fs-base">
            Freelancers who add their experience are twice as likely to win
            work. But if you&apos;re just starting out, you can still create a
            great profile. Just head on to the next page.
          </p>
        </div>
        <ReleventWorkExperiences />
      </div>
      <ExperienceFormModal />
    </>
  );
};
// ========= Education component =================
export const Education = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-5 pb-[181px]">
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          <CurrentStep />
          <h3 className="fs-4xl">
            Clients like to know what you know - add your education here.
          </h3>
          <p className="fs-base">
            You don’t have to have a degree. Adding any relevant education helps
            make profile more visible.
          </p>
        </div>
        <AddedEducations />
      </div>
      <EducationFormModal />
    </>
  );
};

// ========= CommunicationLanguage component =================
export const CommunicationLanguage = () => {
  return (
    <div className="w-full pb-[181px] ">
      <div className="w-full max-w-[800px] flex flex-col gap-5">
        <CurrentStep />
        <h3 className="fs-4xl ">
          Looking good. Next, tell us which languages you speak.
        </h3>
        <p className="fs-base">
          Recruit is global, so clients are often interested to know what
          languages you speak. English is a must, but do you speak any other
          languages?
        </p>
      </div>
      <div className="w-full mt-10 ">
        <ChoosedLanguageProficiency />
        <AddALanguageButton />
      </div>
    </div>
  );
};
// ========= SkillDescription component =================
export const SkillDescription = () => {
  return (
    <div className="w-full pb-[181px] flex lg:items-start flex-col-reverse lg:justify-between  lg:flex-row gap-10">
      <div className="w-full  max-w-[800px] ">
        <div className="w-full flex flex-col gap-5">
          <CurrentStep />
          <h3 className="fs-4xl ">
            Nearly there! What work are you here to do?
          </h3>
          <p className="fs-base">
            Your skills show clients what you can offer, and help us choose
            which jobs to recommend to you. Add or remove the ones we&apos;ve
            suggested, or start typing to pick more. It&apos;s up to you.
          </p>
          <Link className="fs-base text-[#005AFF]" href="#">
            Why choosing carefully matters
          </Link>
        </div>
        <ChooseSkills />
      </div>
      <Profile
        imgUrl="/svgs/onboarding/create-profile-freelancer-profile.svg"
        noticeText={`"Recruit algorithm will recommend specific job posts to you based on your
skills. So choose them carefully to get the best match!"
Recruit Pro Tip`}
      />
    </div>
  );
};

// ========= ProfileDescription component =================
export const ProfileDescription = () => {
  return (
    <div className="w-full pb-[181px] flex lg:items-start flex-col-reverse lg:justify-between  lg:flex-row gap-10">
      <div className="w-full  max-w-[800px] ">
        <div className="w-full flex flex-col gap-5">
          <CurrentStep />
          <h3 className="fs-4xl ">
            Great. Now write a bio to tell the world about yourself.
          </h3>
          <p className="fs-base">
            Help people get to know you at a glance. What work do you do best?
            Tell them clearly, using paragraphs or bullet points. You can always
            edit later; just make sure you proofread now.
          </p>

          <ProfileOverview />
        </div>
      </div>
      <DetailedProfile />
    </div>
  );
};

// ========= Expertists component =================
export const Expertists = () => {
  return (
    <div className="w-full  max-w-[800px] pb-[200px] flex flex-col gap-5">
      <CurrentStep />
      <h3 className="fs-4xl ">What are the main services you offer?</h3>
      <p className="fs-base">
        Choose at least one service that best describes the type of work you do.
        This helps us match you with clients who need your unique expertise.
      </p>
      <ServiceSelector />
      <SelectedServices />
      <SuggestedServices />
    </div>
  );
};

// ========= HourlyRate component =================
export const HourlyRate = () => {
  return (
    <div className="w-full pb-[181px] flex flex-col gap-5 text-[#30353E]">
      <CurrentStep />
      <h3 className="fs-4xl ">Now, let&apos;s set your hourly rate.</h3>
      <p className="fs-base">
        Clients will see this rate on your profile and in search results once
        you publish your profile. You can adjust your rate every time you submit
        a proposal.
      </p>
      <CalculatedHourlyRateAndFees />
    </div>
  );
};

// ========= Address component =================
export const Address = () => {
  const createFreelancerProfile = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );


  return (
    <>
    <div className="w-full pb-[181px] flex flex-col gap-5 text-[#30353E]">
      <div className="w-full max-w-[800px] flex flex-col gap-5">
        <CurrentStep />
        <h3 className="fs-4xl ">
          A few last details, then you can check and publish your profile.
        </h3>
        <p className="fs-base ">
          A professional photo helps you build trust with your clients. To keep
          things safe and simple, they&apos;ll pay you through us - which is why
          we need your personal information.
        </p>
      </div>
      <FreelancerAddress />
    </div>

    <FreelancerProfileEditModal />
    </>
  );
};

// ========= Address component =================
export const ProfileReady = () => {
  return <></>;
};

// ========= professional role component =================
