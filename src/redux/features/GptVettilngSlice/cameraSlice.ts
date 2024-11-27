import { createSlice } from "@reduxjs/toolkit";

interface CameraState {
  status: "initial" | "testing" | "finished";
}

const initialState: CameraState = {
  status: "initial",
};

const cameraSlice = createSlice({
  name: "camera",
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

export const { startTesting, finishTesting } = cameraSlice.actions;
export default cameraSlice.reducer;
