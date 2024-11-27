import { createSlice } from "@reduxjs/toolkit";

export type Components =
  | "GET_STARTED"
  | "WORKING_EXPERIENCE"
  | "FREELANCING_GOAL"
  | "WORKING_TYPE";

type QueryData = {
  workingExperience: string | null;
  biggestGoal: string | null;
  workingTechnique: string | null;
};
type Key = "workingExperience" | "biggestGoal" | "workingTechnique";
type UpdateQueryActionType = {
  payload: { key: Key; value: string };
};

// ============ all types ends
interface FreelancerGetStartedStates {
  activeComponent: Components;
  queryData: QueryData;
  agreeToContractToHireOpportunity: boolean;
}

const INITIAL_QUERY_DATA: QueryData = {
  workingExperience: null,
  biggestGoal: null,
  workingTechnique: null,
};

const initialState: FreelancerGetStartedStates = {
  activeComponent: "GET_STARTED",
  queryData: INITIAL_QUERY_DATA,
  agreeToContractToHireOpportunity: false,
};

// Create the slice with reducers for individual property changes
const FreelancerGetstartedStates = createSlice({
  name: "FreelancerGetstartedStates",
  initialState,
  reducers: {
    setActiveComponents(state, action: { payload: Components }) {
      state.activeComponent = action.payload;
    },

    updateQueryData(state, action: UpdateQueryActionType) {
      state.queryData[action.payload.key] = action.payload.value;
    },

    setContractToHireAgreement(state, action: { payload: boolean }) {
      state.agreeToContractToHireOpportunity = action.payload;
    },

    resetCongratulationPageStates(state) {
      state.activeComponent = "GET_STARTED";
      state.queryData = INITIAL_QUERY_DATA;
      state.agreeToContractToHireOpportunity = false;
    },
  },
});

export const {
  setActiveComponents,
  updateQueryData,
  setContractToHireAgreement,
  resetCongratulationPageStates,
} = FreelancerGetstartedStates.actions;

export default FreelancerGetstartedStates;
