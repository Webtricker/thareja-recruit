// type Props = {
//     className?: string;
//   };
// export const SectionTitle = ({}:SectionTitleProps)=>{}

import Image from "next/image";
import { GetStartedButton, OpenToContractButton } from "./Buttons";
import { GradientborderCard, Profile, WorkingTypeCard } from "./Cards";
import { CheckBox, CurrentStep } from "./ClientComponents";
import {
  DollarCircleBorderSVG,
  MonitorFindDocSVG,
  OpenedMailSVG,
  ProfileSmallSVG,
  RoundCircleCheck,
  VirtualTokenSVG,
} from "./Icons";

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

type InfoListProps = {
  children: React.ReactNode;
  text: string;
};
const InfoList = ({ children, text }: InfoListProps) => {
  return (
    <p className="flex items-center fs-md leading_normal tracking-[0.4px]">
      {children}
      <span className="ml-5">{text}</span>
    </p>
  );
};

const Seperator = () => {
  return (
    <span className="w-full h-[1px] block my-7 md:my-8 lg:my-[34px] bg-[#DDE3E7]"></span>
  );
};

// =========== conditional components ============
export const GetStarted = () => {
  return (
    <div className="w-full flex flex-wrap-reverse justify-between items-center lg:flex-nowrap gap-5 gap-y-20 pb-[151px]">
      <div className="w-full lg:max-w-[800px]">
        <SectionTitle
          className="mb-10 lg:mb-[100px]"
          text="Hey Muhammad l. Ready for your next big opportunity?"
        />
        <div className="w-full">
          <InfoList text="Answer a few questions and start building your profile">
            <ProfileSmallSVG className="min-w-6" />
          </InfoList>

          <Seperator />

          <InfoList text="Get virtual tokens to bid on jobs, with a starter pack or subscription">
            <VirtualTokenSVG className="min-w-6 " />
          </InfoList>

          <Seperator />

          <InfoList text="Apply for open roles or list services for clients to buy">
            <OpenedMailSVG className="min-w-6 " />
          </InfoList>

          <Seperator />

          <InfoList text="Get paid safely and know we’re there to help">
            <DollarCircleBorderSVG className="min-w-6 " />
          </InfoList>

          <Seperator />
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-center gap-5 gap-y-5">
          <GetStartedButton />{" "}
          <p className="flex fs-md leading_normal tracking-[0.4px]">
            If only takes 5-10 minutes and you can edit it later.We’ll save as
            you go.
          </p>
        </div>
      </div>

      <Profile />
    </div>
  );
};

// ========== Freelancer setup components =================
export const WorkingExperience = () => {
  return (
    <div className="w-full">
      <CurrentStep />
      <SectionTitle
        className="my-5 max-w-[800px]"
        text="A few quick questions: First, have you freelanced before?"
      />
      <SectionDes
        className="max-w-[800px]"
        text="This lets us know how much help to give you along the way. We won’t share your answer with anyone else, including potential clients."
      />
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] gap-5 lg:gap-6 2xl:gap-[84px] mt-[50px] lg:mt-[60px]">
        <GradientborderCard
          text="I am brand new to this"
          dataKey="workingExperience"
          key="I am brand new to this"
          className="!h-full"
        >
          <div className="w-full flex justify-between">
            <Image
              height={120}
              width={120}
              src="/svgs/onboarding/no-experience.svg"
              alt="Card image"
            />
            <CheckBox
              activeKey="I am brand new to this"
              dataKey="workingExperience"
            />
          </div>
        </GradientborderCard>
        <GradientborderCard
          text="I have some experience"
          dataKey="workingExperience"
          key="I have some experience"
          className="!h-full"
        >
          <div className="w-full flex justify-between">
            <Image
              height={120}
              width={120}
              src="/svgs/onboarding/some-experience.svg"
              alt="Card image"
            />
            <CheckBox
              activeKey="I have some experience"
              dataKey="workingExperience"
            />
          </div>
        </GradientborderCard>
        <GradientborderCard
          text="I am an expert"
          dataKey="workingExperience"
          key="I am an expert"
          className="!h-full"
        >
          <div className="w-full flex justify-between">
            <Image
              height={120}
              width={120}
              src="/svgs/onboarding/expert-freelancer.svg"
              alt="Card image"
            />
            <CheckBox activeKey="I am an expert" dataKey="workingExperience" />
          </div>
        </GradientborderCard>
      </div>
    </div>
  );
};

