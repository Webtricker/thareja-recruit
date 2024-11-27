// Redux/Features/GptVettilngSlice/tabsSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type ActiveTab = "REPORT" | "CONNECTED" | "ARCHIVED";
interface InitialState {
  activeTab: ActiveTab;
}
const initialState: InitialState = {
  activeTab: "REPORT",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab(state, action: { payload: ActiveTab }) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
