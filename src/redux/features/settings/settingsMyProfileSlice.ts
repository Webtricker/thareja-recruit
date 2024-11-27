import { createSlice } from "@reduxjs/toolkit";

type TExperienceLevel = {
  level: string;
  des: string;
};

interface TInitialState {
  activeExperienceLevel: TExperienceLevel;
}

const initialState: TInitialState = {
  activeExperienceLevel: {
    level: "Entry level",
    des: "I am relatively new to this field",
  },
};

// ==========  Create the slice with reducers for individual property changes ============
const SettingsMyProfileSlice = createSlice({
  name: "settings-my-profile",
  initialState,
  reducers: {
    setProfileExperienceLevel(state, action: { payload: TExperienceLevel }) {
      state.activeExperienceLevel = action.payload;
    },
  },
});

export const { setProfileExperienceLevel } = SettingsMyProfileSlice.actions;

export default SettingsMyProfileSlice.reducer;
