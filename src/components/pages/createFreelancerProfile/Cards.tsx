"use client";

import { AddPlusSVG } from "@/components/shared/icons/Icons";
import {
  ReleventWorkExperience,
  TEducation,
} from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { updateQueryData } from "@/redux/features/onboarding/freelancerGetStartedSlice";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActiveCircleSVG,
  StarSVG,
  SuitcaseSVG,
} from "../congratulations/Icons";
import {
  DeleteEducationButton,
  DeleteExperienceButton,
  EditEducationButton,
  EditExperienceButton,
} from "./Buttons";
import { AddExperienceSVG, DocumentFileSVG } from "./Icons";
import { toast } from "react-toastify";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { RootState } from "@/redux/store";

// ======= Get started component's profile card ============
type ProfileProps = {
  imgUrl: string;
  noticeText: string;
  style?: string;
};
export const Profile = ({ imgUrl, noticeText, style }: ProfileProps) => {
  return (
    <div
      className={`mx-auto lg:mx-0 lg:max-w-[460px] flex flex-col gap-[30px] items-center  w-full py-10 px-[30px] rounded-[20px] border border-[#97BCFF] bg-[#FBFCFF] ${style}`}
    >
      <Image height={125} width={125} src={imgUrl} alt="Profile Image" />
      <p className="text-center fs-lg-lh-normal ">{noticeText}</p>
    </div>
  );
};

type DetailedProfile = {};
export const DetailedProfile = ({}: DetailedProfile) => {
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
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center gap-[30px] fs-lg-lh-normal mb-[30px] mt-4">
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

      <p className="fs-base text-[#525966]">
        I&apos;m a developer experienced in building websites for small and
        medium-sized businesses. Whether you&apos;re trying to win work, list
        your services, or create a new online store, I can help.
      </p>
      <ul className="list-disc list-inside fs-base">
        <li className="mt-[14px]">
          Knows HTML and CSS3, PHP, jQuery, Wordpress, and SEO
        </li>
        <li className="mt-[14px]">
          Full project management from start to finish
        </li>
        <li className="mt-[14px]">
          Regular communication is important Enter your profile overview to me,
          so let&apos;s keep in touch.
        </li>
      </ul>
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
  maxWidth,
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
        className={`w-full px-10 py-[30px] flex flex-col items-center bg-white  rounded-[19.08px] ${className}`}
      >
        {children}
        <p className="fs-2xl mt-[30px]">{text}</p>
      </div>
    </div>
  );
};

type AddedExperirenceCardProps = {
  item: ReleventWorkExperience;
};
export const AddedExperirenceCard = ({ item }: AddedExperirenceCardProps) => {
  return (
    <div className="bg-[#FBFCFF] dashed-border p-4 sm:p-[30px] rounded-[20px]  min-h-[260px]">
      <div className="w-full flex justify-between">
        <DocumentFileSVG />
        <div className="w-full flex-grow flex items-center justify-end gap-5">
          <EditExperienceButton id={item.id} />
          <DeleteExperienceButton id={item.id} />
        </div>
      </div>

      <h3 className="fs-xl-lh-normal mt-2">{item.title}</h3>
      <h4 className="fs-lg-lh-normal mb-1.5 mt-2.5">{`${item.company} | ${
        item.startingMonth
      } ${item.startingYear} - ${
        item.isCurrentlyWorking
          ? "Present"
          : `${item.endingMonth} ${item.endingYear}`
      }`}</h4>
        <p className="fs-base mb-2.5 text-[#525966]">
      {item.city ? item.city:''} {item.country? item.country:""}
        </p>

      {item.description && (
        <p className="fs-base text-[#525966]">
          {item.description.length <= 90
            ? item.description
            : `${item.description.slice(0, 89)}...`}
        </p>
      )}
    </div>
  );
};

// ==============education card ================
type AddedEducationProps = {
  item: TEducation;
};
export const EducationCard = ({ item }: AddedEducationProps) => {
  return (
    <div className="bg-[#FBFCFF] dashed-border p-[30px] rounded-[20px]  min-h-[260px]">
      <div className="w-full flex justify-between">
        <DocumentFileSVG />
        <div className="w-full flex-grow flex items-center justify-end gap-5">
          <EditEducationButton id={item.id} />
          <DeleteEducationButton id={item.id} />
        </div>
      </div>

      <h3 className="fs-xl-lh-normal mt-2">{item.school}</h3>
      <h4 className="fs-lg-lh-normal mb-1.5 mt-2.5">
        {item.startingDate} - {item.endingDate}
      </h4>
      {item.areaOfStudy ? (
        <p className="fs-base mb-2.5 text-[#525966]">{item.areaOfStudy}</p>
      ) : (
        <></>
      )}

      {item.description && (
        <p className="fs-base text-[#525966]">
          {item.description.length <= 90
            ? item.description
            : `${item.description.slice(0, 89)}...`}
        </p>
      )}
    </div>
  );
};

// =============  language card ==============
type LanguageProps = {
  id: number;
  isDefault: boolean;
};
export const Language = ({ id, isDefault }: LanguageProps) => {
  return <div className="w-full"></div>;
};

// ======== address component card ===========
export const UpdateFreelancerProfile = () => {
  const dispatch = useDispatch();

  const {profileSrc} = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );

  const imgSrc = profileSrc?profileSrc:'/svgs/onboarding/default-profile.svg';

  // profile modal toggler key
 const ACTIVE_KEY = 'OPEN_CREATE_FREELANCER_PROFILE_PROFILE_UPDATE_MODAL'
  
  // ====== handlers ======
  const handleUpload = () => {
    dispatch(toggleModal(ACTIVE_KEY))
  };

  useEffect(()=>{

  },[profileSrc])
  
  return (
    <div className="w-full max-w-[208px] ">
      <div className="w-full max-w-[125px] relative mb-6 mx-auto">
        <Image
          height={125}
          width={125}
          src={imgSrc}
          alt="Profile image"
          className="max-w-[125px] rounded-full w-[125px] h-[125px] max-h-[125px] mx-auto"
        />
        <button
          onClick={handleUpload}
          className="absolute bottom-0 right-0 rounded-full"
        >
          <AddExperienceSVG className="rounded-full" />
        </button>
        
      </div>
      <button
        onClick={handleUpload}
        className="gap-[14px] justify-between flex-nowrap inline-flex items-center btn-medium btn-border-blue"
      >
        <AddPlusSVG className="inline" />
        <span className="fs-md inline w-full">Upload photo</span>
      </button>
    </div>
  );
};
