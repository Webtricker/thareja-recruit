import { createSlice } from "@reduxjs/toolkit";

interface JobPostingState {
  title: string;
  requiredSkills: string[];
  industrialSkills: string[];
  recruitingAndTalendSourcingSkills: string[];
  jobScale: string;
  jobDuration: string;
  jobExperienceLevel: string;
  projectType: string | null;
  workingSchedule: string;
  jobBudgetType: "FIXED" | "HOURLY";
  jobBudget: string;
  jobDescription: string;
  attachedFile: File | null; // Use the File type for uploaded files
  requiredProfessionals: string;
  jobCategory: string | null;
  specialty: string | null;
  jobLocation: string;
}

const initialState: JobPostingState = {
  title: "",
  requiredSkills: [],
  industrialSkills: [],
  recruitingAndTalendSourcingSkills: [],
  projectType: null,
  jobScale: "Large",
  jobDuration: "3 to 6 months",
  jobExperienceLevel: "",
  workingSchedule: "",
  jobBudgetType: "HOURLY",
  jobBudget: "",
  jobDescription: "",
  attachedFile: null,
  requiredProfessionals: "One person",
  jobLocation: "Worldwide",
  // TODO: have to modify when necessary.
  jobCategory: "Accounting & Consulting",
  specialty: null,
};

// Create the slice with reducers for individual property changes
const jobPostingSlice = createSlice({
  name: "jobPosting",
  initialState,
  reducers: {
    setJobPostJobTitle(state, action: { payload: string }) {
      state.title = action.payload;
    },
    setJobPostRequiredSkills(state, action: { payload: string[] }) {
      state.requiredSkills = action.payload;
    },
    setJobPostIndustrialSkills(state, action: { payload: string[] }) {
      state.industrialSkills = action.payload;
    },
    setJobPost_RTS_Skills(state, action: { payload: string[] }) {
      state.recruitingAndTalendSourcingSkills = action.payload;
    },
    setJobPostJobScale(state, action: { payload: string }) {
      state.jobScale = action.payload;
    },
    setJobPostJobDuration(state, action: { payload: string }) {
      state.jobDuration = action.payload;
    },
    setJobPostJobExperienceLevel(state, action: { payload: string }) {
      state.jobExperienceLevel = action.payload;
    },
    setJobPostJobLocation(state, action: { payload: string }) {
      state.jobLocation = action.payload;
    },
    setJobPostProjectType(state, action: { payload: string | null }) {
      state.projectType = action.payload;
    },
    setJobPostWorkingSchedule(state, action: { payload: string }) {
      state.workingSchedule = action.payload;
    },
    setJobPostBudgetType(state, action: { payload: "HOURLY" | "FIXED" }) {
      state.jobBudgetType = action.payload;
    },
    setJobCategory(state, action: { payload: string | null }) {
      state.jobCategory = action.payload;
    },
    setSpecialty(state, action: { payload: string | null }) {
      state.specialty = action.payload;
    },
    setJobBudget(state, action: { payload: string }) {
      state.jobBudget = action.payload;
    },
    setJobPostDescription(state, action: { payload: string }) {
      state.jobDescription = action.payload;
    },
    setJobPostAttachedFile(state, action: { payload: File | null }) {
      state.attachedFile = action.payload;
    },
    setRequiredProfessionals(state, action: { payload: string }) {
      state.requiredProfessionals = action.payload;
    },

    resetJobPost(state, action: { payload: "RESET" }) {
      state.title = "";
      state.requiredSkills = [];
      state.industrialSkills = [];
      state.recruitingAndTalendSourcingSkills = [];
      state.projectType = null;
      state.jobScale = "Large";
      state.jobDuration = "3 to 6 months";
      state.jobExperienceLevel = "Entry";
      state.workingSchedule = "";
      state.jobBudgetType = "HOURLY";
      state.jobBudget = "";
      state.jobLocation = "Worldwide";
      state.jobDescription = "";
      state.attachedFile = null;
      state.requiredProfessionals = "One person";
      state.jobCategory = "Accounting & Consulting";
      state.specialty = null;
    },
  },
});

export const {
  setJobPostJobTitle,
  setJobPostRequiredSkills,
  setJobPost_RTS_Skills,
  setJobPostIndustrialSkills,
  setJobPostJobScale,
  setJobPostJobLocation,
  setJobPostJobExperienceLevel,
  setJobPostWorkingSchedule,
  setJobPostBudgetType,
  setJobBudget,
  setSpecialty,
  setJobCategory,
  setJobPostDescription,
  setJobPostAttachedFile,
  resetJobPost,
  setJobPostJobDuration,
  setJobPostProjectType,
  setRequiredProfessionals,
} = jobPostingSlice.actions;

export default jobPostingSlice;
