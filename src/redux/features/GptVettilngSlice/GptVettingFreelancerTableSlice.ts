import { createSlice } from "@reduxjs/toolkit";

// ========= types and interfaces =================
type ActiveTab = "REPORT" | "CONNECTED" | "ARCHIVED";

type SkillsSelectingAuthority = "CANDIDATES" | "CLIENT";
type ChooseSkills = "EXISTING" | "NEW";

type Candidate = {
  id: number;
  name: string;
  addreess: string;
};

type SkillLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | null;
type NewSkill = {
  id: number;
  name: string;
  skillLevel: SkillLevel;
};

interface TablePageStates {
  activeTab: ActiveTab;
  openInviteCandidateModal: boolean;
  skillsSelectingAuthority: SkillsSelectingAuthority;
  candidateList: Candidate[];
  chooseSkillsFrom: ChooseSkills;
  newSkillList: NewSkill[];
  showInvitationSuccessMessage: boolean;
}

//  ========== initial data =================
const initialCandidateList: Candidate[] = [
  {
    addreess: "",
    id: 1,
    name: "",
  },
];

const initialNewSkillList: NewSkill[] = [
  {
    id: 1,
    skillLevel: null,
    name: "",
  },
];

const initialState: TablePageStates = {
  activeTab: "REPORT",
  openInviteCandidateModal: false,
  skillsSelectingAuthority: "CANDIDATES",
  candidateList: initialCandidateList,
  chooseSkillsFrom: "NEW",
  newSkillList: initialNewSkillList,
  showInvitationSuccessMessage: false,
};

// Create the slice with reducers for individual property changes
const GptVettingFreelancerTableSlice = createSlice({
  name: "gpt-vetting-freelancer-table",
  initialState,
  reducers: {
    setActiveTab(state, action: { payload: ActiveTab }) {
      state.activeTab = action.payload;
    },
    setOpenInviteCandidateModal(state, action: { payload: boolean }) {
      state.openInviteCandidateModal = action.payload;
    },
    setChooseSkillsFrom(state, action: { payload: ChooseSkills }) {
      state.chooseSkillsFrom = action.payload;
    },
    setShowInvitationSuccessMessage(state, action: { payload: boolean }) {
      state.showInvitationSuccessMessage = action.payload;
    },
    setCandidates(state, action: { payload: "DELETE" | "ADD" }) {
      let modifiedList: Candidate[] = [];
      const prevList = state.candidateList;
      if (action.payload === "DELETE") {
        prevList.pop();
        modifiedList = prevList;
      } else {
        const newCandidate: Candidate = {
          id: prevList.length + 1,
          name: "",
          addreess: "",
        };
        modifiedList = [...state.candidateList, newCandidate];
      }
      state.candidateList = modifiedList;
    },

    updateNewSkills(state, action: { payload: "DELETE" | "ADD" }) {
      let modifiedList: NewSkill[] = [];
      const prevList = state.newSkillList;
      if (action.payload === "DELETE") {
        prevList.pop();
        modifiedList = prevList;
      } else {
        const newSkill: NewSkill = {
          id: prevList.length + 1,
          name: "",
          skillLevel: null,
        };
        modifiedList = [...state.newSkillList, newSkill];
      }
      state.newSkillList = modifiedList;
    },

    setSkillSelectingAuthority(
      state,
      action: { payload: SkillsSelectingAuthority }
    ) {
      state.skillsSelectingAuthority = action.payload;
    },

    resetAll(state, action: { payload: "RESET" }) {
      state.activeTab = "REPORT";
      state.openInviteCandidateModal = false;
      state.skillsSelectingAuthority = "CANDIDATES";
      state.candidateList = initialCandidateList;
      state.newSkillList = initialNewSkillList;
      state.chooseSkillsFrom = "NEW";
      state.showInvitationSuccessMessage = false;
    },
  },
});

export const {
  setActiveTab,
  setOpenInviteCandidateModal,
  setSkillSelectingAuthority,
  setCandidates,
  setChooseSkillsFrom,
  setShowInvitationSuccessMessage,
  updateNewSkills,
  resetAll,
} = GptVettingFreelancerTableSlice.actions;

export default GptVettingFreelancerTableSlice;
