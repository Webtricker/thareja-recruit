import { createSlice } from "@reduxjs/toolkit";

export type ActiveTabBtns = "OFFERS" | "HIRED";
// export type ActiveContractDropDown =
//   | "FILTERS"
//   | "SHORT_BY_DATE"
//   | "SHORT_BY_ORDER"
//   | null;

// ============ all types ends
interface FreelancerProfileStages {
  activeTabBtn: ActiveTabBtns;
}

const initialState: FreelancerProfileStages = {
  activeTabBtn: "OFFERS",
};

// Create the slice with reducers for individual property changes
const HireFreelancersActiveStages = createSlice({
  name: "HireFreelancersActiveStages",
  initialState,
  reducers: {
    setActiveTabBtn(state, action: { payload: ActiveTabBtns }) {
      state.activeTabBtn = action.payload;
    },

    resetAdvancedFilters(state, action: { payload: "RESET" }) {
      state.activeTabBtn = "OFFERS";
    },
  },
});

export const { setActiveTabBtn } = HireFreelancersActiveStages.actions;

export default HireFreelancersActiveStages;
