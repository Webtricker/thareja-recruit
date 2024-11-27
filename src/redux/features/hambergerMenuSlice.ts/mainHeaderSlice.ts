import { createSlice } from "@reduxjs/toolkit";

type CategoryType = "JOB" | "TALENT" | "REPORT";
type ActiveDropDownMenu = "JOB" | "TALENT" | "REPORT" | "SEARCH" | null;

interface HeaderState {
  openMenuLinks: boolean;
  expandSearchBar: boolean;
  searchingCategory: CategoryType;
  activeDropDownMenu: ActiveDropDownMenu;
}

const initialState: HeaderState = {
  openMenuLinks: false,
  expandSearchBar: false,
  searchingCategory: "TALENT",
  activeDropDownMenu: null,
};

// Create the slice with reducers for individual property changes
const MainHeaderSlice = createSlice({
  name: "HeaderMenus",
  initialState,
  reducers: {
    setOpenMenuLinks(state, action: { payload: boolean }) {
      state.openMenuLinks = action.payload;
    },
    setExpandSearchBar(state, action: { payload: boolean }) {
      state.expandSearchBar = action.payload;
    },
    setSearchingCategory(state, action: { payload: CategoryType }) {
      state.searchingCategory = action.payload;
    },
    setActiveDropDownMenu(state, action: { payload: ActiveDropDownMenu }) {
      state.activeDropDownMenu = action.payload;
    },
  },
});

export const {
  setOpenMenuLinks,
  setExpandSearchBar,
  setSearchingCategory,
  setActiveDropDownMenu,
} = MainHeaderSlice.actions;

export default MainHeaderSlice;
