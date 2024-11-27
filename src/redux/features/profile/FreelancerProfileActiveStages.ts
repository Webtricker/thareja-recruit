import { createSlice } from "@reduxjs/toolkit";

export type ActiveTabBtns = "COMPLETED_JOBS" | "IN_PROGRESS";
export type ActiveContractDropDown =
  | "FILTERS"
  | "SHORT_BY_DATE"
  | "SHORT_BY_ORDER"
  | null;

// ============ all types ends
interface FreelancerProfileStages {
  activeTabBtn: ActiveTabBtns;
  activeFreelancerProfileModal: boolean;
}

const initialState: FreelancerProfileStages = {
  activeTabBtn: "COMPLETED_JOBS",
  activeFreelancerProfileModal: false,
};

// Create the slice with reducers for individual property changes
const FreelancerProfileActiveStages = createSlice({
  name: "FreelancerProfileActiveStages",
  initialState,
  reducers: {
    setActiveTabBtn(state, action: { payload: ActiveTabBtns }) {
      state.activeTabBtn = action.payload;
    },

    setActiveFreelancerProfileModal(state, action: { payload: boolean }) {
      state.activeFreelancerProfileModal = action.payload;
    },

    resetAdvancedFilters(state, action: { payload: "RESET" }) {
      state.activeTabBtn = "COMPLETED_JOBS";
      state.activeFreelancerProfileModal = false;
    },
  },
});

export const { setActiveTabBtn, setActiveFreelancerProfileModal } =
  FreelancerProfileActiveStages.actions;

export default FreelancerProfileActiveStages;
