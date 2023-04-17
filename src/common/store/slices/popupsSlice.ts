import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopupsState {
  payment: boolean;
}

const initialState: PopupsState = {
  payment: false,
};

export const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    SHOW_PAYMENT(state) {
      state.payment = true;
    },
    HIDE_PAYMENT(state) {
      state.payment = false;
    },
  },
});

export const {HIDE_PAYMENT,SHOW_PAYMENT} = popupsSlice.actions;

export default popupsSlice.reducer;
