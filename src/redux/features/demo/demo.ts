import { createSlice } from "@reduxjs/toolkit";

type TExperienceLevel = {
  title: string;
  des: string;
};

interface TInitialState {
  activeExperienceLevel: TExperienceLevel;
}

const initialState: TInitialState = {
  activeExperienceLevel: {
    title: "Entry level",
    des: "I am relatively new to this field",
  },
};

// ==========  Create the slice with reducers for individual property changes ============
const SettingsMyProfileSlice = createSlice({
  name: "settings-my-profile",
  initialState,
  reducers: {
    setExperienceLevel(state, action: { payload: TExperienceLevel }) {
      state.activeExperienceLevel = action.payload;
    },
  },
});

export const {} = SettingsMyProfileSlice.actions;

export default SettingsMyProfileSlice;
