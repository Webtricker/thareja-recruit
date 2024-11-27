"use client";

import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import { AddPlusSVG } from "@/components/shared/icons/Icons";
import {
  addSpeakingLanguage,
  ReleventWorkExperience,
  removeEducation,
  removeReleventExperience,
  removeSpeakingLanguage,
  resetCreateFreelancerStates,
  setActiveComponents,
  setActiveExperienceModalItemId,
  setActiveModal,
  setFieldError,
  toggleSkipButton,
} from "@/redux/features/onboarding/createFreelancerProfileSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddExperienceSVG, ExperienceEditSVG, UploadSVG } from "./Icons";

type PropsType = {
  text: string;
  style?: string;
  clickHandler?: Function;
};

export const Button = ({ text, clickHandler, style }: PropsType) => {
  const handleClick = () => {
    clickHandler && clickHandler();
  };
  return (
    <button onClick={handleClick} className={`btn-large fs-md ${style}`}>
      {text}
    </button>
  );
};

export const UploadResumeButton = () => {
  const clickHandler = () => {};
  return (
    <button
      onClick={clickHandler}
      className="flex items-center justify-center gap-[14px] btn-medium btn-border-blue bg-[#005aff05]"
    >
      <UploadSVG />
      <span className="text-[#005AFF] fs-md leading_normal tracking-[0.4px]">
        Upload your resume
      </span>
    </button>
  );
};

export const FillInfoManuallyButton = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setActiveComponents("PROFESSIONAL_ROLE"));
  };
  return (
    <button
      onClick={clickHandler}
      className="text-center btn-medium btn-border-blue bg-[#005aff05]"
    >
      <span className="text-[#005AFF] fs-md leading_normal tracking-[0.4px]">
        Fill out manually (15 min)
      </span>
    </button>
  );
};

// export const GetStartedButton = () => {
//   const dispatch = useDispatch();
//   const clickHandler = () => {
//     dispatch(setActiveComponents("WORKING_EXPERIENCE"));
//   };
//   return (
//     <Button
//       text="Get started"
//       style="text-white bg-[#005AFF] min-w-[188px]"
//       clickHandler={clickHandler}
//     />
//   );
// };

export const BackButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const activeComponent = useSelector(
    (state: RootState) => state.createFreelancerProfile.activeComponent
  );
  const selectedExperience = useSelector(
    (state: RootState) =>
      state.createFreelancerProfile.releventWorkExperience.length
  );
  const educations = useSelector(
    (state: RootState) => state.createFreelancerProfile.educations.length
  );
  const clickHandler = () => {
    switch (activeComponent) {
      case "GET_STARTED":
        dispatch(resetCreateFreelancerStates());
        return router.push("/congratulations");
      case "PROFESSIONAL_ROLE":
        return dispatch(setActiveComponents("GET_STARTED"));
      case "RELEVENT_WORK_EXPERIENCE":
        dispatch(toggleSkipButton(false));
        return dispatch(setActiveComponents("PROFESSIONAL_ROLE"));
      case "EDUCATION":
        !selectedExperience && toggleSkipButton(true);
        return dispatch(setActiveComponents("RELEVENT_WORK_EXPERIENCE"));
      case "COMMUNICATION_LANGUAGE":
        !educations && dispatch(toggleSkipButton(true));
        return dispatch(setActiveComponents("EDUCATION"));
      case "SKILL_DESCRIPTION":
        return dispatch(setActiveComponents("COMMUNICATION_LANGUAGE"));
      case "PROFILE_DESCRIPTION":
        return dispatch(setActiveComponents("SKILL_DESCRIPTION"));
      case "EXPERTISTS":
        return dispatch(setActiveComponents("PROFILE_DESCRIPTION"));
      case "HOURLY_RATE":
        return dispatch(setActiveComponents("EXPERTISTS"));
      case "ADDRESS":
        dispatch(toggleSkipButton(false));
        return dispatch(setActiveComponents("HOURLY_RATE"));
      case "PROFILE_READY":
      default:
        return;
    }
  };
  return (
    <Button
      text="Back"
      style="text-[#005AFF] border-transparent"
      clickHandler={clickHandler}
    />
  );
};

