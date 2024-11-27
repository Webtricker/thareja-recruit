import { createSlice } from "@reduxjs/toolkit";

export type ActiveTabBtns = "ALL_JOB_POSTS" | "ALL_CONTRACTS" | null;
export type ActiveContractDropDown =
  | "FILTERS"
  | "SHORT_BY_DATE"
  | "SHORT_BY_ORDER"
  | null;
interface AllJobsState {
  activeTabBtn: ActiveTabBtns;
  activeContractDropDown: ActiveContractDropDown;
}

const initialState: AllJobsState = {
  activeTabBtn: "ALL_JOB_POSTS",
  activeContractDropDown: null,
};

// Create the slice with reducers for individual property changes
const AllJobPostActiveStages = createSlice({
  name: "allJobPostActiveStages",
  initialState,
  reducers: {
    setActiveTabBtn(state, action: { payload: ActiveTabBtns }) {
      state.activeTabBtn = action.payload;
    },
    setActiveContractDropDown(
      state,
      action: { payload: ActiveContractDropDown }
    ) {
      state.activeContractDropDown = action.payload;
    },

    resetAllJobPostPage(state, action: { payload: "RESET" }) {
      state.activeTabBtn = "ALL_JOB_POSTS";
      state.activeContractDropDown = null;
    },
  },
});

export const {
  setActiveTabBtn,
  setActiveContractDropDown,
  resetAllJobPostPage,
} = AllJobPostActiveStages.actions;

export default AllJobPostActiveStages;
