import { ThreeDotSVG } from "@/components/shared/card/Icons";
import SettingsContentCardWrapper from "@/components/shared/card/SettingsCardWrapper";
import Link from "next/link";
import { EditCategoriesButton } from "./Buttons";
import { Accounts } from "./ClientComponents";
import { ParallaledSVG, XMarkSmallSVG } from "./Icons";
import { ExperienceSelector } from "./SelectItems";
import { experienceData } from "./StaticData";

export const SetProfileJobExperienceLevel = () => {
  return (
    <SettingsContentCardWrapper>
      <div className="w-full ">
        <h3 className="fs-xl-lh-normal mb-5 lg:mb-6">My profile</h3>
        <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-7 lg:gap-[50px]">
          {experienceData.map((item) => (
            <ExperienceSelector item={item} key={item.level} />
          ))}
        </div>
      </div>
    </SettingsContentCardWrapper>
  );
};

export const SelectedCategories = () => {
  return (
    <SettingsContentCardWrapper>
      <div className="w-full ">
        <div className="w-full flex justify-between gap-10 mb-5 lg:mb-6">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            Categories
          </h3>
          <EditCategoriesButton />
        </div>
        <h3 className="fs-lg-lh-normal mb-5">
          Web, Mobile & Software Development
        </h3>
        <div className="w-full flex flex-wrap gap-2.5">
          <button className="btn-large fs-md bg-[#dde3e766]">
            Web, Mobile Design
          </button>
        </div>
      </div>
    </SettingsContentCardWrapper>
  );
};

export const SpecialisedProfiles = () => {
  return (
    <SettingsContentCardWrapper>
      <div className="w-full">
        <div className="w-full flex justify-between gap-10 mb-2.5 lg:mb-6">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            Specialised profiles
          </h3>

          <button className="btn-gradient-light-blue">
            <ParallaledSVG />
          </button>
        </div>
        <h3 className="fs-lg-lh-normal mb-6">2 out of 2 published</h3>
        <p className="fs-base mb-6 md:mb-7 lg:mb-[30px]">
          Create up to two different versions of your profile to more
          effectively highlight your individual specialties.{" "}
          <Link href="#" className="text-[#005AFF]">
            Learn more
          </Link>
        </p>
        <div className="w-full flex justify-between gap-10 mb-2.5">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            UX/UI Design - Published
          </h3>
          <button className="btn-gradient-light-blue">
            <ThreeDotSVG />
          </button>
        </div>
        <div className="w-full flex justify-between gap-10">
          <h3 className="fs-xl-lh-normal mb-5 md:mb-0 max-w-[300px] md:max-w-[99999px]">
            Specialised profiles
          </h3>
          <button className="btn-gradient-light-blue">
            <ThreeDotSVG />
          </button>
        </div>
      </div>
    </SettingsContentCardWrapper>
  );
};

export const LinkedAccounts = () => {
  return (
    <SettingsContentCardWrapper>
      <div className="w-full">
        <h3 className="mb-2.5 lg:mb-6 xl:mb-[30px] fs-xl-lh-normal">
          Linked accounts
        </h3>
        <Accounts />
      </div>
    </SettingsContentCardWrapper>
  );
};

export const APIpreference = () => {
  return (
    <SettingsContentCardWrapper>
      <div className="w-full">
        <h3 className="mb-2.5 fs-xl-lh-normal">AI preference</h3>
        <p className="fs-base mb-6 md:mb-7 lg:mb-[30px]">
          Choose how your Recruit data is used gor AI training and improvement.
          <Link href="#" className="text-[#005AFF]">
            Learn more
          </Link>
        </p>
        <div className="w-full mt-2.5 lg:mt-6 xl:mt-[30px">
          <p className="w-full flex items-center justify-start gap-2.5 mb-5">
            <XMarkSmallSVG />
            <span>Your data is not being used to train our AI</span>
          </p>

          <button className="fs-md btn-large btn-border-blue">
            Change preference
          </button>
        </div>
      </div>
    </SettingsContentCardWrapper>
  );
};
