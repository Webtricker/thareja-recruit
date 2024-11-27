import { createSlice } from "@reduxjs/toolkit";

type TExperienceLevel = {
  level: string;
  des: string;
};

interface TInitialState {
  stepCompleted: number;
  showSelfiComponent: boolean;
}

const initialState: TInitialState = {
  stepCompleted: 0,
  showSelfiComponent: false,
};

// ==========  Create the slice with reducers for individual property changes ============
const IdentifyVerificationSlice = createSlice({
  name: "settings-my-profile-identity-verification",
  initialState,
  reducers: {
    setActiveIdentityVerificationCompletedStep(
      state,
      action: { payload: number }
    ) {
      state.stepCompleted = action.payload;
    },
    setShowSelfiComponent(state, action: { payload: boolean }) {
      state.showSelfiComponent = action.payload;
    },
  },
});

export const {
  setActiveIdentityVerificationCompletedStep,
  setShowSelfiComponent,
} = IdentifyVerificationSlice.actions;

export default IdentifyVerificationSlice.reducer;
