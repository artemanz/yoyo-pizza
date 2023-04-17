import SORTING_TYPES from "@/common/constants/sortingTypes";
import { Pizza } from "@/common/types/pizza";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async ({ search, filter }: any) => {
    let url = new URL("https://64232d5b77e7062b3e2ceeb1.mockapi.io/items");

    if (search) url.searchParams.append("title", search);

    if (filter) url.searchParams.append("category", filter.toString());
    const res = await fetch(url);
    const data = res.json();

    return data;
  }
);

export interface PizzasState {
  items: Pizza[];
  sorting: typeof SORTING_TYPES[number]["type"] | "";
  sortingDuration: typeof SORTING_TYPES[number]["duration"] | "";
  status: "fulfilled" | "pending" | "rejected";
}

const initialState: PizzasState = {
  items: [],
  sorting: "",
  sortingDuration: "",
  status: "pending",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    SET_PIZZAS: (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
    },
    SORT_BY_PRICE_ASC: (state) => {
      state.sorting = "price";
      state.sortingDuration = "asc";
      state.items.sort((a, b) => a.prices[0] - b.prices[0]);
    },
    SORT_BY_PRICE_DESC: (state) => {
      state.sorting = "price";
      state.sortingDuration = "desc";
      state.items.sort((a, b) => b.prices[0] - a.prices[0]);
    },
    SORT_BY_RATING: (state) => {
      state.sorting = "rating";
      state.sortingDuration = "desc";
      state.items.sort((a, b) => b.rating - a.rating);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "pending";
    });
  },
});

export const {
  SET_PIZZAS,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DESC,
  SORT_BY_RATING,
} = pizzasSlice.actions;

export default pizzasSlice.reducer;
