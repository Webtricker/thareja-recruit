import { createSlice } from "@reduxjs/toolkit";

export type ActiveTabBtns = "SEARCH" | "INVITE" | "HIRE" | "SAVED" | null;
export type ActiveContractDropDown =
  | "FILTERS"
  | "SHORT_BY_DATE"
  | "SHORT_BY_ORDER"
  | null;

// ============ all types ends
interface InviteFreeLancerStates {
  activeTabBtn: ActiveTabBtns;
  activeAvailableNow: boolean;
  activeEarnedAmount: number;
  activeJobSuccess: number;
  activeHourlyRate: number;
  activeHourlyBilled: number;
  activeCategory: number;
  activeEnglishLavel: number;
  activeTalentType: number;
  activeLastActivity: number;
  expandAdvancedFilter: boolean;
  activeContractDropDown: ActiveContractDropDown;
  selectedLanguage: string | null;
  selectedLocation: string | null;
  activeInviteModal: boolean;
  activeDropDownCategory: string | null;
}

const initialState: InviteFreeLancerStates = {
  activeTabBtn: "SEARCH",
  expandAdvancedFilter: false,
  activeEarnedAmount: 1,
  activeJobSuccess: 1,
  activeHourlyRate: 1,
  activeHourlyBilled: 1,
  activeCategory: 1,
  activeEnglishLavel: 1,
  activeTalentType: 1,
  activeLastActivity: 1,
  activeAvailableNow: false,
  activeContractDropDown: null,
  activeDropDownCategory: null,
  selectedLanguage: null,
  selectedLocation: null,
  activeInviteModal: false,
};

// Create the slice with reducers for individual property changes
const InviteFreeLancersActiveStages = createSlice({
  name: "InviteFreeLancersActiveStages",
  initialState,
  reducers: {
    setActiveTabBtn(state, action: { payload: ActiveTabBtns }) {
      state.activeTabBtn = action.payload;
    },
    setExpandAdvancedFilter(state, action: { payload: boolean }) {
      state.expandAdvancedFilter = action.payload;
    },
    setActiveInviteModal(state, action: { payload: boolean }) {
      state.activeInviteModal = action.payload;
    },
    setActiveContractDropDown(
      state,
      action: { payload: ActiveContractDropDown }
    ) {
      state.activeContractDropDown = action.payload;
    },
    setActiveAvailableNow(state, action: { payload: boolean }) {
      state.activeAvailableNow = action.payload;
    },
    setActiveEarnedAmount(state, action: { payload: number }) {
      state.activeEarnedAmount = action.payload;
    },
    setActiveJobSuccess(state, action: { payload: number }) {
      state.activeJobSuccess = action.payload;
    },
    setActiveHourlyRate(state, action: { payload: number }) {
      state.activeHourlyRate = action.payload;
    },
    setActiveHourlyBilled(state, action: { payload: number }) {
      state.activeHourlyBilled = action.payload;
    },
    setActiveCategory(state, action: { payload: number }) {
      state.activeCategory = action.payload;
    },
    setActiveEnglishLavel(state, action: { payload: number }) {
      state.activeEnglishLavel = action.payload;
    },
    setActiveTalentType(state, action: { payload: number }) {
      state.activeTalentType = action.payload;
    },
    setActiveLastActivity(state, action: { payload: number }) {
      state.activeLastActivity = action.payload;
    },
    setActiveDropDownCategory(state, action: { payload: string | null }) {
      state.activeDropDownCategory = action.payload;
    },
    setSelectedLanguage(state, action: { payload: string | null }) {
      state.selectedLanguage = action.payload;
    },
    setSelectedLocation(state, action: { payload: string | null }) {
      state.selectedLocation = action.payload;
    },

    resetAdvancedFilters(state, action: { payload: "RESET" }) {
      state.activeTabBtn = "SEARCH";
      state.activeContractDropDown = null;
      state.activeAvailableNow = false;
      state.activeEarnedAmount = 1;
      state.activeJobSuccess = 1;
      state.activeHourlyRate = 1;
      state.activeHourlyBilled = 1;
      state.activeCategory = 1;
      state.activeEnglishLavel = 1;
      state.activeTalentType = 1;
      state.activeLastActivity = 1;
      state.expandAdvancedFilter = false;
      state.activeDropDownCategory = null;
      state.selectedLanguage = null;
      state.selectedLocation = null;
      state.activeInviteModal = false;
    },
  },
});

export const {
  setActiveTabBtn,
  setActiveContractDropDown,
  resetAdvancedFilters,
  setActiveAvailableNow,
  setExpandAdvancedFilter,
  setSelectedLocation,
  setSelectedLanguage,
  setActiveEarnedAmount,
  setActiveDropDownCategory,
  setActiveJobSuccess,
  setActiveHourlyRate,
  setActiveHourlyBilled,
  setActiveCategory,
  setActiveEnglishLavel,
  setActiveTalentType,
  setActiveLastActivity,
  setActiveInviteModal,
} = InviteFreeLancersActiveStages.actions;

export default InviteFreeLancersActiveStages;
