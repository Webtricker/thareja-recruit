import { createSlice } from "@reduxjs/toolkit";

export type Components =
  | "GET_STARTED"
  | "PROFESSIONAL_ROLE"
  | "RELEVENT_WORK_EXPERIENCE"
  | "EDUCATION"
  | "COMMUNICATION_LANGUAGE"
  | "SKILL_DESCRIPTION"
  | "PROFILE_DESCRIPTION"
  | "EXPERTISTS"
  | "HOURLY_RATE"
  | "ADDRESS"
  | "PROFILE_READY";

export type ReleventWorkExperience = {
  id: number;
  title: string;
  company: string;
  city:string | null;
  country: string | null;
  isCurrentlyWorking: boolean;
  startingMonth: string;
  startingYear: string;
  endingMonth: string;
  endingYear: string;
  description: string | null;
};

export type TEducation = {
  id: number;
  school: string;
  startingDate: string;
  endingDate: string;
  degree?: string;
  areaOfStudy?: string;
  description?: string;
};

type SpeakingLanguage = {
  id: number;
  language: string;
  level: string;
};
type SpeakingLanguageUpdateAction = {
  id: number;
  target: "language" | "level";
  value: string;
};

type WorkingSkills = {
  id: number;
  name: string;
};

type Expertists = {
  id: number;
  name: string;
};
type DateOfBirth = {
  month: string;
  day: string;
  year: string;
};
type Address = {
  country: string;
  city: string;
  stateOrProvince: string;
  zipOrPostalCode: string;
  phone: number | null;
  email: string;
  website: string | null;
  street: string;
  postalCode: string;
  aptOrSuite: string | null;
};

type ErrorFieldType = { errorField: string; message: string } | null;

interface CreateFreelancerProfileStates {
  activeEducationToEdit: TEducation | null;
  activeWorkingExperienceToEdit: ReleventWorkExperience | null;
  activeComponent: Components;
  professionalRole: string | null;
  releventWorkExperience: ReleventWorkExperience[];
  educations: TEducation[];
  speakingLanguages: SpeakingLanguage[];
  workingSkills: WorkingSkills[];
  bio: string | null;
  expertists: Expertists[];
  hourlyRate: string;
  dateOfBirth: DateOfBirth | null;
  address: Address;
  showSkipButton: boolean;
  fieldError: ErrorFieldType;
  activeModal: string | null;
  activeExperienceModalItemId: number | null;
  profileSrc:string | null;
}
// ============ all types ends

const initialSpeakingLanguage = {
  id: new Date().getTime(),
  language: "English (all profiles include this)",
  level: "",
};

const initialAddressData = {
  country: "",
  city: "",
  stateOrProvince: "",
  zipOrPostalCode: "",
  phone: null,
  email: "",
  website: null,
  street: "",
  postalCode: "",
  aptOrSuite: null,
};

const initialState: CreateFreelancerProfileStates = {
  activeEducationToEdit: null,
  activeWorkingExperienceToEdit: null,
  activeComponent: "GET_STARTED",
  professionalRole: null,
  releventWorkExperience: [],
  educations: [],
  speakingLanguages: [initialSpeakingLanguage],
  workingSkills: [],
  bio: "",
  expertists: [],
  hourlyRate: "",
  dateOfBirth: null,
  address: initialAddressData,
  showSkipButton: false,
  fieldError: null,
  activeModal: null,       
  activeExperienceModalItemId: null,
  profileSrc:null,
};

