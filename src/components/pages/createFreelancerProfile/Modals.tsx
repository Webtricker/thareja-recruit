"use client";
import { ModalCloseSVG, WarningRedSVG } from "@/components/shared/modal/Icons";
import {
  addEducation,
  addReleventExperience,
  ReleventWorkExperience,
  setActiveEducationToEdit,
  setActiveExperienceModalItemId,
  setActiveModal,
  setProfileSrc,
  TEducation,
  updateEducationExperience,
  updateReleventExperience,
} from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CancelExperienceModalButton,
  CurrentlyWorkingTogglerButton,
  SaveExperienceDataButton,
} from "./Buttons";
import {
  CountrySelector,
  DatesAttendenedForEducation,
  StartAndEndingDateDropDownComponent,
} from "./SelectItems";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";

export type ExperienceFormError = { field: string; mess: string } | null;
export interface EducationFormData {
  id:number ,
  school:string;
  startingDate: string;
  endingDate: string;
  degree?: string;
  areaOfStudy?: string;
  description?: string;
}

// ============= add experience form  =========
export function ExperienceFormModal() {
  const dispatch = useDispatch();
  const createFreelancerProfile = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );

  const openModal = createFreelancerProfile.activeModal === "ADD_EXPERIENCE";
  const {activeWorkingExperienceToEdit} = createFreelancerProfile;

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


if(activeWorkingExperienceToEdit){
  initialState = activeWorkingExperienceToEdit;
}


  const [formData, setFormData] = useState<ReleventWorkExperience>(initialState);
  const [error, setError] = useState<{ field: string; mess: string } | null>(
    null
  );

  //  ========== hidden overflow of body ========
  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openModal]);

  // ========== handlers ============
  const hideModal = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    dispatch(setActiveExperienceModalItemId(null));
    dispatch(setActiveModal(null));
    document.body.style.overflowY = "auto";
  };

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
    dispatch(setActiveModal(null));
  };

  if (!openModal) return <></>;
  return (
    <div
      onClick={hideModal}
      className="w-full h-full fixed top-0 p-2 sm:px-5 left-0 flex justify-center items-center bg-[#17171791] overflow-hidden z-[99999]"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(setActiveModal("ADD_EXPERIENCE"));
        }}
        className={`w-full max-w-[844px] duration-300 h-full max-h-[95vh] flex flex-col relative py-5 px-1 bg-white rounded-[20px] lg:rounded-[30px] z-[9999999] overflow-hidden`}
      >
        <div className="flex flex-col gap-[28px] flex-grow custom_scrollbar overflow-y-auto md:py-1 lg:py-3 2xl:py-[30px]  pl-3 pr-2 md:pl-4 md:pr-3 lg:pl-[28px] lg:pr-[24px]">
        
        {/* ===== modal header ====== */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">Edit title</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

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
            className="resize-none w-full min-h-[130px] lg:min-h-[180px] bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-end mt-10">
          <CancelExperienceModalButton handler={hideModal} />
          <SaveExperienceDataButton />
        </div>
      </div>
      </form>
    </div>
  );
}

