import { createSlice } from "@reduxjs/toolkit";

export type ActiveTabBtns = "SEARCH" | "INVITE" | "HIRE" | "SAVED" | null;
export type ActiveContractDropDown =
  | "FILTERS"
  | "SHORT_BY_DATE"
  | "SHORT_BY_ORDER"
  | null;

// ============ all types ends
interface FilteredValue {
  earnedAmount: string;
  jobSuccess: string;
  hourlyRate: string;
  hoursBilled: string;
  category: string;
  englishLavel: string;
  talentType: string;
  lastActivity: string;
  dropDownCategory: string | null;
  language: string | null;
  location: string | null;
}

const initialState: FilteredValue = {
  earnedAmount: "Any amount earned",
  jobSuccess: "Any job success",
  category: "Any category",
  englishLavel: "Any lavel",
  hoursBilled: "Any hours",
  hourlyRate: "Any hourly rate",
  lastActivity: "Any time",
  dropDownCategory: null,
  language: null,
  location: null,
  talentType: "Freelancers & Agencies",
};

// Create the slice with reducers for individual property changes
const InviteFreeLancersFilteres = createSlice({
  name: "InviteFreeLancersFilteres",
  initialState,
  reducers: {
    setEarnedAmount(state, action: { payload: string }) {
      state.earnedAmount = action.payload;
    },
    setJobSuccess(state, action: { payload: string }) {
      state.jobSuccess = action.payload;
    },
    setCategory(state, action: { payload: string }) {
      state.category = action.payload;
    },
    setEnglishLavel(state, action: { payload: string }) {
      state.englishLavel = action.payload;
    },
    setHoursBilled(state, action: { payload: string }) {
      state.hoursBilled = action.payload;
    },
    setHourlyRate(state, action: { payload: string }) {
      state.hourlyRate = action.payload;
    },
    setLastActivity(state, action: { payload: string }) {
      state.lastActivity = action.payload;
    },
    setTalentType(state, action: { payload: string }) {
      state.talentType = action.payload;
    },
    setDropDownCategory(state, action: { payload: string | null }) {
      state.dropDownCategory = action.payload;
    },
    setLanguage(state, action: { payload: string | null }) {
      state.language = action.payload;
    },
    setLocation(state, action: { payload: string | null }) {
      state.location = action.payload;
    },

    resetFiltersValue(state, action: { payload: "RESET" }) {
      state.earnedAmount = "Any amount earned";
      state.jobSuccess = "Any job success";
      state.category = "Any category";
      state.englishLavel = "Any lavel";
      state.hoursBilled = "Any hours";
      state.hourlyRate = "Any hourly rate";
      state.lastActivity = "Any time";
      state.dropDownCategory = null;
      state.language = null;
      state.location = null;
      state.talentType = "Freelancers & Agencies";
    },
  },
});

export const {
  setEarnedAmount,
  setJobSuccess,
  setCategory,
  setEnglishLavel,
  setHoursBilled,
  setHourlyRate,
  setLastActivity,
  setTalentType,
  setDropDownCategory,
  setLanguage,
  setLocation,
  resetFiltersValue,
} = InviteFreeLancersFilteres.actions;

export default InviteFreeLancersFilteres;
