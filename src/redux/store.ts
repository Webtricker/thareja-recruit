import { configureStore } from "@reduxjs/toolkit";
import GptVettingFreelancerTableSlice from "./features/GptVettilngSlice/GptVettingFreelancerTableSlice";
import SkillTest from "./features/GptVettilngSlice/SkillTest";
import { authApi } from "./features/auth/authApiSlice";
import authSliceReducer from "./features/auth/authSlice";
import AllContracts from "./features/contact/allContractsSlice";
import ContractModals from "./features/contact/contractModals";
import DirectContacts from "./features/contact/directContactsSlice";
import MainHeaderSlice from "./features/hambergerMenuSlice.ts/mainHeaderSlice";
import AllJobPostActiveStages from "./features/jobpost/AllJobPostActiveStages";
import allJobPostSlice from "./features/jobpost/AllJobPostSlice";
import HireFreelancersActiveStages from "./features/jobpost/HireFreelancersActiveStages";
import InviteFreeLancersActiveStages from "./features/jobpost/InviteFreeLancersActiveStages";
import jobReviewStepsSlice from "./features/jobpost/JobReviewSlice";
import ReviewProposalsActiveStages from "./features/jobpost/ReviewProposalsActiveStages";
import jobPostingSlice from "./features/jobpost/jobPostSlice";
import jobPostingStepsSlice from "./features/jobpost/jobPostSteps";
import MessageActiveStages from "./features/message/MessageActiveStages";
import ModalToggler from "./features/modalToggler/ModalTogglerSlice";
import CreateFreelancerProfileStates from "./features/onboarding/createFreelancerProfileSlice";
import FreelancerGetstartedStates from "./features/onboarding/freelancerGetStartedSlice";
import FreelancerProfileActiveStages from "./features/profile/FreelancerProfileActiveStages";
import Modyfier from "./features/rootModyfier/Modyfier";
import IdentifyVerificationSlice from "./features/settings/identityVerificationSlice";
import SettingsMyProfileSlice from "./features/settings/settingsMyProfileSlice";

export const store = configureStore({
  reducer: {
    // authentication
    auth: authSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    // job posting
    jobPosting: jobPostingSlice.reducer,
    allJobPost: allJobPostSlice.reducer,
    allJobPostActiveStages: AllJobPostActiveStages.reducer,
    inviteFreelancersActiveStages: InviteFreeLancersActiveStages.reducer,
    reviewJobProposalsActiveStages: ReviewProposalsActiveStages.reducer,
    jobPostingStages: jobPostingStepsSlice.reducer,
    jobReviews: jobReviewStepsSlice.reducer,
    headerMenus: MainHeaderSlice.reducer,
    modyfier: Modyfier.reducer,
    freelancerProfileActiveStages: FreelancerProfileActiveStages.reducer,
    hireFreelancersActiveStages: HireFreelancersActiveStages.reducer,
    messageActiveStages: MessageActiveStages.reducer,

    // gpt vetting states;
    gptVettingFreelancerActieStates: GptVettingFreelancerTableSlice.reducer,
    interviewProcess: SkillTest.reducer,

    // direct contacts
    directContactsForm: DirectContacts.reducer,
    allContracts: AllContracts.reducer,
    contractModals: ContractModals.reducer,

    // onboarding
    freelancerOnboarding: FreelancerGetstartedStates.reducer,
    createFreelancerProfile: CreateFreelancerProfileStates.reducer,

    // settings states
    settingsMyProfile: SettingsMyProfileSlice,
    settingsIdentifyVerificationSlice: IdentifyVerificationSlice,

    // modal show/hide slice
    modalToggler: ModalToggler,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