// ============= add education form  =========
export function EducationFormModal() {
  const dispatch = useDispatch();
  const createFreelancerProfile = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );

  const openModal = createFreelancerProfile.activeModal === "EDUCATION";
  const eductionToEdit = createFreelancerProfile.activeEducationToEdit;

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


  if(eductionToEdit){
    initialState = eductionToEdit
  }

  

  const [formData, setFormData] = useState<EducationFormData>(initialState);
  const [error, setError] = useState<{ field: string; mess: string } | null>(
    null
  );

  //  ========== hidden overflow of body =======
  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openModal]);

  // ========== handlers ============
  const hideModal = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    dispatch(setActiveExperienceModalItemId(null));
    dispatch(setActiveModal(null));
    document.body.style.overflowY = "auto";
  };

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
    if (eductionToEdit) {
      dispatch(updateEducationExperience({ id: eductionToEdit.id, value: formData }));
    } else {
      formData.id = new Date().getTime();
      dispatch(addEducation(formData));
    }
    
    setFormData(initialState);
    dispatch(setActiveEducationToEdit(null));
    dispatch(setActiveModal(null));
  };

  if (!openModal) return <></>;

  return (
    <div
      onClick={hideModal}
       className="w-full h-full fixed top-0 p-2 sm:px-5 left-0 flex justify-center items-center bg-[#17171791] overflow-hidden z-[99999]"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(setActiveModal("EDUCATION"));
        }}
        className={`w-full max-w-[844px] duration-300 h-full max-h-[95vh] flex flex-col relative py-5 px-1 bg-white rounded-[20px] lg:rounded-[30px] z-[9999999] overflow-hidden`}
      >
        <div className="flex flex-col gap-[28px] flex-grow custom_scrollbar overflow-y-auto md:py-1 lg:py-3 2xl:py-[30px]  pl-3 pr-2 md:pl-4 md:pr-3 lg:pl-[28px] lg:pr-[24px]">
        {/* ===== modal header ====== */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center rounded-[12px] bg-[#005aff08] py-2.5 px-[18px]">
            <h2 className="fs-xl-lh-lg">{eductionToEdit?"Edit":"Add"} education</h2>
            <button
              onClick={hideModal}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              <ModalCloseSVG />
            </button>
          </div>
        </div>

        {/* ========== modal body ========== */}
        {/* ==== title input ====  */}
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
        <div className="w-full flex items-center justify-end mt-10">
          <CancelExperienceModalButton handler={hideModal} />
          <SaveExperienceDataButton />
        </div>
        </div>
      </form>
    </div>
  );
}



// ======== add freelancer profile modal =============
export function FreelancerProfileEditModal (){
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState("")
  const ACTIVE_KEY = 'OPEN_CREATE_FREELANCER_PROFILE_PROFILE_UPDATE_MODAL'

  const fileInput = useRef<HTMLInputElement>(null);

  // handlers
  const handleFileUpload = (e:ChangeEvent<HTMLInputElement>)=>{
    let file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        setImgSrc(result);
      };

      reader.readAsDataURL(file);
    } else {
      toast.warning('Please select a valid image file');
    }
  }

  const handleFileInputTrigger = ()=>{
    if (fileInput.current) {
      fileInput.current.click();
    }
  }

  const handleFileSave = ()=>{
    dispatch(setProfileSrc(imgSrc))
    dispatch(toggleModal(null))
  }

  return <CustomModal activeKey={ACTIVE_KEY} >
    <CustomModalHeader title="Edit photo" />
    <div className="w-full">
   <p className="fs-md my-5 md:my-[30px] text-[#525966]">Show clients the best version of yourself!</p>
   <div className="mb-10 md:mb-14 lg:mb-[72px] w-full flex items-center gap-5 md:gap-[30px] relative">
   <Image
          height={125}
          width={125}
          src={imgSrc}
          alt="Profile image"
          className="max-w-[125px] rounded-full w-[125px] h-[125px] max-h-[125px] mx-auto"
        />
        <input
          className="absolute w-10  opacity-0 -z-10 pointer-events-none"
          ref={fileInput}
          onChange={handleFileUpload}
          type="file"
          accept="image/*"
        />
    <div className="w-full">
      <p className="fs-md">
      Must be an actual photo of you.
      Logos, clip-art, group photos, and digitally-altered images are not allowed.<Link href="#" className="text-[#005AFF]">Opens in new window Learn more</Link>
      </p>
    </div>
   </div>

   <div className="w-full flex flex-wrap items-center justify-end gap-[14px]">
      <Button key="UPDATE_ROFILE_BUTTON" style="btn-large btn-border-blue fs-md" text="Change image" clickHandler={handleFileInputTrigger} />
      <Button key="SAVE_UPDATE_PROFILE_BUTTON" style="btn-large btn-bg-blue fs-md" text="Save photo" clickHandler={handleFileSave} />
   </div>

    </div>
  </CustomModal>
}