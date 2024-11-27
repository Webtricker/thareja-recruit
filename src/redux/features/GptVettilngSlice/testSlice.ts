// testSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Skill {
  skill: string;
  expertise: string;
}

interface TestState {
  currentStep: number;
  skills: Skill[];
  micTestCompleted: boolean;
  videoTestCompleted: boolean;
  screenShareCompleted: boolean;
}

const initialState: TestState = {
  currentStep: 1,
  skills: [],
  micTestCompleted: false,
  videoTestCompleted: false,
  screenShareCompleted: false,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    completeMicTest: (state) => {
      state.micTestCompleted = true;
    },
    completeVideoTest: (state) => {
      state.videoTestCompleted = true;
    },
    completeScreenShare: (state) => {
      state.screenShareCompleted = true;
    },
  },
});

export const {
  nextStep,
  completeMicTest,
  completeVideoTest,
  completeScreenShare,
} = testSlice.actions;
export default testSlice.reducer;
