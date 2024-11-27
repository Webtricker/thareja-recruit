"use client";
import { setActiveFreelancerProfileModal } from "@/redux/features/profile/FreelancerProfileActiveStages";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Application from "../../pages/freelancerProfile/Application";
import Certifications from "../../pages/freelancerProfile/Certifications";
import CoverLetter from "../../pages/freelancerProfile/CoverLetter";
import EmploymentHistory from "../../pages/freelancerProfile/EmploymentHistory";
import LocationInfo from "../../pages/freelancerProfile/LocationInfo";
import OtherExperience from "../../pages/freelancerProfile/OtherExperience";
import ProfileImageAndInitialInfo from "../../pages/freelancerProfile/ProfileImageAndInitialInfo";
import SkillsDetails from "../../pages/freelancerProfile/SkillsDetails";
import ViewProfile from "../../pages/freelancerProfile/ViewProfile";
import { BackWardArrowSVG, SpaureBoxWithCornerArrowSVG } from "./Icons";

const TopBar = () => {
  const dispatch = useDispatch();
  const hanldeClick = () => {
    document.body.style.overflowY = "auto";
    dispatch(setActiveFreelancerProfileModal(false));
  };
  return (
    <div className=" w-full flex items-center justify-between mb-[30px] lg:mb-[42px]">
      <button
        onClick={(e) => {
          e.stopPropagation();
          hanldeClick();
        }}
      >
        <BackWardArrowSVG />
      </button>
      <div
        onClick={(e) => {
          e.stopPropagation();
          hanldeClick();
        }}
        className="flex items-center gap-[30px]"
      >
        <Link
          href="freelancer-profile"
          target="_blank"
          className="w-full flex items-center text-[#005AFF]    fs-lg-lh-md lg:leading-[40px]"
        >
          Open profile in a new window
        </Link>
        <SpaureBoxWithCornerArrowSVG />
      </div>
    </div>
  );
};

// const TopBar =()=>{
//     return <div className='w-full'>

//     </div>
// }

// const TopBar =()=>{}

//  ========== root component ============
const FreelancersProfileModal = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) =>
      state.freelancerProfileActiveStages.activeFreelancerProfileModal
  );

  //  ========== hidden overflow of body ========
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);

  if (active)
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setActiveFreelancerProfileModal(false));
          document.body.style.overflowY = "auto";
        }}
        className="w-full h-full fixed top-0 left-0 bg-[#17171791] overflow-x-hidden z-[999999999]"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setActiveFreelancerProfileModal(true));
          }}
          className="custom_scrollbar freelancer_profile_scrollbar relative ml-auto p-5 md:p-6 lg:p-8 xl:p-9 2xl:p-10 w-full 2xl:max-w-[1320px] overflow-y-auto bg-white rounded-[20px] md:rounded-[30px] lg:rounded-[40px] 2xl:rounded-[50px] z-[999999999999999999]"
        >
          <TopBar />
          <ProfileImageAndInitialInfo />
          <LocationInfo />

          <div className="w-full lg:flex items-start justify-between gap-5 mb-[30px]">
            <div className="mb-10 lg:mb-0 w-full lg:w-3/6 2xl:w-full 2xl:max-w-[398px]  px-5 py-[30px] md:py-10 md:px-6 rounded-[20px] border border-[#0059ff33] bg-[#0059ff05]">
              <Application />
            </div>
            <div className="w-full lg:w-3/6 2xl:w-full 2xl:max-w-[810px] flex flex-col gap-8">
              <CoverLetter />
            </div>
          </div>
          <div className="w-full lg:flex justify-between gap-5 ">
            <div className="w-full lg:w-3/6 2xl:w-full 2xl:max-w-[398px] px-5  py-5 md:px-6 rounded-[20px] border border-[#0059ff33] bg-[#0059ff05] mb-10 lg:mb-0">
              <ViewProfile />
            </div>
            <div className="w-full lg:w-3/6 2xl:w-full 2xl:max-w-[810px] flex flex-col px-5 py-[30px] md:p-[30px] border border-[#0059ff33] rounded-[20px]">
              <SkillsDetails />
            </div>
          </div>
          <Certifications />
          <EmploymentHistory />
          <OtherExperience />
        </div>
      </div>
    );
  return <></>;
};

export default FreelancersProfileModal;