export const NextStepButtons = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const createProfileSlice = useSelector(
    (state: RootState) => state.createFreelancerProfile
  );
  const [nextButtonText, setNextButtonText] = useState(
    "Next, add your experience"
  );
  const clickHandler = () => {
    switch (createProfileSlice.activeComponent) {
      case "PROFESSIONAL_ROLE":
        if (!createProfileSlice.professionalRole) {
          dispatch(
            setFieldError({
              errorField: "PROFESSIONAL_ROLE_ERROR",
              message: "Title is required",
            })
          );
          return;
        }
        return dispatch(setActiveComponents("RELEVENT_WORK_EXPERIENCE"));
      case "RELEVENT_WORK_EXPERIENCE":
        dispatch(toggleSkipButton(true));
        return dispatch(setActiveComponents("EDUCATION"));
      case "EDUCATION":
        dispatch(toggleSkipButton(false));
        return dispatch(setActiveComponents("COMMUNICATION_LANGUAGE"));
      case "COMMUNICATION_LANGUAGE":
        dispatch(toggleSkipButton(false));
        return dispatch(setActiveComponents("SKILL_DESCRIPTION"));
      case "SKILL_DESCRIPTION":
        return dispatch(setActiveComponents("PROFILE_DESCRIPTION"));
      case "PROFILE_DESCRIPTION":
        if (!createProfileSlice.bio) {
          dispatch(
            setFieldError({
              errorField: "BIO",
              message: "Enter your profile overview",
            })
          );
          return;
        }
        return dispatch(setActiveComponents("EXPERTISTS"));
      case "EXPERTISTS":
        return dispatch(setActiveComponents("HOURLY_RATE"));
      case "HOURLY_RATE":
        setNextButtonText("Review your profile");
        return dispatch(setActiveComponents("ADDRESS"));
      case "ADDRESS":
           //  Navigate to the next route.
        return router.push("/preview-profile");
        // case "PROFILE_READY":
      default:
        return;
    }
  };

  useEffect(() => {
    switch (createProfileSlice.activeComponent) {
      case "PROFESSIONAL_ROLE":
        setNextButtonText("Next, add your experience");
        break;
      case "RELEVENT_WORK_EXPERIENCE":
        setNextButtonText("Next, add your education");

      case "EDUCATION":
        setNextButtonText("Next, add languages");
        break;
      case "COMMUNICATION_LANGUAGE":
        setNextButtonText("Next, add your skills");
        break;
      case "SKILL_DESCRIPTION":
        setNextButtonText("Next, write an overview");
        break;
      case "PROFILE_DESCRIPTION":
        setNextButtonText("Next, choose your categories");
        break;
      case "EXPERTISTS":
        setNextButtonText("Next, set your rate");
        break;
      case "HOURLY_RATE":
        setNextButtonText("Next, add your photo and location");
        break;
      case "ADDRESS":
        setNextButtonText("Review your profile");
      default:
    }
  }, [createProfileSlice.activeComponent]);
  return (
    <>
      {createProfileSlice.showSkipButton ? (
        <Button
          text="Skip for now"
          style="text-[#005AFF]  border-transparent"
          clickHandler={clickHandler}
        />
      ) : (
        <></>
      )}
      {"GET_STARTED" === createProfileSlice.activeComponent ? (
        <></>
      ) : (
        <Button
          text={nextButtonText}
          style="!bg-[#005AFF] !text-white border-transparent"
          clickHandler={clickHandler}
        />
      )}
    </>
  );
};

// ========= add experience ==========
export const AddExperienceButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        dispatch(setActiveModal("ADD_EXPERIENCE"));
      }}
      className="w-full bg-[#FBFCFF] dashed-border flex items-center justify-center gap-2.5 flex-col max-w-[480px] p-[30px] rounded-[20px]  min-h-[260px]"
    >
      <AddExperienceSVG />
      <span className="fs-xl-lh-lg">Add experience</span>
    </button>
  );
};

