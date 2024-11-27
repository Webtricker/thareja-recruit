"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setProfileSrc, updateWorkingSkills } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import { formatNumber, getCalculatedHourlyPrice, validateTextInputAsNumber } from "@/utils/UtilityFN";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSkills } from "../StaticData";
import { AddPlusSVG } from "../Icons";
import { WarningRedSVG } from "@/components/shared/modal/Icons";


// types 

type TAction = {
    type: "ADD" | "REMOVE";
    value:{
        id:number,
        name:string
    };
  };

 const EditSkillsModal = () => {
    const dispatch = useDispatch();
    const KEY = "SHOW_PREVIEW_PROFILE_SKILLS_UPDATE_MODAL";
    const {workingSkills} = useSelector(
      (state: RootState) => state.createFreelancerProfile
    );
  
    //   state
    const [selectedSkills, setSelectedSkills] =
      useState(workingSkills);
    const [error, setError] = useState(false);
  
    //   handlers
    const handleModalToggle = (action:"CANCEL"|"SAVE") => {
        if (action === "SAVE") {
          dispatch(updateWorkingSkills(selectedSkills));
        } else {
          setSelectedSkills(workingSkills);
        }

        dispatch(toggleModal(null));
          document.body.style.overflowY = "auto";
      }
  
    // filters remaining skills
    const handleToggleSkill = (action: TAction) => {
      error && setError(false);
  
      if (action.type === "ADD") {
        setSelectedSkills((prev) => [...prev, action.value]);
      } else {
        const remainingSkills = selectedSkills.filter(
          (sk) => sk.id !== action.value.id
        );
        setSelectedSkills(remainingSkills);
      }
    };


    const remainingSkills = allSkills.filter(
      (sk) => !selectedSkills.some(selectedItem=>(selectedItem.id===sk?.id && selectedItem.name ===sk?.name))
    );

    return (
      <CustomModal
        containerStyle="!max-w-[758px] xl:px-8"
        key={KEY}
        activeKey={KEY}
      >
        <CustomModalHeader title="Edit skills" />
        <div className="w-full mt-6 md:mt-7 mb-[50px] md:mb-[60px] lg:mb-[72px]">
          <p className="fs-md mb-2.5">Skills</p>
          <div className="w-full flex flex-wrap gap-2.5 py-2.5 px-[14px] min-h-[61px] rounded-[6px] border border-[#0000001a] bg-[#FAFCFF]">
            {selectedSkills ? (
              selectedSkills.map((_skill) => (
                <button
                  onClick={() =>
                    handleToggleSkill({ type: "REMOVE", value: _skill })
                  }
                  key={_skill.name}
                  className={`flex gap-2.5 text-[#30353E] skill-btn-medium hover:border-[#005AFF]`}
                >
                  <span>{_skill.name}</span>
                  <AddPlusSVG />
                </button>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="mt-2.5 w-full flex items-start justify-between gap-5 flex-wrap">
            <p className="mt-1 text-red-400 flex items-center gap-1.5">
              {error ? (
                <>
                  <WarningRedSVG />
                  <span className="text-base">At least 1 skill is required.</span>
                </>
              ) : (
                <></>
              )}
            </p>
            <p className="fs-xxs text-right ">Max 15 skills</p>
          </div>
          <div className="mt-5 w-full flex flex-wrap gap-2.5">
            {remainingSkills ? (
              remainingSkills.map((_skill) => (
                <button
                  onClick={() =>
                    handleToggleSkill({ type: "ADD", value: _skill })
                  }
                  key={_skill.name }
                  className={`flex gap-2.5 text-[#30353E] skill-btn-medium hover:border-[#005AFF]`}
                >
                  <span>{_skill.name}</span>
                  <AddPlusSVG />
                </button>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
  
        <div className="relative w-full flex flex-wrap items-center justify-center md:justify-end gap-[14px]">
          <BtnLarge
            style=""
            handler={()=>handleModalToggle("CANCEL")}
            key="CANCEL_SKILL_CHANGE_MODAL_BTN"
            text="Cancel"
          />
          <BtnLarge
            style="btn-bg-blue"
            handler={()=>handleModalToggle("SAVE")}
            text="Save"
            key="SAVE_CHANGED_SKILLS_MODAL_BTN"
          />
        </div>
      </CustomModal>
    );
  };
  export default EditSkillsModal;