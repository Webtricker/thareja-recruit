"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { addReleventExperience, ReleventWorkExperience, setActiveExperienceModalItemId, setActiveModal, setActiveWorkingExperienceToEdit, setProfileSrc, updateReleventExperience } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import { formatNumber, getCalculatedHourlyPrice, validateTextInputAsNumber } from "@/utils/UtilityFN";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPlusSVG } from "../Icons";
import { ModalCloseSVG, WarningRedSVG } from "@/components/shared/modal/Icons";
import { allSkills } from "../StaticData";
import { CountrySelector, StartAndEndingDateDropDownComponent } from "../../createFreelancerProfile/SelectItems";
import { CancelExperienceModalButton, CurrentlyWorkingTogglerButton, SaveExperienceDataButton } from "../../createFreelancerProfile/Buttons";


// types 

type TAction = {
    type: "ADD" | "REMOVE";
    value: {
        id:number,
        name:string,
    };
  };


  const ExperienceFormModal = ()=> {
    const dispatch = useDispatch();
    const {activeWorkingExperienceToEdit} = useSelector(
      (state: RootState) => state.createFreelancerProfile
    );

    const KEY = "SHOW_PREVIEW_PROFILE_ADD_WORK_HISTORY_MODAL";
  
    // ======= form state ========
    let initialState:ReleventWorkExperience = {
      id:0,
      title: "",
      company: "",
     country: "",
     city: "",
      startingMonth: "",
      startingYear:  "",
      endingMonth:  "",
      endingYear:  "",
      isCurrentlyWorking: false,
      description: "",
    };  
    const [formData, setFormData] = useState<ReleventWorkExperience>(activeWorkingExperienceToEdit?activeWorkingExperienceToEdit:initialState);
    const [error, setError] = useState<{ field: string; mess: string } | null>(
      null
    );


    // ========== handlers ============
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      const {
        title,
        company,
        startingYear,
        startingMonth,
        endingMonth,
        endingYear,
        isCurrentlyWorking,
      } = formData;
      if (!title) {
        setError({ field: "TITLE", mess: "Title is required." });
        return;
      }
      if (!company) {
        setError({ field: "COMPANY", mess: "Company name is required." });
        return;
      }
      if (!startingMonth || !startingYear) {
        setError({ field: "STARTING_DATE", mess: "Starting date is required." });
        return;
      }
      if (!endingMonth || !endingYear) {
        if (!isCurrentlyWorking) {
          setError({ field: "ENDING_DATE", mess: "Ending date is required." });
          return;
        }
      }
  
      formData.id = new Date().getTime();
  
   if(activeWorkingExperienceToEdit){
    dispatch(updateReleventExperience({ id: activeWorkingExperienceToEdit.id, value: formData }));
   }else{
    dispatch(addReleventExperience(formData));
   }
      setFormData(initialState);
      dispatch(setActiveExperienceModalItemId(null));
      dispatch(toggleModal(null));
    };


    // handlers
    const handleModalClose = () => {
      dispatch(setActiveWorkingExperienceToEdit(null));
      setFormData(initialState);
      dispatch(toggleModal(null));
      document.body.style.overflowY = "auto";
    };

 useEffect(() => {
 if(activeWorkingExperienceToEdit){
  setFormData(activeWorkingExperienceToEdit);
 }
 }, [activeWorkingExperienceToEdit])

    return (
      <CustomModal
      containerStyle="flex flex-col !max-w-[758px] !py-5 md:!py-5 lg:!py-5 !pl-2 !pr-1 md:!px-2 lg:px-2 overflow-hidden"
      key={KEY}
      activeKey={KEY}
    >
      <div 
      className="country_dropdown_scrollbar w-full pl-2 pr-1  md:pl-3 md:pr-1  lg:pl-[14px] lg:pr-1.5 xl:pl-6 xl:pr-4 py-3 md:py-5 lg:py-[30px] !overflow-y-auto"
      >
      <CustomModalHeader handler={handleModalClose} title={activeWorkingExperienceToEdit?"Update employment":"Add employment"} containerStyle="mb-6 md:mb-7"  />
      <form onSubmit={handleSubmit}
      className={`w-full duration-300 flex flex-col gap-5 md:gap-6 lg:gap-7 relative `}
      >
           {/* ========== modal body ========== */}
          {/* ==== title input ====  */}
          <div className="w-full">
            <label htmlFor="title" className="w-full fs-md block mb-2.5 ">
              Title*
            </label>
            <input
              id="title"
              onChange={(e) => {
                error && setError(null);
                setFormData({ ...formData, title: e.target.value });
              }}
              value={formData.title}
              placeholder="Ex: Software Engineer"
              type="text"
              className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
            />
            {error?.field === "TITLE" && (
              <p className="mt-1 text-red-400 flex items-center gap-1.5">
                <WarningRedSVG />
                <span className="text-base">
                  Value is required and can’t be empty.
                </span>
              </p>
            )}
          </div>
  
          {/* ==== add company input ====  */}
          <div className="w-full">
            <label htmlFor="company" className="w-full fs-md block mb-2.5 ">
              Company*
            </label>
            <input
              id="company"
              onChange={(e) => {
                error && setError(null);
                setFormData({ ...formData, company: e.target.value });
              }}
              value={formData.company}
              placeholder="Ex: Microsoft"
              type="text"
              className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
            />
            {error?.field === "COMPANY" && (
              <p className="mt-1 text-red-400 flex items-center gap-1.5">
                <WarningRedSVG />
                <span className="text-base">
                  Value is required and can’t be empty.
                </span>
              </p>
            )}
          </div>
  
          {/* ==== add Location ====  */}
          <div className="w-full">
            <label htmlFor="location" className="w-full fs-md block mb-2.5 ">
              Location
            </label>
            <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
              <input
                id="location"
                value={formData.city?formData.city:""}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value });
                }}
                placeholder="Ex: Location"
                type="text"
                className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
              />
              <CountrySelector formData={formData} setFormData={setFormData} />
            </div>
          </div>
  
          {/* ========= is currently working ======== */}
          <div className="w-full">
            <p className="w-full flex items-center gap-5">
              <CurrentlyWorkingTogglerButton
                formData={formData}
                setFormData={setFormData}
              />
              <span className="fs-base">I am currently working in this role</span>
            </p>
          </div>
  
          {/* ==== start and end date ====  */}
          <StartAndEndingDateDropDownComponent
            formData={formData}
            setFormData={setFormData}
            error={error}
            setError={setError}
          />
  
          {/* ====== description ======= */}
          <div className="w-full">
            <label htmlFor="description" className="w-full fs-md block mb-2.5 ">
              Description
            </label>
            <textarea
              id="description"
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
              value={formData.description ? formData.description : ""}
              placeholder="Already have a description? Past it here!"
              className="resize-none w-full min-h-[80px] lg:min-h-[95px] bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
            ></textarea>
          </div>


          <div className="relative w-full flex flex-wrap items-center justify-center md:justify-end gap-[14px] mt-[50px] md:mt-[60px] lg:mt-[72px]">
        <BtnLarge
          style="btn-border-blue"
          handler={handleModalClose}
          key="CANCEL_SAVING_EDUCATION_INFO"
          text="Back"
        />
        <BtnLarge
          style="btn-bg-blue"
          handler={()=>{}}
          type="submit"
          text="Save"
          key="SAVE_EDUCATION_INFO"
        />
      </div>
      </form>
      </div>
    </CustomModal>

    
    );
  }


  export default ExperienceFormModal;