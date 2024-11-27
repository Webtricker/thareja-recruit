import { createSlice } from "@reduxjs/toolkit";

type StateType =
  | "TITLE_COMPONENT"
  | "SKILLS_COMPONENT"
  | "WORK_DETAILS_COMPONENT"
  | "BUDGET_COMPONENT"
  | "DESCRIPTION_COMPONENT";

type WithActiveStge = "JOB_DETAILS" | "DESCRIPTION" | "BUDGET";
type ErrorsType = {
  field: "TITLE" | "SKILLS" | "BUDGET" | "DESCRIPTION";
  message: string;
} | null;

type JobScrope =
  | "JOB_SCALE"
  | "JOB_DURATION"
  | "JOB_EXPERIENCE"
  | "JOB_WORKING_SCHEDULE"
  | null;

type JobDetailsAccordions =
  | "PROJECT_TYPE"
  | "DRAFT_EDITING"
  | "REWORK_PREVIOUS_POST"
  | null;
type JobExperience = "ENTRY" | "INTERMEDIATE" | "EXPERT";
type ProjectType = "LONG_TERM_PROJECT" | "SHORT_TERM_PROJECT" | null;
type JobScaleType = "LARGE" | "MEDIUM" | "SMALL";
type JobDurationType = "LONG" | "MEDIUM" | "SHORT";
type WorkingSchedule = "FULL_TIME" | "CONTRACTUAL";

interface JobPostingState {
  activeStage: StateType;
  withAiActiveStage: WithActiveStge;
  activeProjectType: ProjectType;
  activeJobScale: JobScaleType;
  editingDrafPost: boolean;
  errors: ErrorsType;
  activeJobScope: JobScrope;
  activeJobDetailsAccordion: JobDetailsAccordions;
  activeJobDuration: JobDurationType;
  jobPostUsingAI: boolean;
  reworkPrevJobPost: boolean;
  activeJobExperience: JobExperience;
  activeWorkingSchedule: WorkingSchedule;
}

const initialState: JobPostingState = {
  activeStage: "BUDGET_COMPONENT",
  withAiActiveStage: "JOB_DETAILS",
  activeProjectType: null,
  errors: null,
  activeJobScope: null,
  activeJobScale: "LARGE",
  activeJobDetailsAccordion: null,
  jobPostUsingAI: false,
  activeJobDuration: "LONG",
  editingDrafPost: false,
  reworkPrevJobPost: false,
  activeJobExperience: "ENTRY",
  activeWorkingSchedule: "FULL_TIME",
};

// Create the slice with reducers for individual property changes
const jobPostingStepsSlice = createSlice({
  name: "jobPostingStages",
  initialState,
  reducers: {
    setJobPostActiveStage(state, action: { payload: StateType }) {
      state.activeStage = action.payload;
    },
    setWithAiJobPostActiveStage(state, action: { payload: WithActiveStge }) {
      state.withAiActiveStage = action.payload;
    },
    setJobPostErrors(state, action: { payload: ErrorsType }) {
      state.errors = action.payload;
    },
    setActiveJobScope(state, action: { payload: JobScrope }) {
      state.activeJobScope = action.payload;
    },
    setActiveProjectType(state, action: { payload: ProjectType }) {
      state.activeProjectType = action.payload;
    },
    setActiveJobDuration(state, action: { payload: JobDurationType }) {
      state.activeJobDuration = action.payload;
    },
    setActiveWorkingSchedule(state, action: { payload: WorkingSchedule }) {
      state.activeWorkingSchedule = action.payload;
    },
    setActiveJobDetailsAccordion(
      state,
      action: { payload: JobDetailsAccordions }
    ) {
      state.activeJobDetailsAccordion = action.payload;
    },
    setJobPostUsingAI(state, action: { payload: boolean }) {
      state.jobPostUsingAI = action.payload;
    },
    setEditingJobPost(state, action: { payload: boolean }) {
      state.editingDrafPost = action.payload;
    },
    setReworkPrevJobPost(state, action: { payload: boolean }) {
      state.reworkPrevJobPost = action.payload;
    },
    setActiveJobScale(state, action: { payload: JobScaleType }) {
      state.activeJobScale = action.payload;
    },
    setActiveExperienceLavel(state, action: { payload: JobExperience }) {
      state.activeJobExperience = action.payload;
    },
    resetActiveState(state, action: { payload: "RESET" }) {
      state.activeStage = "TITLE_COMPONENT";
      state.withAiActiveStage = "JOB_DETAILS";
      state.activeProjectType = null;
      state.errors = null;
      state.activeJobScope = null;
      state.activeJobScale = "LARGE";
      state.activeJobDetailsAccordion = null;
      state.jobPostUsingAI = false;
      state.activeJobDuration = "LONG";
      state.editingDrafPost = false;
      state.reworkPrevJobPost = false;
      state.activeJobExperience = "ENTRY";
      state.activeWorkingSchedule = "FULL_TIME";
    },

    // setActiveJobDuration(state, action: { payload: JobDuration }) {
    //   state.activeJobDuration = action.payload;
    // },
    // setActiveJobExperience(state, action: { payload: JobExperience }) {
    //   state.activeJobExperience = action.payload;
    // },
  },
});

export const {
  setActiveJobScope,
  setActiveJobDetailsAccordion,
  setWithAiJobPostActiveStage,
  setJobPostActiveStage,
  setJobPostErrors,
  setActiveJobScale,
  setJobPostUsingAI,
  setActiveProjectType,
  setActiveJobDuration,
  setEditingJobPost,
  setActiveWorkingSchedule,
  setReworkPrevJobPost,
  setActiveExperienceLavel,
  resetActiveState,
} = jobPostingStepsSlice.actions;

export default jobPostingStepsSlice;
