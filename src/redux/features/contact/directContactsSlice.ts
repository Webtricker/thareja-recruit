import { createSlice } from "@reduxjs/toolkit";
import { MutableRefObject } from "react";

// export type ActiveTabBtns = "COMPLETED_JOBS" | "IN_PROGRESS";
export type UserProfileDropDown =
  | "SEARCH_MESSAGE"
  | "PEOPLE"
  | "FILE_AND_LINKS"
  | "PERSONAL_NOTEPAD"
  | null;

type Target = "EMAIL" | "NAME" | "DES" | "CONTRACT" | "MILESTONE";
type ErrorPayload =
  | "EMAIL"
  | "NAME"
  | "DESCRIPTION"
  | "HOURLY_RATE"
  | "WEEKLY_LIMIT";

type MilestoneStage = {
  id: number;
  date: string | null;
  amount: number;
};

type HourlyInfoPayload =
  | "HOURLY_RATE"
  | "RECRUIT_FEE"
  | "REMAINING_AMOUNT"
  | "WEEKLY_LIMIT"
  | "END_DATE";

type InputRefPayload = {
  emailField: MutableRefObject<null>;
  nameField: MutableRefObject<null>;
  descriptionField: MutableRefObject<null>;
};

type HourlyInfo = {
  hourlyRate: number | null;
  recruitFee: number | null;
  remainingAmount: number | null;
  weeklyLimit: number | null;
  endDate: number | null;
};

type InputRefType = {
  emailField: MutableRefObject<null>;
  nameField: MutableRefObject<null>;
  descriptionField: MutableRefObject<null>;
};

// ============ all types ends
interface DirectContactInitialStates {
  activeContactFormModal: boolean;
  clientEmail: string | null;
  clientContactName: string | null;
  clientDescription: string | null;
  contractType: "FIXED" | "HOURLY";
  mileStoneName: string | null;
  mileStoneStages: MilestoneStage[];
  recruiteFeePercent: number;
  totalAmount: number | null;
  totalFee: number | null;
  activeCalendar: string | null;
  activeMessageSendModal: boolean;
  activeFormInputs: "PERSONAL_INFO" | "MILESTONES_INFO";
  hourlyInfo: HourlyInfo;
  error: {
    field: "EMAIL" | "NAME" | "DESCRIPTION" | "HOURLY_RATE" | "WEEKLY_LIMIT";
    message: string;
  } | null;
}

const initialState: DirectContactInitialStates = {
  error: null,
  activeContactFormModal: false,
  clientContactName: null,
  clientDescription: null,
  clientEmail: null,
  contractType: "FIXED",
  mileStoneName: null,
  mileStoneStages: [{ date: null, amount: 0, id: Date.now() }],
  recruiteFeePercent: 5,
  totalAmount: null,
  totalFee: null,
  activeMessageSendModal: false,
  activeFormInputs: "PERSONAL_INFO",
  activeCalendar: null,
  hourlyInfo: {
    hourlyRate: null,
    recruitFee: null,
    remainingAmount: null,
    weeklyLimit: null,
    endDate: null,
  },
};

// GLOBAL VARIABLES
let totalAmount = 0;

