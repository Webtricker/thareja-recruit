import { createSlice } from "@reduxjs/toolkit";
type JobReviewActiveEditField =
  | "TITLE"
  | "DESCRIPTION"
  | "CATEGORY"
  | "SKILLS"
  | "SCOPE"
  | "LOCATION"
  | "BUDGET"
  | "REQUIRED_PROFESSIONAL"
  | ""
  | null;
type RequiredProfessionals = "ONE_PERSON" | "MANY_PERSON";
type ActiveCategoryDropdown = "CATEGORY" | "SPECIALTY" | null;
type ActiveJobLocation = "US_ONLY" | "WORLD_WIDE";

interface JobReviewStages {
  reviewActiveEditField: JobReviewActiveEditField;
  activeRequiredProfessionals: RequiredProfessionals;
  activeCategoryDropDown: ActiveCategoryDropdown;
  activeCategoryID: number | null;
  activeSpecialtyID: number | null;
  activeJobLocation: ActiveJobLocation;
  expandScreeningQuestions: boolean;
  expandAdvancedPreferences: boolean;
  activePostYourJobConfirmationModal: boolean;
  //
}

const initialState: JobReviewStages = {
  reviewActiveEditField: null,
  activeRequiredProfessionals: "ONE_PERSON",
  activeCategoryDropDown: null,
  // have to modify this when necessary
  activeCategoryID: 21,
  activeSpecialtyID: 201,
  activeJobLocation: "WORLD_WIDE",
  expandScreeningQuestions: false,
  expandAdvancedPreferences: false,
  activePostYourJobConfirmationModal: false,
};

// Create the slice with reducers for individual property changes
const jobReviewStepsSlice = createSlice({
  name: "JobReviewStages",
  initialState,
  reducers: {
    setPostReviewActiveEditField(
      state,
      action: { payload: JobReviewActiveEditField }
    ) {
      state.reviewActiveEditField = action.payload;
    },
    setActiveRequiredProfessionals(
      state,
      action: { payload: RequiredProfessionals }
    ) {
      state.activeRequiredProfessionals = action.payload;
    },
    setActiveCategoryDropdown(
      state,
      action: { payload: ActiveCategoryDropdown }
    ) {
      state.activeCategoryDropDown = action.payload;
    },
    setActiveCategorID(state, action: { payload: number | null }) {
      state.activeCategoryID = action.payload;
    },
    setActivePostYourJobConfirmationModal(state, action: { payload: boolean }) {
      state.activePostYourJobConfirmationModal = action.payload;
    },
    setActiveSpecialtyID(state, action: { payload: number | null }) {
      state.activeSpecialtyID = action.payload;
    },
    setActiveJobLocation(state, action: { payload: ActiveJobLocation }) {
      state.activeJobLocation = action.payload;
    },
    setExpandScreeningQuestions(state, action: { payload: boolean }) {
      state.expandScreeningQuestions = action.payload;
    },
    setExpandAdvancedPreferences(state, action: { payload: boolean }) {
      state.expandAdvancedPreferences = action.payload;
    },

    resetActiveState(state, action: { payload: "RESET" }) {
      state.reviewActiveEditField = null;
      state.activeRequiredProfessionals = "ONE_PERSON";
      state.activeCategoryDropDown = null;
      state.activeCategoryID = 21;
      state.activeSpecialtyID = 201;
      state.activeJobLocation = "WORLD_WIDE";
      state.expandScreeningQuestions = false;
      state.expandAdvancedPreferences = false;
      state.activePostYourJobConfirmationModal = false;
    },
  },
});

export const {
  setPostReviewActiveEditField,
  setActiveRequiredProfessionals,
  setExpandAdvancedPreferences,
  resetActiveState,
  setExpandScreeningQuestions,
  setActiveCategoryDropdown,
  setActiveCategorID,
  setActiveSpecialtyID,
  setActiveJobLocation,
  setActivePostYourJobConfirmationModal,
} = jobReviewStepsSlice.actions;

export default jobReviewStepsSlice;
