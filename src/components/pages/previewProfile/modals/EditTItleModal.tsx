"use client"
import { BtnLarge } from "@/components/shared/Buttons/Buttons";
import { CustomModal, CustomModalHeader } from "@/components/shared/modal/Modal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setProfessionalRole } from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditTitleModal = () => {
    const dispatch = useDispatch();
    const KEY = "SHOW_PREVIEW_PROFILE_TITLE_UPDATE_MODAL";
    const createFreelancerProfile = useSelector((state:RootState)=>state.createFreelancerProfile);
    const professionalRole = createFreelancerProfile.professionalRole || "";

    //   state
    const [title, setTitle] = useState(professionalRole);
  
    //   handlers

    const handleModalAction = (action:"CLOSE"|"SAVE") => {
        if(action === "CLOSE"){
            setTitle(professionalRole)
        }else{
            title && dispatch(setProfessionalRole(title));
        }
        dispatch(toggleModal(null));
        document.body.style.overflowY = "auto";
      };
    return (
      <CustomModal
        containerStyle="!max-w-[758px] xl:px-8"
        key={KEY}
        activeKey={KEY}
      >
        <CustomModalHeader title="Edit your title" />
        <div className="w-full ">
          <p className="fs-md my-6 md:my-7">
            Enter a single sentence description of your professional
            skills/experience (Ex: Expert Web Designer with Ajax experience)
          </p>
  
          <div className="w-full mb-[50px] md:mb-[60px] lg:mb-[72px]">
            <label htmlFor="updateTitle">Your title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className=" w-full mt-2.5 bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
              type="text"
              value={title}
              id="updateTitle"
            />
          </div>
        </div>
  
        <div className="relative w-full flex flex-wrap items-center justify-center md:justify-end gap-[14px]">
          <BtnLarge
            style=""
            handler={()=>handleModalAction("CLOSE")}
            key="CANCEL_CHANGE_TITLE_MODAL_BTN"
            text="Cancel"
          />
          <BtnLarge
            style="btn-bg-blue"
            handler={()=>handleModalAction("SAVE")}
            text="Save"
            key="SAVE_CHANGE_TITLE_MODAL_BTN"
          />
        </div>
      </CustomModal>
    );
  };

  export default EditTitleModal;