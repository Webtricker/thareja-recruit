import { createSlice } from "@reduxjs/toolkit";

interface AllJobsState {
  // activeTabBtn: ActiveTabBtns;
}

const initialState: AllJobsState = {};

// Create the slice with reducers for individual property changes
const allJobPostSlice = createSlice({
  name: "allJobPost",
  initialState,
  reducers: {
    // setActiveTabBtn(state, action: { payload: ActiveTabBtns }) {
    //   state.activeTabBtn = action.payload;
    // },

    resetAllJobPostPage(state, action: { payload: "RESET" }) {
      // state.activeTabBtn = "ALL_JOB_POSTS";
    },
  },
});

export const {} = allJobPostSlice.actions;

export default allJobPostSlice;
