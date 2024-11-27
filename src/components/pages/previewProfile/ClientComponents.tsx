"use client";

import Image from "next/image";
import {
  AddEducationBtn,
  DeleteAddedEducationBtn,
  DeleteAddedWorkBtn,
  DescriptionEditBtn,
  EditAddedEducationBtn,
  EditAddedWorkBtn,
  HourlyRateEditBtn,
  LanguageEditBtn,
  ProfileEditBtn,
  RoleTitleEditBtn,
} from "./Buttons";
import { skillDescription } from "./StaticData";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";



export const SelectedProfile = () => {
  const {profileSrc} = useSelector((state:RootState)=>state.createFreelancerProfile);
  return (
    <div className="w-full relative max-w-[100px] max-h-[100px] ">
      <Image
        height={100}
        className="max-w-[100px] w-[100px] h-[100px] max-h-[100px] rounded-full"
        width={100}
        // src={profileSrc}
        src={profileSrc?profileSrc:'/svgs/profile/preview-profile-image.svg'}
        alt="user profile"
      />
      <ProfileEditBtn />
    </div>
  );
};

 
export const SelectedLanguages =()=> {
  return <div className="w-full flex gap-5 justify-between">
  <div className="flex-grow">
    <h3 className="fs-lg-lh-normal mb-1.5">Languages</h3>
    <p className="fs-base">English: Basic</p>
  </div>
  <LanguageEditBtn />
</div>
}

export const RoleTitle = () => {
  const createFreelancerProfile = useSelector((state:RootState)=>state.createFreelancerProfile);
  const title = createFreelancerProfile.professionalRole || "";
  return (
    <div className="w-full mb-5 md:mb-0 md:max-w-[293px] flex items-center justify-between gap-5">
      <h2 className="fs-3xl">{title}</h2>
      <RoleTitleEditBtn />
    </div>
  );
};

export const HourlyRate = () => {
  const {hourlyRate} = useSelector((state:RootState)=>state.createFreelancerProfile);
  return (
    <div className="w-full md:max-w-[212px] flex items-center justify-between gap-5">
      <div className="w-full max-w-[114px] ">
        <h2 className="fs-3xl mb-2">{hourlyRate?'$'+hourlyRate:'$0'}</h2>
        <p className="fs-lh-lh-normal">Hourly rate</p>
      </div>
      <HourlyRateEditBtn />
    </div>
  );
};

export const SkillDescription = () => {
  const {bio} = useSelector((state:RootState)=>state.createFreelancerProfile);
  return (
    <>
      <div className="w-full max-w-[952px]">
        <p className="fs-base ">{bio ? bio :""}</p>
      </div>
      <DescriptionEditBtn />
    </>
  );
};

export const SelectedSkills = () => {
  const {workingSkills:selectedSkills} = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );
  return (
    <div className="flex gap-2.5 flex-wrap">
      {selectedSkills.map((skill, _i) => (
        <button className="skill-btn-large fs-md" key={_i}>
          {skill.name}
        </button>
      ))}
    </div>
  );
};

export const WorkDetails = () => {

  const {releventWorkExperience} = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );

  if(!releventWorkExperience)return <></>;

  return (
    <div className="w-full flex flex-col gap-5 md:gap-6 lg:gap-7">
   {
    releventWorkExperience.map((item)=> <div key={item.id} className="w-full flex flex-col gap-2.5">
    {/* map all added work details */}
    <div className="flex flex-col gap-2.5 ">
      <div className="w-full flex gap-2.5 items-center justify-between">
        <h3 className="fs-lg-lh-normal">
         {item.title?item.title:""}
        </h3>
        <div className="w-full  max-w-[90px] flex gap-2.5 items-center justify-between">
          <EditAddedWorkBtn data={item} />
          <DeleteAddedWorkBtn id={item.id} />
        </div>
      </div>
      <p className="fs-base">{item.startingMonth} {item.startingYear} - {item.isCurrentlyWorking?"Present":item.endingMonth+" "+item.endingYear}</p>
      <p className="fs-base">
      {item.description && item.description?.length > 500 ? (item.description?.slice(0,500)+"..."):item.description}
      </p>
    </div>
  </div>)
   }
    </div>
  );
};

export const EducationDetails = () => {
  const {educations} = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );

  if(!educations)return <></>;
  
  return (
    <div className="w-full flex flex-col gap-5 md:gap-6 lg:gap-7">
        {
          educations.map(item=><div
            key={item.id}
          className="flex flex-col gap-2.5 ">
            <div className="w-full flex gap-2.5 items-center justify-between">
              <h3 className="fs-lg-lh-normal">{item.school}</h3>
              <div className="w-full  max-w-[90px] flex gap-2.5 items-center justify-between">
                <EditAddedEducationBtn data={item} />
                <DeleteAddedEducationBtn id={item.id} />
              </div>
            </div>
            <p className="fs-base">
            {item.degree}, {item.areaOfStudy} {item.startingDate} - {item.endingDate}
            </p>
            <p className="fs-base">
            {item.description && item.description?.length > 500 ? (item.description?.slice(0,500)+"..."):item.description}
            </p>
          </div>)
        }
    </div>
  );
};
