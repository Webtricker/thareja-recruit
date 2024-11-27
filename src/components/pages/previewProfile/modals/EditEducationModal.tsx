"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { addEducation, addReleventExperience, ReleventWorkExperience, setActiveEducationToEdit, setActiveExperienceModalItemId, setActiveModal, setActiveWorkingExperienceToEdit, setProfileSrc, TEducation, updateEducationExperience, updateReleventExperience } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import { formatNumber, getCalculatedHourlyPrice, validateTextInputAsNumber } from "@/utils/UtilityFN";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPlusSVG } from "../Icons";
import { ModalCloseSVG, WarningRedSVG } from "@/components/shared/modal/Icons";
import { allSkills } from "../StaticData";
import { CountrySelector, DatesAttendenedForEducation, StartAndEndingDateDropDownComponent } from "../../createFreelancerProfile/SelectItems";
import { CancelExperienceModalButton, CurrentlyWorkingTogglerButton, SaveExperienceDataButton } from "../../createFreelancerProfile/Buttons";


// types 

  const EducationModal = ()=> {
    const dispatch = useDispatch();
    const {activeEducationToEdit} = useSelector(
      (state: RootState) => state.createFreelancerProfile
    );

    const KEY = "SHOW_PREVIEW_PROFILE_ADD_EDUCATION_MODAL";
  
    // ======= form state ========
    let initialState:TEducation = {
      degree:'',
      endingDate:"",
      school:"",
      startingDate:"",
      areaOfStudy:"",
      description:"",
      id:0,
    };  
    const [formData, setFormData] = useState<TEducation>(initialState);
    const [error, setError] = useState<{ field: string; mess: string } | null>(
      null
    );


    // ========== handlers ============
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      const {
      startingDate,
      endingDate,
      degree,
      school, 
      areaOfStudy 
      } = formData;
      if (!school) {
        setError({ field: "SCHOOL", mess: "This field is required." });
        return;
      }
  
      //  if update is available then update or create a new one
      if (activeEducationToEdit) {
        dispatch(updateEducationExperience({ id: activeEducationToEdit.id, value: formData }));
      } else {
        formData.id = new Date().getTime();
        dispatch(addEducation(formData));
      }
      
      setFormData(initialState);
      dispatch(setActiveEducationToEdit(null));
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
 if(activeEducationToEdit){
  setFormData(activeEducationToEdit);
 }
 }, [activeEducationToEdit])


 console.log(activeEducationToEdit)

    return (
      <CustomModal
      containerStyle="flex flex-col !max-w-[758px] !py-5 md:!py-5 lg:!py-5 !pl-2 !pr-1 md:!px-2 lg:px-2 overflow-hidden"
      key={KEY}
      activeKey={KEY}
    >
      <div 
      className="country_dropdown_scrollbar w-full pl-2 pr-1  md:pl-3 md:pr-1  lg:pl-[14px] lg:pr-1.5 xl:pl-6 xl:pr-4 py-3 md:py-5 lg:py-[30px] !overflow-y-auto"
      >
      <CustomModalHeader handler={handleModalClose} title={activeEducationToEdit?"Edit education":"Add education"} containerStyle="mb-6 md:mb-7"  />
      <form onSubmit={handleSubmit}
      className={`w-full duration-300 flex flex-col gap-5 md:gap-6 lg:gap-7 relative `}
      >
           {/* ========== modal body ========== */}
           <div className="w-full">
          <label htmlFor="school" className="w-full fs-md block mb-2.5 ">
          School*
          </label>
          <input
            id="school"
            onChange={(e) => {
              error && setError(null);
              setFormData({ ...formData, school: e.target.value });
            }}
            value={formData.school}
            placeholder="Ex: Northwestern University"
            type="text"
            className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
          />
          {error?.field === "SCHOOL" && (
            <p className="mt-1 text-red-400 flex items-center gap-1.5">
              <WarningRedSVG />
              <span className="text-base">
                Value is required and can’t be empty.
              </span>
            </p>
          )}
        </div>

        {/* ==== start and end date ====  */}
       <DatesAttendenedForEducation

       error={error}
       formData={formData}
       setError={setError}
       setFormData={setFormData}
       key="EDUCATION_MODAL_DATE_SELECT_DROPDOWN"
       />

        {/* ====== Degree ======= */}
        <div className="w-full">
          <label htmlFor="degree" className="w-full fs-md block mb-2.5 ">
          Degree (Optional)
          </label>
          <input
            id="degree"
            onChange={(e) => {
              setFormData({ ...formData, degree: e.target.value });
            }}
            value={formData.degree ? formData.degree : ""}
            placeholder="Ex: Computer Science"
           className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
          />
        </div>

        {/* ====== Area of study ======= */}
        <div className="w-full">
          <label htmlFor="areaOfStudy" className="w-full fs-md block mb-2.5 ">
          Area of Study (Optional)
          </label>
          <input
            id="areaOfStudy"
            onChange={(e) => {
              setFormData({ ...formData, areaOfStudy: e.target.value });
            }}
            value={formData.areaOfStudy ? formData.areaOfStudy : ""}
            placeholder="Ex: Computer Science"
           className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
          />
        </div>

        {/* ====== description ======= */}
        <div className="w-full">
          <label htmlFor="description" className="w-full fs-md block mb-2.5 ">
            Description (Optional)
          </label>
          <textarea
            id="description"
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
            value={formData.description ? formData.description : ""}
            placeholder="Enter Description"
            className="resize-none w-full min-h-[130px] lg:min-h-[180px] bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
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


  export default EducationModal;