// Create the slice with reducers for individual property changes
const DirectContacts = createSlice({
  name: "DirectContacts",
  initialState,
  reducers: {
    toggleConctactFormModal(state, action: { payload: boolean }) {
      state.activeContactFormModal = action.payload;
    },
    toggleActiveCalendar(state, action: { payload: string | null }) {
      state.activeCalendar = action.payload;
    },

    setContractType(state, action: { payload: "FIXED" | "HOURLY" }) {
      state.contractType = action.payload;
    },
    setError(
      state,
      action: { payload: { field: ErrorPayload; message: string } | null }
    ) {
      if (action.payload) {
        state.error = {
          field: action.payload.field,
          message: action.payload.message,
        };
      } else {
        state.error = null;
      }
    },
    updateActiveFormInputs(
      state,
      action: { payload: "PERSONAL_INFO" | "MILESTONES_INFO" }
    ) {
      state.activeFormInputs = action.payload;
    },
    updateFormData(
      state,
      action: { payload: { target: Target; value: string } }
    ) {
      switch (action.payload.target) {
        case "EMAIL":
          state.clientEmail = action.payload.value;
          break;
        case "NAME":
          state.clientContactName = action.payload.value;
          break;
        case "DES":
          state.clientDescription = action.payload.value;
          break;
        case "MILESTONE":
          state.mileStoneName = action.payload.value;
          break;
        default:
          state;
      }
    },
    updateHourlyInfo(
      state,
      action: { payload: { target: HourlyInfoPayload; value: number } }
    ) {
      const calculateRecruitFee = (v: number) => (v * 5) / 100;

      const formatToTwoDecimalPlaces = (num: number) =>
        Number.isInteger(num) ? num : parseFloat(num.toFixed(2));

      switch (action.payload.target) {
        case "WEEKLY_LIMIT":
          state.hourlyInfo.weeklyLimit = action.payload.value;
          break;

        case "RECRUIT_FEE":
          state.hourlyInfo.recruitFee = action.payload.value;
          break;

        case "REMAINING_AMOUNT": {
          const hourlyRate = (action.payload.value * 100) / 95;
          const recruitFee = calculateRecruitFee(hourlyRate);
          const formattedAmount = formatToTwoDecimalPlaces(hourlyRate);

          state.hourlyInfo.remainingAmount = action.payload.value;
          state.hourlyInfo.recruitFee = formatToTwoDecimalPlaces(recruitFee);
          state.hourlyInfo.hourlyRate = formattedAmount;
          break;
        }

        case "HOURLY_RATE": {
          const recruitFee = calculateRecruitFee(action.payload.value);
          const formattedAmount = formatToTwoDecimalPlaces(
            action.payload.value - recruitFee
          );

          state.hourlyInfo.hourlyRate = action.payload.value;
          state.hourlyInfo.recruitFee = formatToTwoDecimalPlaces(recruitFee);
          state.hourlyInfo.remainingAmount = formattedAmount;
          break;
        }

        case "END_DATE":
          state.hourlyInfo.endDate = action.payload.value;
          break;

        default:
          return state;
      }
    },

    addMilestoneStage(state) {
      state.mileStoneStages.push({ date: null, amount: 0, id: Date.now() });
    },
    removeMilestoneStage(state, action: { payload: number }) {
      state.totalAmount = state.mileStoneStages.reduce(
        (acc, curr) => acc + (curr.id !== action.payload ? curr.amount : 0),
        0
      );
      state.totalFee = state.totalAmount * (state.recruiteFeePercent / 100);
      state.mileStoneStages = state.mileStoneStages.filter(
        (milestone) => milestone.id !== action.payload
      );
    },

    updateMilestoneStage(state, action) {
      const indx = state.mileStoneStages.findIndex(
        (milestone) => milestone.id === action.payload.id
      );
      if (action.payload.type === "AMOUNT") {
        const _amount = action.payload.value
          ? parseFloat(action.payload.value)
          : 0;
        const _prevAmount = state.mileStoneStages[indx].amount
          ? state.mileStoneStages[indx].amount
          : 0;
        const amountChange = _amount - _prevAmount;
        totalAmount += amountChange;
        state.totalAmount = totalAmount;
        state.totalFee = state.totalAmount * (state.recruiteFeePercent / 100);
        state.mileStoneStages[indx].amount = parseFloat(action.payload.value);
      } else {
        state.mileStoneStages[indx].date = action.payload.value;
      }
    },

    resetDirectContactsForm(state) {
      state.activeContactFormModal = false;
      state.clientContactName = null;
      state.clientDescription = null;
      state.clientEmail = null;
      state.contractType = "FIXED";
      state.mileStoneName = null;
      state.mileStoneStages = [{ date: null, amount: 0, id: Date.now() }];
      state.recruiteFeePercent = 5;
      state.totalAmount = null;
      state.totalFee = null;
      state.activeCalendar = null;
      state.activeMessageSendModal = false;
      state.activeFormInputs = "PERSONAL_INFO";
      state.error = null;
      state.hourlyInfo = {
        hourlyRate: null,
        recruitFee: null,
        remainingAmount: null,
        weeklyLimit: null,
        endDate: null,
      };
    },
  },
});

export const {
  toggleConctactFormModal,
  updateFormData,
  updateMilestoneStage,
  removeMilestoneStage,
  addMilestoneStage,
  resetDirectContactsForm,
  updateActiveFormInputs,
  toggleActiveCalendar,
  setContractType,
  updateHourlyInfo,
  setError,
} = DirectContacts.actions;

export default DirectContacts;
