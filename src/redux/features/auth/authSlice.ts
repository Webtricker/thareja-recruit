// features/auth/authSlice.ts

import { TJoinUser } from "@/types/common";
import {
  deleteFromLocal,
  getUserDataFromLocal,
  setUserToLocal,
} from "@/utils/updateLocalStorage";
import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  verified: boolean;
  loginToken: string;
  type: string;
  createdAt: string;
  deleted: boolean;
};

interface AuthState {
  loggedInUser: TUser | null;
  userType: TJoinUser;
}

const initialState: AuthState = {
  loggedInUser: typeof window !== "undefined" ? getUserDataFromLocal() : null,
  userType: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateLogedInUser: (state, action: { payload: TUser | null }) => {
      if (action.payload) {
        setUserToLocal(action.payload);
      } else {
        deleteFromLocal();
      }
      state.loggedInUser = action.payload;
    },
    updateUserType: (state, action: { payload: TJoinUser }) => {
      state.userType = action.payload;
    },
  },
});

export const { updateLogedInUser, updateUserType } = authSlice.actions;
export default authSlice.reducer;
