"use client";

import { updateQueryData } from "@/redux/features/onboarding/freelancerGetStartedSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { CheckBox } from "./ClientComponents";
import { ActiveCircleSVG, StarSVG, SuitcaseSVG } from "./Icons";

// ======= Get started component's profile card ============
export const Profile = () => {
  return (
    <div className="w-full lg:max-w-[460px] rounded-[20px] border border-[#97BCFF] px-[30px] py-10 bg-[#FBFCFF]">
      <div className="border-2 mx-auto border-[#01D18F] rounded-full w-full relative flex items-center justify-center max-w-[125px] h-[125px] mb-[30px]">
        <Image
          height={112}
          width={112}
          src="/img/profile/ali-d.svg"
          alt="Profile Image"
        />
        <ActiveCircleSVG className="absolute bottom-[4.31px] right-[4.31px] z-30" />
      </div>

      <h2 className="text-center fs-3xl ">Muhammad l.</h2>

      <p className="text-center fs-lg-lh-normal my-[18px] ">
        Customer Experience Consultant
      </p>
      <div className="w-full flex flex-wrap gap-2 sm:gap-[30px] items-center justify-center fs-lg-lh-normal mb-[30px]">
        <p className="flex items-center gap-2.5">
          <StarSVG />
          <span>5.0</span>
        </p>
        <p>$65.00/hr</p>
        <p className="flex items-center gap-2.5">
          <SuitcaseSVG />
          <span>14jobs</span>
        </p>
      </div>

      <p className="text-center fs-lg-lh-normal text-[#525966]">
        “ Recruit has enabled me to increase my rates. I know what I’m bringing
        to the table and love the felling of being able to help a verity of
        clients.”
      </p>
    </div>
  );
};

// ===== gradient border for card ========
type GradientborderProps = {
  className?: string;
  children: React.ReactNode;
  maxWidth?: string;
  text: string;
  dataKey: "workingExperience" | "biggestGoal" | "workingTechnique";
};
export const GradientborderCard = ({
  className,
  maxWidth = "",
  children,
  dataKey,
  text,
}: GradientborderProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateQueryData({ key: dataKey, value: text }));
  };
  return (
    <div
      onClick={handleClick}
      className={`w-full p-[1px] rounded-[20px] bg-gradient-to-r from-[#01D18F] to-[#005AFF] ${maxWidth}`}
    >
      <div
        className={`w-full px-10 py-[30px] flex flex-col bg-white  rounded-[19.08px] ${className}`}
      >
        {children}
        <p className="fs-2xl mt-[30px]">{text}</p>
      </div>
    </div>
  );
};

// ======= freelancing working type cards =====
type WorkingTypeCardProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
  des: string;
};
export const WorkingTypeCard = ({
  des,
  title,
  children,
  className,
}: WorkingTypeCardProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateQueryData({ key: "workingTechnique", value: title }));
  };
  return (
    <div
      onClick={handleClick}
      className={`w-full rounded-[20px] py-[30px] p-4 md:p-6 lg:p-[30px] px-10 border hover:border-transparent border-[#0000001a] freelancer-onboarding-card-shadow ${className}`}
    >
      <div className="w-full flex justify-between mb-6">
        {children}
        <CheckBox activeKey={title} dataKey="workingTechnique" />
      </div>
      <p className="fs-md leading_normal mb-2">{title}</p>
      <p className="text-base md:text-[18px] leading_normal ">{des}</p>
    </div>
  );
};
