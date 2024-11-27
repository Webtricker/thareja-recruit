"use client";
// export function BodyTopRightCornerButtons() {
// const dispatch = useDispatch();
//   return (

import RoundActiveInactiveCheckbox from "@/components/shared/checkbox/RoundActiveInactiveCheckbox";
import {
  resetAll,
  setCandidates,
  setChooseSkillsFrom,
  setOpenInviteCandidateModal,
  setShowInvitationSuccessMessage,
  setSkillSelectingAuthority,
  updateNewSkills,
} from "@/redux/features/GptVettilngSlice/GptVettingFreelancerTableSlice";
import { SET_EXPAND } from "@/redux/features/rootModyfier/Modyfier";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewJobCategory from "../jobPostReview/ReviewJobCategory";
import DownArrowSVG, {
  BluePlusSVG,
  InfoCircleSVG,
  ModalCloseSVG,
} from "./Icons";

import { setOpenTestDetailsModal } from "@/redux/features/GptVettilngSlice/SkillTest";
import {
  TestDetailsModalBody,
  TestDetailsModalHeader,
} from "./DynamicComponents";

//   );
// }

// ============ Invite a candidate modal content starts ====================
const SendInvitation = () => {
  const dispatch = useDispatch();
  return (
    <div className={`mt-10 lg:mt-[60px] flex justify-center`}>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(setShowInvitationSuccessMessage(true));
          dispatch(setOpenInviteCandidateModal(false));
        }}
        className="btn-large btn-bg-blue fs-md"
      >
        Send invitation
      </button>
    </div>
  );
};

// ======= Candidates address =================
type Candidate = {
  id: string;
  name: string;
  addreess: string;
};

