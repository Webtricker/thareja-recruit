import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  EXPAND: null | string;
};
const initialState: InitialState = {
  EXPAND: null,
};

// Create the slice with reducers for individual property changes
const Modyfier = createSlice({
  name: "modyfier",
  initialState,
  reducers: {
    SET_EXPAND(state, action: { payload: string | null }) {
      state.EXPAND = action.payload;
    },
  },
});

export const { SET_EXPAND } = Modyfier.actions;

export default Modyfier;
