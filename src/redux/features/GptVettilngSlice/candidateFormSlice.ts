// src/redux/features/candidateFormSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Candidate, Skill } from "./Types/Types"; // Ensure the path is correct

interface CandidateFormState {
  predefinedSkills: boolean;
  skills: Skill[];
  candidates: Candidate[];
}

const initialState: CandidateFormState = {
  predefinedSkills: false,
  skills: [],
  candidates: [],
};

const candidateFormSlice = createSlice({
  name: "candidateForm",
  initialState,
  reducers: {
    togglePredefinedSkills(state, action: PayloadAction<boolean>) {
      state.predefinedSkills = action.payload;
    },
    addSkill(state) {
      state.skills.push({ name: "", level: "" });
    },
    updateSkill(
      state,
      action: PayloadAction<{
        index: number;
        field: keyof Skill;
        value: string;
      }>
    ) {
      const { index, field, value } = action.payload;
      state.skills[index][field] = value;
    },
    removeSkill(state, action: PayloadAction<number>) {
      state.skills.splice(action.payload, 1);
    },
    addCandidate(state) {
      state.candidates.push({ name: "", email: "" });
    },
    updateCandidate(
      state,
      action: PayloadAction<{
        index: number;
        field: keyof Candidate;
        value: string;
      }>
    ) {
      const { index, field, value } = action.payload;
      state.candidates[index][field] = value;
    },
    removeCandidate(state, action: PayloadAction<number>) {
      state.candidates.splice(action.payload, 1);
    },
  },
});

export const {
  togglePredefinedSkills,
  addSkill,
  updateSkill,
  removeSkill,
  addCandidate,
  updateCandidate,
  removeCandidate,
} = candidateFormSlice.actions;

export default candidateFormSlice.reducer;