const CandidateAddress = () => {
  const dispatch = useDispatch();
  const candidates = useSelector(
    (state: RootState) => state.gptVettingFreelancerActieStates.candidateList
  );

  return (
    <div className="mb-4 ">
      <p className="fs-md  mb-6">
        Enter the name & email address of the candidates
      </p>
      <div className="flex flex-col gap-[18px]">
        {candidates.map((candidate, index) => (
          <div key={index} className="flex items-center gap-4 mt-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full fs-md  p-3 rounded-[4px] border border-[#DDE3E7] focus:border-[#005AFF] ourline:none focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full fs-md  p-3 rounded-[4px] border border-[#DDE3E7] focus:border-[#005AFF] ourline:none focus:outline-none"
            />
            <button
              type="button"
              className=""
              onClick={() => dispatch(setCandidates("DELETE"))}
            >
              <Image
                src="/svgs/dustbin-red.svg"
                width={24}
                height={28}
                className="min-w-[24px] min-h-[28px]"
                alt="Dustbin icon"
              />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => dispatch(setCandidates("ADD"))}
        className="mt-[18px] flex items-center gap-2.5 fs-md  mb-6 text-[#005AFF]"
      >
        <BluePlusSVG /> Add another candidate
      </button>
    </div>
  );
};

// ======== Existing Job Category ===============
const ExistingJobCategory = () => {
  return <ReviewJobCategory />;
};

// ======== select  skills level ===============

type ListType = "DEFAULT" | "BEGINNER" | "INTERMEDIATE" | "EXPERT" | null;
type ListItemType = {
  label: string;
  type: ListType;
};

const levelList: ListItemType[] = [
  {
    label: "Level of difficulty",
    type: "DEFAULT",
  },
  {
    label: "Beginner",
    type: "BEGINNER",
  },
  {
    label: "Intermediate",
    type: "INTERMEDIATE",
  },
  {
    label: "Expert",
    type: "EXPERT",
  },
];

const SelectSkillLevel = ({ id }: { id: number }) => {
  const ACTIVE_KEY = `SELECT_JOB_SKILL_LEVEL_${id}`;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<ListType>("DEFAULT");

  //   ============= handlers ========
  const dispatch = useDispatch();

  const filteredItem = levelList.find((item) => item.type === selected);
  return (
    <div className="relative  w-full">
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
        }}
        type="button"
        // className=" fs-md  "
        className={`p-3 rounded-[4px] border bg-white border-[#DDE3E7] ourline:none focus:outline-none w-full flex items-center justify-between gap-4 ${
          EXPAND === ACTIVE_KEY && "pointer-events-none"
        }`}
      >
        <span
          className={`pointer-events-none fs-md ${
            selected === "DEFAULT" && "text-[#A8B7C1]"
          }`}
        >
          {filteredItem?.label}
        </span>

        <DownArrowSVG
          className={`pointer-events-none ${
            EXPAND === ACTIVE_KEY && "rotate-180"
          }`}
        />
      </button>
      <ul
        className={`z-40 absolute flex flex-col gap-0.5 justify-between top-full w-full left-0 mt-0 h-auto max-h-0 overflow-hidden ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[9999px] mt-1 border bg-white border-[#DDE3E7] rounded-[20px] overflow-hidden p-2.5"
        }`}
      >
        {levelList.map((item) => (
          <li
            onClick={(e) => {
              if (item.type === "DEFAULT") {
                dispatch(SET_EXPAND(ACTIVE_KEY));
                e.preventDefault();
                return;
              }
              e.stopPropagation();
              setSelected(item.type);
            }}
            key={item.type}
            // ======== add some style based on selected ==========
            className={` duration-200 cursor-pointer py-1.5 px-5 rounded-[8px] fs-base ${
              item.type === "DEFAULT" && "text-[#A8B7C1]"
            } ${item.type === selected && "bg-[#EDF4FF]"}`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ======== add new skills =============
const AddNewSkillCategory = () => {
  const dispatch = useDispatch();
  const skills = useSelector(
    (state: RootState) => state.gptVettingFreelancerActieStates.newSkillList
  );
  return (
    <div>
      <input
        type="text"
        id="testName"
        placeholder="Test name"
        className="w-full fs-md  p-3 rounded-[4px] border border-[#DDE3E7] focus:border-[#005AFF] ourline:none focus:outline-none"
      />
      <div className="flex flex-col gap-[18px] my-[18px]">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-[17px]">
            <input
              type="text"
              id={`skillName-${index}`}
              placeholder="Skill name"
              className="w-full fs-md  p-3 rounded-[4px] border border-[#DDE3E7] focus:border-[#005AFF] ourline:none focus:outline-none"
            />

            <SelectSkillLevel id={index} />
            <button onClick={() => dispatch(updateNewSkills("DELETE"))}>
              <Image
                src="/svgs/dustbin-red.svg"
                width={24}
                height={28}
                className="min-w-[24px] min-h-[28px]"
                alt="Dustbin icon"
              />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => dispatch(updateNewSkills("ADD"))}
        className="mt-[18px] flex items-center gap-2.5 fs-md  mb-6 text-[#005AFF]"
      >
        <BluePlusSVG /> Add another candidate
      </button>
    </div>
  );
};

// ========= Skill details =================
const SkillDetails = () => {
  const active = useSelector(
    (state: RootState) => state.gptVettingFreelancerActieStates.chooseSkillsFrom
  );

  switch (active) {
    case "EXISTING":
      //   return <ExistingJobCategory />;
      return <></>;
    case "NEW":
      return <AddNewSkillCategory />;
    default:
      return <></>;
  }
};

// ====== Candidates predefined skills =================
const PredefinedSkills = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) =>
      state.gptVettingFreelancerActieStates.skillsSelectingAuthority
  );

  const chooseSkillsFrom = useSelector(
    (state: RootState) => state.gptVettingFreelancerActieStates.chooseSkillsFrom
  );

  if (active !== "CLIENT") return;

  return (
    <div className="mt-6">
      <p className="fs-md  mb-6 flex items-center gap-2.5">
        Please define the skills <InfoCircleSVG />
      </p>
      <div className="flex items-center mb-6 gap-5">
        <button
          className="fs-md  flex items-center gap-2.5"
          onClick={() => dispatch(setChooseSkillsFrom("EXISTING"))}
        >
          <RoundActiveInactiveCheckbox
            key="CHOSE_EXISTING_OPTION"
            active={chooseSkillsFrom == "EXISTING"}
          />
          <label htmlFor="existing">Choose from existing</label>
        </button>
        <button
          onClick={() => dispatch(setChooseSkillsFrom("NEW"))}
          className="fs-md  flex items-center gap-2.5"
        >
          <RoundActiveInactiveCheckbox
            key="CHOSE_NEW_OPTION"
            active={chooseSkillsFrom == "NEW"}
          />
          <label htmlFor="new">New skill</label>
        </button>
      </div>
      <SkillDetails />
    </div>
  );
};

// ========== body content wrapper  ==============
const ModalBodyContent = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) =>
      state.gptVettingFreelancerActieStates.skillsSelectingAuthority
  );
  return (
    <>
      {/* ===== modal header ====== */}
      <div className="flex justify-between items-center mb-[28px] rounded-lg bg-[rgba(0,90,255,0.03)] py-2.5 px-[18px]">
        <h2 className="fs-xl-lh-lg">Invite a candidate</h2>
        <button
          onClick={(event) => {
            event.stopPropagation();
            dispatch(setOpenInviteCandidateModal(false));
          }}
          className="text-gray-500 hover:text-gray-700 text-[27px]"
        >
          <ModalCloseSVG />
        </button>
      </div>

      {/* ===== Skills selecting authority ====== */}
      <div className="mb-6">
        <p className="fs-md  mb-6">
          Do you want to predefine the skills to test this candidate on?
        </p>
        <div className="flex items-center mb-2 gap-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(setSkillSelectingAuthority("CANDIDATES"));
            }}
            className="flex items-center"
          >
            <RoundActiveInactiveCheckbox
              key="CHOSE_OPTION"
              active={active == "CANDIDATES"}
            />
            <label htmlFor="choose" className="fs-md  ml-2">
              No, they can choose
            </label>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(setSkillSelectingAuthority("CLIENT"));
            }}
            className="flex items-center"
          >
            <RoundActiveInactiveCheckbox
              key="DEFINED_OPTION"
              active={active == "CLIENT"}
            />
            <label htmlFor="define" className="fs-md  ml-2">
              Yes, I will define the skills
            </label>
          </button>
        </div>
      </div>
      <PredefinedSkills />

      {/* ===== Candidates address ====== */}
      <CandidateAddress />

      <SendInvitation />
    </>
  );
};

