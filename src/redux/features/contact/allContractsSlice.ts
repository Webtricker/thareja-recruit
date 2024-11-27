import { staticContractData } from "@/staticData/contractData";
import { createSlice } from "@reduxjs/toolkit";

export type ActiveTabBtns = "ACTIVE" | "ARCHIVED";

type ActiveContractsType = {
  contractName: string | null;
  clientEmail: string | null;
  totalAmount: number | null;
  freelancerInfo: {
    name: string | null;
    email: string | null;
    profileUrl: string | null;
  };
  milestone: {
    name: string | null;
    amount: number | null;
    endDate: string | null;
  };
  createdAt: number;
};

interface AllContractInitialState {
  activeTabBtn: ActiveTabBtns;
  activeContracts: ActiveContractsType[];
  reviewContractIndex: number | null;
}

const initialState: AllContractInitialState = {
  activeTabBtn: "ACTIVE",
  activeContracts: [staticContractData],
  reviewContractIndex: null,
};

// ==========  Create the slice with reducers for individual property changes ============
const AllContracts = createSlice({
  name: "allContracts",
  initialState,
  reducers: {
    setActiveTabBtn(state, action: { payload: ActiveTabBtns }) {
      state.activeTabBtn = action.payload;
    },
    setActiveContracts(state, action: { payload: ActiveContractsType }) {
      state.activeContracts.push(action.payload);
    },
    setReviewContractIndex(state, action: { payload: number | null }) {
      state.reviewContractIndex = action.payload;
    },

    resetAllJobPostPage(state) {
      state.activeTabBtn = "ACTIVE";
      state.activeContracts = [];
      state.reviewContractIndex = null;
    },
  },
});

export const {
  setActiveTabBtn,
  setActiveContracts,
  setReviewContractIndex,
  resetAllJobPostPage,
} = AllContracts.actions;

export default AllContracts;
