import { createSlice } from "@reduxjs/toolkit";

interface InititalState {
  activeModalID: string | null;
}

// initial state
const initialState: InititalState = {
  activeModalID: null,
};
const ModalToggler = createSlice({
  name: "ModalToggler",
  initialState,
  reducers: {
    toggleModal(state, action: { payload: string | null }) {
      state.activeModalID = action.payload;
    },
  },
});

export const { toggleModal } = ModalToggler.actions;
export default ModalToggler.reducer;