export const FreelancingGoal = () => {
  return (
    <div className="w-full">
      <CurrentStep />
      <SectionTitle
        className="my-5 max-w-[800px]"
        text="Got it. What’s your biggest goal for freelancing?"
      />
      <SectionDes
        className="max-w-[800px]"
        text="Different people come to Recruit for various reasons. We want to highlight the opportunities that fit your goals best while still showing you all the possibilities."
      />
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 lg:gap-6 mt-[50px] lg:mt-[60px]">
        <GradientborderCard
          text="To earn my main income"
          dataKey="biggestGoal"
          className="!h-full"
          key="To earn my main income"
        >
          <div className="w-full flex justify-between">
            <Image
              height={120}
              width={120}
              src="/svgs/onboarding/main-earning.svg"
              alt="Card image"
            />
            <CheckBox
              activeKey="To earn my main income"
              dataKey="biggestGoal"
            />
          </div>
        </GradientborderCard>
        <GradientborderCard
          text="To make money on the side"
          dataKey="biggestGoal"
          key="To make money on the side"
          className="!h-full"
        >
          <div className="w-full flex justify-between">
            <Image
              height={120}
              width={120}
              src="/svgs/onboarding/side-money.svg"
              alt="Card image"
            />
            <CheckBox
              activeKey="To make money on the side"
              dataKey="biggestGoal"
            />
          </div>
        </GradientborderCard>
        <GradientborderCard
          text="To get experience, for a full-time job"
          dataKey="biggestGoal"
          key="To get experience, for a full-time job"
          className="!h-full"
        >
          <div className="w-full flex justify-between">
            <Image
              height={120}
              width={120}
              src="/svgs/onboarding/for-job-experience.svg"
              alt="Card image"
            />
            <CheckBox
              activeKey="To get experience, for a full-time job"
              dataKey="biggestGoal"
            />
          </div>
        </GradientborderCard>
        <GradientborderCard
          text="I don’t have a goal in mind yet"
          dataKey="biggestGoal"
          key="I don’t have a goal in mind yet"
          className="!h-full"
        >
          <div className="w-full flex justify-between">
            <Image
              height={120}
              width={120}
              src="/svgs/onboarding/no-goal-yet.svg"
              alt="Card image"
            />
            <CheckBox
              activeKey="I don’t have a goal in mind yet"
              dataKey="biggestGoal"
            />
          </div>
        </GradientborderCard>
      </div>
    </div>
  );
};

export const WorkingType = () => {
  return (
    <div className="w-full">
      <CurrentStep />
      <SectionTitle
        className="my-5 max-w-[800px]"
        text="And how would you like to work?"
      />
      <SectionDes
        className="max-w-[800px]"
        text="Everybody works in different ways, so we have different ways of helping you win work. You can
select multiple preferences now and can always change it later!"
      />
      <div className="w-full flex-col lg:flex-row gap-[50px] gap-y-10 max-w-[970px] my-10 flex justify-between">
        <WorkingTypeCard
          title="I'd like to find opportunities myself"
          des="Clients post jobs on our Talent MarketplaceTM: you can browse and bid for them, or get invited by a client."
          key="first card"
        >
          <MonitorFindDocSVG />
        </WorkingTypeCard>
        <WorkingTypeCard
          title="I'd like to package up my work for clients to buy"
          des="Define your service with prices and timelines: we@apos;ll list it in our Project CatalogTM for clients to buy right away."
          key="second card"
        >
          <Image
            src="/svgs/onboarding/freelancer-table.svg"
            width={100}
            height={100}
            alt="Freelancer desk icon"
          />
        </WorkingTypeCard>
      </div>

      <div className="w-full flex items-center gap-3 mb-5">
        <OpenToContractButton />
        <span className="text-base md:text-[18px] leading_normal">
          I@apos;m open to contract-to-hire opportunities - Start with a
          contract, and later explore a full-time option with the client
        </span>
      </div>

      <div className="w-full bg-[#dde3e766] flex items-center gap-3 p-[14px] rounded-[10px] ">
        <RoundCircleCheck />{" "}
        <span>
          Okay, thanks! We@apos;ll keep an eye out for the right opportunities.
        </span>
      </div>
    </div>
  );
};
