"use client";
import {
  BtnLarge,
  DeleteButton,
  EditButton,
} from "@/components/shared/Buttons/Buttons";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch } from "react-redux";
import { PlusSVG } from "./Icons";
import { ReleventWorkExperience, removeEducation, removeReleventExperience, setActiveEducationToEdit, setActiveWorkingExperienceToEdit, TEducation } from "@/redux/features/onboarding/createFreelancerProfileSlice";

export const PreviewProfileSubmitBtn = () => {
  const handleSubmit = () => {
    // Your form submission logic here
  };
  return (
    <BtnLarge
      text="Submit profile"
      handler={handleSubmit}
      key="PREVIEW_PROFILE_SUBMIT_BTN"
      style="btn-bg-blue"
    />
  );
};

export const LanguageEditBtn = () => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_LANGUAGES_UPDATE_MODAL";
  const openLanguageEditModal = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="!border-[#005AFF]"
      handler={openLanguageEditModal}
      key="PREVIEW_PROFILE_LANGUAGE_EDIT_BTN"
    />
  );
};

export const ProfileEditBtn = () => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_PHOTO_UPLOAD_MODAL";

  const openProfileEditModal = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      pencilStyle="max-w-3 max-h-[11px]"
      style="!border-[#005AFF] bg-white absolute bottom-[4.17px] right-[3.33px] !max-w-[23.33px] !max-h-[23.33px]"
      handler={openProfileEditModal}
      key="PREVIEW_PROFILE_PROFILE_EDIT_BTN"
    />
  );
};

export const RoleTitleEditBtn = () => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_TITLE_UPDATE_MODAL";

  const openRoleTitleEditModal = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="!border-[#005AFF]"
      handler={openRoleTitleEditModal}
      key="PREVIEW_PROFILE_ROLE_TITLE_EDIT_BTN"
    />
  );
};

export const HourlyRateEditBtn = () => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_HOURLY_RATE_UPDATE_MODAL";
  const openHourlyRateEditModal = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="!border-[#005AFF]"
      handler={openHourlyRateEditModal}
      key="PREVIEW_PROFILE_HOURLY_RATE_EDIT_BTN"
    />
  );
};

export const DescriptionEditBtn = () => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_PROFILE_OVERVIEW_UPDATE_MODAL";
  const descriptionEditModal = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="!border-[#005AFF] min-w-[38px]"
      handler={descriptionEditModal}
      key="PREVIEW_PROFILE_DESCRIPTION_EDIT_BTN"
    />
  );
};

export const SelectedSkillsEditBtn = () => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_SKILLS_UPDATE_MODAL";
  const skillsEditModal = () => {
    dispatch(toggleModal(KEY));
  };
  return (
    <EditButton
      style="!border-[#005AFF] min-w-[38px]"
      handler={skillsEditModal}
      key="PREVIEW_PROFILE_SKILLS_EDIT_BTN"
    />
  );
};

export const AddWorkHistoryBtn = ({handler}:{handler?:Function}) => {
  const dispatch = useDispatch();
  // const KEY = "SHOW_PREVIEW_PROFILE_WORK_HISTORY_UPDATE_MODAL";
  const KEY = "SHOW_PREVIEW_PROFILE_ADD_WORK_HISTORY_MODAL";

  const addworkHistoryModal = () => {
    handler && handler()
    dispatch(setActiveWorkingExperienceToEdit(null));
    dispatch(toggleModal(KEY));
  };
  return (
    <button
      onClick={addworkHistoryModal}
      className="p-2.5 rounded-full w-[34px] h-[34px] md:w-[38px] md:h-[38px] max-w-[38px] bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] "
    >
      <PlusSVG style="max-w-[18px] max-h-[18px]" />
    </button>
  );
};

export const EditAddedWorkBtn = ({data}:{data:ReleventWorkExperience}) => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_ADD_WORK_HISTORY_MODAL";

  const workEditModal = () => {
    dispatch(toggleModal(KEY));
    dispatch(setActiveWorkingExperienceToEdit(data));
    console.log(data)
  };
  return (
    <EditButton
      style="!border-[#005AFF] min-w-[38px]"
      handler={workEditModal}
      key="PREVIEW_PROFILE_ADD_WORK_HISTORY_BTN"
    />
  );
};

export const DeleteAddedWorkBtn = ({id}:{id:number}) => {
  const dispatch = useDispatch();
  const handleDelete = ()=>{
  dispatch(removeReleventExperience(id))
  }
  return (
    <DeleteButton
    handler={handleDelete}
      style="!border-[#005AFF] min-w-[38px]"
      key="PREVIEW_PROFILE_DELETE_WORK_HISTORY_BTN"
    />
  );
};




export const AddEducationBtn = ({handler}:{handler?:Function}) => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_ADD_EDUCATION_MODAL";

  const addworkHistoryModal = () => {
    handler && handler()
    dispatch(setActiveEducationToEdit(null));
    dispatch(toggleModal(KEY));
  };
  return (
    <button
      onClick={addworkHistoryModal}
      className="p-2.5 rounded-full w-[34px] h-[34px] md:w-[38px] md:h-[38px] max-w-[38px] bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] "
    >
      <PlusSVG style="max-w-[18px] max-h-[18px]" />
    </button>
  );
};

export const EditAddedEducationBtn = ({data}:{data:TEducation}) => {
  const dispatch = useDispatch();
  const KEY = "SHOW_PREVIEW_PROFILE_ADD_EDUCATION_MODAL";

  const workEditModal = () => {
    dispatch(toggleModal(KEY));
    dispatch(setActiveEducationToEdit(data));
  };
  return (
    <EditButton
      style="!border-[#005AFF] min-w-[38px]"
      handler={workEditModal}
      key="PREVIEW_PROFILE_ADD_EDUCATION_BTN"
    />
  );
};

export const DeleteAddedEducationBtn = ({id}:{id:number}) => {
  const dispatch = useDispatch();
  const handleDelete = ()=>{
  dispatch(removeEducation(id))
  }
  return (
    <DeleteButton
    handler={handleDelete}
      style="!border-[#005AFF] min-w-[38px]"
      key="PREVIEW_PROFILE_DELETE_EDUCATION_BTN"
    />
  );
};
