import { createSlice } from "@reduxjs/toolkit";

// export type ActiveTabBtns = "COMPLETED_JOBS" | "IN_PROGRESS";
export type UserProfileDropDown =
  | "SEARCH_MESSAGE"
  | "PEOPLE"
  | "FILE_AND_LINKS"
  | "PERSONAL_NOTEPAD"
  | null;

type ActiveFileAndLinks = "ALL" | "FILES" | "LINKS";

// ============ all types ends
interface MessageInitialStates {
  userProfileActiveDropDown: UserProfileDropDown;
  selectedList: number | null;
  activeFileAndLinks: ActiveFileAndLinks;
  conversationType: "DUAL" | "GROUP";
  showUserProfileDrawer: boolean;
  showPeopleMessage: boolean;
}

const initialState: MessageInitialStates = {
  userProfileActiveDropDown: null,
  selectedList: null,
  activeFileAndLinks: "ALL",
  conversationType: "DUAL",
  showUserProfileDrawer: false,
  showPeopleMessage: false,
};

// Create the slice with reducers for individual property changes
const MessageActiveStages = createSlice({
  name: "MessageActiveStages",
  initialState,
  reducers: {
    setUserProfileActiveDropdown(
      state,
      action: { payload: UserProfileDropDown }
    ) {
      state.userProfileActiveDropDown = action.payload;
    },
    setSelectedList(state, action: { payload: number | null }) {
      state.selectedList = action.payload;
    },
    setActiveFilesAndLinks(state, action: { payload: ActiveFileAndLinks }) {
      state.activeFileAndLinks = action.payload;
    },
    setConversationType(state, action: { payload: "DUAL" | "GROUP" }) {
      state.conversationType = action.payload;
    },
    setShowUserProfileDrawer(state, action: { payload: boolean }) {
      state.showUserProfileDrawer = action.payload;
    },
    setShowPeopleMessage(state, action: { payload: boolean }) {
      state.showPeopleMessage = action.payload;
    },

    resetAdvancedFilters(state, action: { payload: "RESET" }) {
      state.userProfileActiveDropDown = null;
      state.selectedList = null;
      state.activeFileAndLinks = "ALL";
      state.conversationType = "DUAL";
      state.showUserProfileDrawer = false;
      state.showPeopleMessage = false;
    },
  },
});

export const {
  setSelectedList,
  setActiveFilesAndLinks,
  setUserProfileActiveDropdown,
  setConversationType,
  setShowUserProfileDrawer,
  setShowPeopleMessage,
} = MessageActiveStages.actions;

export default MessageActiveStages;