// =========== Modal wrapper =================
export function InviteCandidateModal() {
  const dispatch = useDispatch();
  const openModal = useSelector(
    (state: RootState) =>
      state.gptVettingFreelancerActieStates.openInviteCandidateModal
  );
  const successModal = useSelector(
    (state: RootState) =>
      state.gptVettingFreelancerActieStates.showInvitationSuccessMessage
  );

  //  ========== hidden overflow of body ========
  useEffect(() => {
    if (openModal && !successModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openModal]);

  if (openModal && !successModal)
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setOpenInviteCandidateModal(false));
          document.body.style.overflowY = "auto";
        }}
        className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-[#00000033] overflow-x-hidden z-[999999999]"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log("card body event triggered");
            dispatch(setOpenInviteCandidateModal(true));
          }}
          className="max-h-[95vh] relative p-5 md:p-6 lg:p-8 xl:p-9 2xl:p-10 w-full max-w-[95vw] md:max-w-[647px] overflow-y-auto bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]"
        >
          <ModalBodyContent />
        </div>
      </div>
    );
  return <></>;
}

// ===== Test details modal =============
export function TestDetailsModal() {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.interviewProcess.openTestDetailsModal
  );
  if (!activeModal) return <></>;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setOpenTestDetailsModal(false));
      }}
      className="w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center bg-[#00000099] overflow-x-hidden z-[999999999]"
    >
      <div className="w-full h-[118px] min-h-[118px]"></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setOpenTestDetailsModal(true));
        }}
        className=" w-full text-[#30353E] bg-white flex-grow overflow-y-auto py-[50px] px-4 md:px-5 lg:px-10"
      >
        <div className="w-full max-w-[744px] mx-auto">
          <TestDetailsModalHeader />
          <TestDetailsModalBody />
        </div>
      </div>
    </div>
  );
}

// ========= success message modal =================
export function ModalSuccess() {
  const dispatch = useDispatch();
  const showSuccessModal = useSelector(
    (state: RootState) =>
      state.gptVettingFreelancerActieStates.showInvitationSuccessMessage
  );

  //   reset all state
  const reset = () => {
    dispatch(resetAll("RESET"));
    document.body.style.overflowY = "auto";
  };
  if (!showSuccessModal) return <></>;

  return (
    <div
      onClick={reset}
      className="w-full h-full fixed top-0 left-0 flex justify-center bg-[#00000033] overflow-hidden z-[999999999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setShowInvitationSuccessMessage(true));
        }}
        className={`duration-300 h-[54px] flex items-center relative py-[14px] px-5 bg-white rounded-[20px] lg:rounded-[8px]  z-[999999999999999999] ${
          showSuccessModal ? "mt-[40px]" : "-mt-[200px]"
        }`}
      >
        <Image
          src="/svgs/gpt-vetting-invite-success.svg"
          width={24}
          height={24}
          className="min-w-6 min-h-6 mr-[14px]"
          alt="success svg icon"
        />
        <span className="fs-md ">Candidate invited successfully</span>
      </div>
    </div>
  );
}