// =========== add education buton ==============

export const AddExperienceIconButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        dispatch(setActiveModal("ADD_EXPERIENCE"));
      }}
    >
      <AddExperienceSVG />
    </button>
  );
};

export const CancelExperienceModalButton = ({
  handler,
}: {
  handler: Function;
}) => {
  return (
    <button
      type="button"
      onClick={(event) => handler(event)}
      className="btn-large fs-md text-[#005AFF]"
    >
      Cancel
    </button>
  );
};
export const SaveExperienceDataButton = () => {
  return (
    <button className="btn-large btn-bg-blue fs-md" type="submit">
      Save
    </button>
  );
};


type ModifyExperienceProps = {
  clickHandler: Function;
};
// export const EditExperienceButton = ({clickHandler}:ModifyExperienceProps) => {
export const EditExperienceButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setActiveExperienceModalItemId(id));
    dispatch(setActiveModal("ADD_EXPERIENCE"));
  };
  return (
    <button
      className="w-10 h-10 flex items-center justify-center p-[9.41px] rounded-full border border-[#A8B7C1]"
      onClick={handleClick}
    >
      <ExperienceEditSVG />
    </button>
  );
};

export const DeleteExperienceButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(removeReleventExperience(id))}
      className=""
    >
      <Image
        height={28}
        width={24}
        src="/svgs/onboarding/DustBinBlue.svg"
        alt="Dustbin icon"
      />
    </button>
  );
};

type CurrentlyWorkingTogglerButtonProps = {
  setFormData: Dispatch<SetStateAction<ReleventWorkExperience>>;
  formData: ReleventWorkExperience;
};
export const CurrentlyWorkingTogglerButton = ({
  formData,
  setFormData,
}: CurrentlyWorkingTogglerButtonProps) => {
  const handleClick = () => {
    setFormData({
      ...formData,
      isCurrentlyWorking: !formData.isCurrentlyWorking,
    });
  };
  return (
    <button type="button" onClick={handleClick}>
      <SquareActiveInactiveCheckboxes active={formData.isCurrentlyWorking} />{" "}
    </button>
  );
};

// ========= add education section =================
export const AddEducationButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        dispatch(setActiveModal("EDUCATION"));
      }}
      className="w-full bg-[#FBFCFF] dashed-border flex items-center justify-center gap-2.5 flex-col max-w-[480px] p-[30px] rounded-[20px]  min-h-[260px]"
    >
      <AddExperienceSVG />
      <span className="fs-xl-lh-lg">Add Education</span>
    </button>
  );
};

export const AddEducationIconButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        dispatch(setActiveModal("EDUCATION"));
      }}
    >
      <AddExperienceSVG />
    </button>
  );
};

export const EditEducationButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setActiveExperienceModalItemId(id));
    dispatch(setActiveModal("EDUCATION"));
  };
  return (
    <button
      className="w-10 h-10 flex items-center justify-center p-[9.41px] rounded-full border border-[#A8B7C1]"
      onClick={handleClick}
    >
      <ExperienceEditSVG />
    </button>
  );
};

export const DeleteEducationButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(removeEducation(id))}
      className=""
    >
      <Image
        height={28}
        width={24}
        src="/svgs/onboarding/DustBinBlue.svg"
        alt="Dustbin icon"
      />
    </button>
  );
};

// ============== speaking languages componnets buttons =================
export const AddALanguageButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        dispatch(addSpeakingLanguage());
      }}
      className="mt-10 bg-[#FBFCFF] inline-flex items-center justify-center gap-[14px] btn-medium btn-border-blue"
    >
      <AddPlusSVG className="inline-block"/>
      <span className="fs-md">Add a language</span>
    </button>
  );
};

export const DeleteLanguageButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(removeSpeakingLanguage(id))}
      className=""
    >
      <Image
        height={28}
        width={24}
        src="/svgs/onboarding/DustBinBlue.svg"
        alt="Dustbin icon"
      />
    </button>
  );
};
