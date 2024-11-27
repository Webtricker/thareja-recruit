// testSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface Skill {
  skill: string;
  experienceLevel: "BEGINNER" | "INTERMEDIATE" | "EXPERT";
}

type ModalType =
  | "MIC_TEST"
  | "CAMERA_AND_MIRCOPHONE_PERMISSION"
  | "SCREEN_SHARE_PERMISSION"
  | null;

type StepsComponents = "INTRODUCTION" | "ADD_SKILLS" | "INTERVIEW_QNA";

export type InterviewStatus =
  | "START"
  | "END"
  | "PENDING"
  | "PAUSED"
  | "RUNNING"
  | "UPDATING";

interface TestSkill {
  name: string;
  experience: string;
  rating: "GOOD" | "AVERAGE" | "BAD" | null | undefined;
}

export type TestDetails = {
  name: string;
  title?: string;
  location?: string;
  testOn: string;
  skills: TestSkill[];
};

interface TestState {
  activeSkillTestComponent: StepsComponents;
  activeModal: ModalType;
  interviewQuestions: string[];
  selectedSkills: Skill[] | null;
  currentQuestionIndx: number;
  openInterviewProcessModal: boolean;
  miceStatus: "ON" | "OFF";
  interviewStatus: InterviewStatus;
  openTestDetailsModal: boolean;
  screenSharePermissions: boolean;
  startTimer: boolean;
  testDetails: null | TestDetails;
}

// ========= initial data =================
const staticQuestions = [
  "Can you explain the concept of event-driven programming in Node.js?",
  "How do you optimize the performance of a Node.js application?",
  "What is the difference between Node.js and JavaScript?",
  "What are promises in JavaScript, and how are they used for asynchronous operations?",
  "How do you handle errors in Node.js?",
  "What is AWS Lambda, and how does it differ from EC2?",
  "Name three AWS services for storing data.",
  "What is the purpose of an IAM role in AWS?",
  "How does AWS S3 ensure data durability?",
  "What are some common use cases for Node.js on AWS?",
];

const initialState: TestState = {
  //   currentStep: 1,
  activeSkillTestComponent: "INTRODUCTION",
  activeModal: null,
  currentQuestionIndx: 1,
  selectedSkills: null,
  interviewQuestions: staticQuestions,
  openInterviewProcessModal: false,
  miceStatus: "OFF",
  interviewStatus: "START",
  screenSharePermissions: false,
  openTestDetailsModal: false,
  startTimer: false,
  testDetails: null,
};

const SkillTest = createSlice({
  name: "test",
  initialState,
  reducers: {
    setActiveModal: (state, action: { payload: ModalType }) => {
      state.activeModal = action.payload;
    },
    setScreenSharePermission: (state, action: { payload: boolean }) => {
      state.screenSharePermissions = action.payload;
    },
    setOpenTestDetailsModal: (state, action: { payload: boolean }) => {
      state.openTestDetailsModal = action.payload;
    },
    setTestDetails: (state, action: { payload: TestDetails }) => {
      state.testDetails = action.payload;
    },
    setCurrentQuestionIndx: (state, action: { payload: number }) => {
      state.currentQuestionIndx = action.payload;
    },
    setStartTimer: (state, action: { payload: boolean }) => {
      state.startTimer = action.payload;
    },
    setOpenInterviewProcessModal: (state, action: { payload: boolean }) => {
      state.openInterviewProcessModal = action.payload;
    },
    setMiceStatus: (state, action: { payload: "ON" | "OFF" }) => {
      state.miceStatus = action.payload;
    },
    setInterviewStatus: (state, action: { payload: InterviewStatus }) => {
      state.interviewStatus = action.payload;
    },
    setActiveSkillTestComponent: (
      state,
      action: { payload: StepsComponents }
    ) => {
      state.activeSkillTestComponent = action.payload;
    },
    resetSkillTestStates: (state) => {
      (state.activeSkillTestComponent = "INTRODUCTION"),
        (state.activeModal = null),
        (state.currentQuestionIndx = 1),
        (state.selectedSkills = null),
        (state.interviewQuestions = staticQuestions);
      state.openInterviewProcessModal = false;
      state.interviewStatus = "PENDING";
      state.testDetails = null;
      state.miceStatus = "OFF";
      state.screenSharePermissions = false;
      state.openTestDetailsModal = false;
      state.startTimer = false;
    },
  },
});

export const {
  setActiveModal,
  setMiceStatus,
  setStartTimer,
  setCurrentQuestionIndx,
  setOpenTestDetailsModal,
  setInterviewStatus,
  setTestDetails,
  setActiveSkillTestComponent,
  setOpenInterviewProcessModal,
  resetSkillTestStates,
  setScreenSharePermission,
} = SkillTest.actions;
export default SkillTest;
