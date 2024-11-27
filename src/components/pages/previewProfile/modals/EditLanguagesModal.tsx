"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setProfileSrc } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageSelector, ProficiencySelector } from "../../createFreelancerProfile/SelectItems";
import { AddALanguageButton, DeleteLanguageButton } from "../../createFreelancerProfile/Buttons";

const EditLanguagesModal = () => {
    const dispatch = useDispatch();
    const KEY = "SHOW_PREVIEW_PROFILE_LANGUAGES_UPDATE_MODAL";
  
    const {speakingLanguages} = useSelector((state:RootState)=>state.createFreelancerProfile);
    

    const handleModal = (action:"CLOSE"|"SAVE") => {
        if(action === "CLOSE"){}else{}
        dispatch(toggleModal(null));
        document.body.style.overflowY = "auto";
      };

    return (
      <CustomModal
        containerStyle="!max-w-[776px] xl:px-8"
        key={KEY}
        activeKey={KEY}
      >
        <CustomModalHeader title="Add language" />
        <div className="country_dropdown_scrollbar min-h-[508px] flex flex-col gap-6 md:gap-7 w-full pl-2 pr-1  md:pl-3 md:pr-1  lg:pl-[14px] lg:pr-1.5 xl:pl-6 xl:pr-4 py-3 md:py-5 lg:py-[30px] !overflow-y-auto">
        <div
            className={`w-full md:flex items-center ${
            speakingLanguages.length > 1 &&
            " border-b-2 border-[#005aff1a] pb-5 mb-5"
            }`}
        >
            <div className="w-full justify-between md:flex  gap-2.5 mb-10 md:mb-0">
            <div className="w-full max-w-[720px] mb-5 md:mb-0">
                <h4 className="fs-lg-lh-normal mb-2.5">Languages</h4>
                {/* <div className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"> */}
                <div className="w-full md:max-w-[290px] relative">
                <label
                    className={`fs-base w-full flex items-center justify-between gap-5 bg-[#FBFCFF] py-[10.5px] px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]`}
                >
                    English
                </label>
                </div>
            </div>
            <div className="w-full max-w-[720px]">
                <h4 className="fs-lg-lh-normal mb-2.5">Proficiency</h4>
                <ProficiencySelector id={speakingLanguages[0].id} />
            </div>
            </div>
            <div className="w-full max-w-[30px] md:h-[30px]"></div>
        </div>

        {speakingLanguages.length > 1 &&
            speakingLanguages.map((_item, _i) => {
            if (_i === 0) return <></>;
            return (
                <div
                key={_item.id}
                className="w-full justify-between md:justify-start flex items-center border-b-2 border-[#005aff1a] pb-5"
                >
                <div className="w-full justify-between md:flex  gap-2.5 mb-10 md:mb-0">
                    <div className="w-full max-w-[720px] mb-5 md:mb-0">
                    <h4 className="fs-lg-lh-normal mb-2.5 md:hidden">
                        Languages
                    </h4>
                    {/* <div className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"> */}
                    <LanguageSelector key={_item.id} id={_item.id} />
                    </div>
                    <div className="w-full max-w-[720px]">
                    <h4 className="fs-lg-lh-normal mb-2.5 md:hidden">
                        Proficiency
                    </h4>
                    <ProficiencySelector key={_item.id} id={_item.id} />
                    </div>
                </div>
                <div className="w-full max-w-[30px] h-[30px] flex items-center justify-end md:justify-start">
                    <DeleteLanguageButton id={_item.id} />
                </div>
                </div>
            );
            })}

            <div className="w-auto">
            <AddALanguageButton />
            </div>
         </div>
         <div className="relative w-full mt-[26px] md:mt-[32px] lg:mt-[44px] flex flex-wrap items-center justify-center md:justify-end gap-[14px]">
            <BtnLarge
              style=""
              handler={()=>handleModal("CLOSE")}
              key="CANCEL_SKILL_CHANGE_MODAL_BTN"
              text="Cancel"
            />
            <BtnLarge
              style="btn-bg-blue"
              handler={()=>handleModal("SAVE")}
              text="Save"
              key="SAVE_CHANGED_SKILLS_MODAL_BTN"
            />
          </div>
      </CustomModal>
    );
  };
  export default EditLanguagesModal;