// Create the slice with reducers for individual property changes
const CreateFreelancerProfileStates = createSlice({
  name: "CreateFreelancerProfileStates",
  initialState,
  reducers: {
    setActiveComponents(state, action: { payload: Components }) {
      state.activeComponent = action.payload;
    },
    setProfessionalRole(state, action: { payload: string }) {
      state.professionalRole = action.payload;
    },
    addReleventExperience(state, action: { payload: ReleventWorkExperience }) {
      state.releventWorkExperience.push(action.payload);
    },

    removeReleventExperience(state, action: { payload: number }) {
      state.releventWorkExperience = state.releventWorkExperience.filter(
        (item) => item.id !== action.payload
      );
    },
    updateReleventExperience(
      state,
      action: { payload: { id: number; value: ReleventWorkExperience } }
    ) {
      const index = state.releventWorkExperience.findIndex(
        (_item) => _item.id === action.payload.id
      );
      state.releventWorkExperience[index] = action.payload.value;
    },

    addEducation(state, action: { payload: TEducation }) {
      state.educations.push(action.payload);
    },
    updateEducationExperience(
      state,
      action: { payload: { id: number; value: TEducation } }
    ) {
      const index = state.educations.findIndex(
        (_item) => _item.id === action.payload.id
      );
      state.educations[index] = action.payload.value;
    },

    removeEducation(state, action: { payload: number }) {
      state.educations = state.educations.filter(
        (item) => item.id !== action.payload
      );
    },

    addSpeakingLanguage(state) {
      const newLanguageTemplate: SpeakingLanguage = {
        id: new Date().getTime(),
        language: "",
        level: "",
      };
      state.speakingLanguages.push(newLanguageTemplate);
    },

    updateSpeakingLanguage(
      state,
      action: { payload: SpeakingLanguageUpdateAction }
    ) {
      const indx = state.speakingLanguages.findIndex(
        (_item) => _item.id === action.payload.id
      );
      const filteredEl = state.speakingLanguages[indx];
      filteredEl[action.payload.target] = action.payload.value;
      state.speakingLanguages[indx] = filteredEl;
    },

    removeSpeakingLanguage(state, action: { payload: number }) {
      state.speakingLanguages = state.speakingLanguages.filter(
        (item) => item.id !== action.payload
      );
    },

    addWorkingSkills(state, action: { payload: WorkingSkills }) {
      state.workingSkills.push(action.payload);
    },

    updateWorkingSkills(state, action: { payload: WorkingSkills[] }) {
      state.workingSkills = (action.payload);
    },

    removeWorkingSkills(state, action: { payload: number }) {
      state.workingSkills = state.workingSkills.filter(
        (item) => item.id !== action.payload
      );
    },

    setBio(state, action: { payload: string | null }) {
      state.bio = action.payload;
    },
    setActiveEducationToEdit(state, action: { payload: TEducation | null }) {
      state.activeEducationToEdit = action.payload;
    },
    setActiveWorkingExperienceToEdit(
      state,
      action: { payload: ReleventWorkExperience | null }
    ) {
      state.activeWorkingExperienceToEdit = action.payload;
    },

    addExpertists(state, action: { payload: Expertists }) {
      state.expertists.push(action.payload);
    },

    removeExpertists(state, action: { payload: number }) {
      state.expertists = state.expertists.filter(
        (item) => item.id !== action.payload
      );
    },

    setHourlyRate(state, action: { payload: string }) {
      state.hourlyRate = action.payload;
    },

    setDateOfBirth(state, action: { payload: DateOfBirth }) {
      state.dateOfBirth = action.payload;
    },

    setAddress(state, action: { payload: Address }) {
      state.address = action.payload;
    },

    toggleSkipButton(state, action: { payload: boolean }) {
      state.showSkipButton = action.payload;
    },

    setFieldError(state, action: { payload: ErrorFieldType }) {
      state.fieldError = action.payload;
    },
    setActiveModal(state, action: { payload: string | null }) {
      state.activeModal = action.payload;
    },
    setActiveExperienceModalItemId(state, action: { payload: number | null }) {
      state.activeExperienceModalItemId = action.payload;
    },
    setProfileSrc(state, action: { payload: string | null }) {
      state.profileSrc = action.payload;
    },

    resetCreateFreelancerStates(state) {
      state.activeEducationToEdit = null;
      state.activeWorkingExperienceToEdit = null;
      state.activeComponent = "GET_STARTED";
      state.professionalRole = null;
      state.releventWorkExperience = [];
      state.educations = [];
      state.speakingLanguages = [initialSpeakingLanguage];
      state.workingSkills = [];
      state.bio = "";
      state.expertists = [];
      state.hourlyRate = "";
      state.dateOfBirth = null;
      state.address = initialAddressData;
      state.showSkipButton = false;
      state.fieldError = null;
      state.activeModal = null;
      state.activeExperienceModalItemId = null;
      state.profileSrc = null;
    },
  },
});

export const {
  setActiveEducationToEdit,
  setActiveWorkingExperienceToEdit,
  setActiveComponents,
  setProfessionalRole,
  addReleventExperience,
  removeReleventExperience,
  updateReleventExperience,
  addEducation,
  updateEducationExperience,
  removeEducation,
  addSpeakingLanguage,
  updateSpeakingLanguage,
  removeSpeakingLanguage,
  addWorkingSkills,
  removeWorkingSkills,
  updateWorkingSkills,
  setBio,
  addExpertists,
  removeExpertists,
  setHourlyRate,
  setDateOfBirth,
  setAddress,
  toggleSkipButton,
  setFieldError,
  setActiveModal,
  setActiveExperienceModalItemId,
  setProfileSrc,
  resetCreateFreelancerStates,
} = CreateFreelancerProfileStates.actions;

export default CreateFreelancerProfileStates;
