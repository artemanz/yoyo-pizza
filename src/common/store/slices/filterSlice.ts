import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  search: string;
  filter: number;
}

const initialState: FilterState = {
  search: "",
  filter: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    SET_FILTER: (state, action: PayloadAction<number>) => {
      state.filter = action.payload;
    },
    SET_SEARCH: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    SET_FILTERS_URL: (state, action: PayloadAction<FilterState>) => {
      state.filter = action.payload.filter;
      state.search = action.payload.search;
    },
  },
});

export const {
  SET_FILTER,
  SET_SEARCH,
  SET_FILTERS_URL,
} = filterSlice.actions;

export default filterSlice.reducer;
