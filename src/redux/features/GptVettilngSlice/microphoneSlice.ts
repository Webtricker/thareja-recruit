import { createSlice } from "@reduxjs/toolkit";

interface MicrophoneState {
  status: "initial" | "testing" | "finished";
}

const initialState: MicrophoneState = {
  status: "initial",
};

const microphoneSlice = createSlice({
  name: "microphone",
  initialState,
  reducers: {
    startTesting: (state) => {
      state.status = "testing";
    },
    finishTesting: (state) => {
      state.status = "finished";
    },
  },
});

export const { startTesting, finishTesting } = microphoneSlice.actions;
export default microphoneSlice.reducer;
