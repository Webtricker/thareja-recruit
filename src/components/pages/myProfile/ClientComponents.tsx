"use client";

import SettingsContentCardWrapper from "@/components/shared/card/SettingsCardWrapper";
import SelectDropdown from "@/components/shared/dropdown/SelectDropdown";
import Link from "next/link";
import { ReactNode } from "react";
import {
  DeviantARTSVG,
  DribbbleSVG,
  GithubSVG,
  StackOverflowSVG,
  XMarkBlueSVG,
} from "./Icons";
import { visibilityValues } from "./StaticData";

export const MyProfilePreferences = () => {
  // constrant
  const VISIBILITY_KEY = "EXPAND_MY_PROFILE_VISIBILITY_DROPDOWN";
  const PROJECT_PREFERENCE_KEY =
    "EXPAND_MY_PROFILE_PROJECT_PREFERENCE_DROPDOWN";

  // handlers
  const handleVisibilitySelect = (val: string) => {};
  const handleProjectPreferenceSelect = (val: string) => {};

  return (
    <SettingsContentCardWrapper>
      <div className="w-full ">
        <div className="w-full mb-[22px]">
          <p className="fs-md mb-2.5">Visibility</p>
          <SelectDropdown
            key={VISIBILITY_KEY}
            activeKey={VISIBILITY_KEY}
            clickHandler={handleVisibilitySelect}
            defaultLabel="Public"
            items={visibilityValues}
            position="absolute"
            containerStyle="!rounded-[20px]"
            labelStyle="text-[#A8B7C1]"
          />
        </div>
        <div className="w-full mb-[22px]">
          <p className="fs-md mb-2.5">Project preference</p>
          <SelectDropdown
            key={PROJECT_PREFERENCE_KEY}
            activeKey={PROJECT_PREFERENCE_KEY}
            clickHandler={handleProjectPreferenceSelect}
            defaultLabel="Both short-term and long-term projects"
            items={visibilityValues}
            position="absolute"
            containerStyle="!rounded-[20px]"
            labelStyle="text-[#A8B7C1]"
          />
        </div>
        <div className="w-full">
          <p className="fs-md mb-5">Earnings privacy</p>
          <p className="fs-md mb-2.5">Want to keep your earnings private?</p>
          <p className="fs-md">
            <Link href="#" className="text-[#005AFF]">
              Upgrade to a Freelancer Plus Membership
            </Link>{" "}
            to enable this setting.
          </p>
        </div>
      </div>
    </SettingsContentCardWrapper>
  );
};

type AcountItemProps = {
  showCancelBtn?: boolean;
  children: ReactNode;
  className?: string;
};
const AcountItem = ({
  className = "",
  children,
  showCancelBtn,
}: AcountItemProps) => {
  return (
    <div
      className={`py-1.5 px-6 md:px-7 w-full border  rounded-[12px]  flex items-center jsutify-between ${className}`}
    >
      <div className="w-full flex items-center justify-center gap-[18px] flex-grow">
        {children}
      </div>
      {showCancelBtn ? (
        <button className="">
          <XMarkBlueSVG />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export const Accounts = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-5">
      <div className="w-full flex flex-col gap-5">
        <AcountItem
          showCancelBtn={true}
          className="border-[#97BCFF]"
          key="GITHUB"
        >
          <GithubSVG />
          <span className="text-[#005AFF] fs-md">Github</span>
        </AcountItem>

        <AcountItem
          showCancelBtn={true}
          className="border-[#97BCFF]"
          key="DRIBBBLE"
        >
          <DribbbleSVG />
          <span className="text-[#005AFF] fs-md">Dribbble</span>
        </AcountItem>
      </div>
      <div className="w-full flex flex-col gap-5">
        <AcountItem className="border-[#DDE3E7]" key="STACK_OVERFLOW">
          <StackOverflowSVG />
          <span className="text-[#005AFF] fs-md">StackOverlow</span>
        </AcountItem>

        <AcountItem className="border-[#DDE3E7]" key="DEVIANT_ART">
          <DeviantARTSVG />
          <span className="text-[#005AFF] fs-md">DeviantART</span>
        </AcountItem>
      </div>
    </div>
  );
};
