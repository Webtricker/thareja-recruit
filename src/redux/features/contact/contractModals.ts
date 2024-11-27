import { createSlice } from "@reduxjs/toolkit";

// ========== types and interfaces =================
export type ModalType = "REVIEW_CONTRACT" | "SEND_MESSAGE" | "CREATE_CONTRACT";
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

type HourlyInfo = {
  hourlyRate: number | null;
  recruitFee: number | null;
  remainingAmount: number | null;
  weeklyLimit: number | null;
  endDate: number | null;
};

type ErrorFields =
  | "EMAIL"
  | "NAME"
  | "DESCRIPTION"
  | "HOURLY_RATE"
  | "WEEKLY_LIMIT";
type Error = {
  field: ErrorFields;
  message: string;
} | null;

type ActiveContractFormInputsPayload = "PERSONAL_INFO" | "MILESTONES_INFO";

interface ModalInitialState {
  modalType: ModalType;
  activeModal: boolean;
  activeCalendar: string | null;
  contractName: string | null;
  clientEmail: string | null;
  contractDes: string | null;
  mileStoneName: string | null;
  mileStoneStages: MilestoneStage[];
  contractType: "FIXED" | "HOURLY";
  totalAmount: number | null;
  totalFee: number | null;
  recruiteFeePercent: number;
  activeContractFormInputs: ActiveContractFormInputsPayload;
  hourlyInfo: HourlyInfo;
  messageSendingData: { contract: string; email: string };
  error: Error;
}

// ====== initial states =========

const hourlyInitialState = {
  hourlyRate: null,
  recruitFee: null,
  remainingAmount: null,
  weeklyLimit: null,
  endDate: null,
};
const initialState: ModalInitialState = {
  modalType: "CREATE_CONTRACT",
  activeModal: false,
  activeCalendar: null,
  contractName: null,
  clientEmail: null,
  contractDes: null,
  contractType: "FIXED",
  mileStoneName: null,
  mileStoneStages: [{ date: null, amount: 0, id: Date.now() }],
  totalAmount: 0,
  totalFee: 0,
  recruiteFeePercent: 5,
  activeContractFormInputs: "PERSONAL_INFO",
  hourlyInfo: hourlyInitialState,
  messageSendingData: { contract: "", email: "" },
  error: null,
};

// GLOBAL VARIABLES
let totalAmount = 0;

// ==========  Create the slice with reducers for individual property changes ============
const ContractModals = createSlice({
  name: "contractModals",
  initialState,
  reducers: {
    setModalType(state, action: { payload: ModalType }) {
      state.modalType = action.payload;
    },

    setActiveModal(state, action: { payload: boolean }) {
      state.activeModal = action.payload;
    },

    setActiveCalendar(state, action: { payload: string | null }) {
      state.activeCalendar = action.payload;
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
          state.contractName = action.payload.value;
          break;
        case "DES":
          state.contractDes = action.payload.value;
          break;
        case "MILESTONE":
          state.mileStoneName = action.payload.value;
          break;
        default:
          state;
      }
    },

    // ==== mileston reducers =====
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

    updateActiveFormInputs(
      state,
      action: { payload: "PERSONAL_INFO" | "MILESTONES_INFO" }
    ) {
      state.activeContractFormInputs = action.payload;
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

    setContractType(state, action: { payload: "FIXED" | "HOURLY" }) {
      state.contractType = action.payload;
    },
    updateMessageSendingData(
      state,
      action: {
        payload: null | { target: "contract" | "email"; value: string };
      }
    ) {
      action.payload
        ? (state.messageSendingData[action.payload.target] =
            action.payload.value)
        : { contract: "", email: "" };
    },

    setError(
      state,
      action: { payload: { field: ErrorPayload; message: string } | null }
    ) {
      console.log("from slize", action.payload);
      if (action.payload) {
        state.error = {
          field: action.payload.field,
          message: action.payload.message,
        };
      } else {
        state.error = null;
      }

      console.log("from slice", state.error);
    },

    resetModal(state) {
      state.modalType = "CREATE_CONTRACT";
      state.activeModal = false;
      state.activeCalendar = null;
      state.contractName = null;
      state.clientEmail = null;
      state.contractDes = null;
      state.contractType = "FIXED";
      state.mileStoneName = null;
      state.mileStoneStages = [{ date: null, amount: 0, id: Date.now() }];
      state.totalAmount = 0;
      state.totalFee = 0;
      state.recruiteFeePercent = 5;
      state.activeContractFormInputs = "PERSONAL_INFO";
      state.hourlyInfo = hourlyInitialState;
      state.messageSendingData = { contract: "", email: "" };
      state.error = null;
    },
  },
});

export const {
  setModalType,
  setActiveModal,
  setActiveCalendar,
  updateFormData,
  addMilestoneStage,
  removeMilestoneStage,
  updateMilestoneStage,
  updateActiveFormInputs,
  setContractType,
  updateHourlyInfo,
  updateMessageSendingData,
  setError,

  resetModal,
} = ContractModals.actions;

export default ContractModals;
