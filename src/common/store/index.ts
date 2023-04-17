import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import pizzasSlice from "./slices/pizzasSlice";
import cartSlice from "./slices/cartSlice";
import popupsSlice from "./slices/popupsSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pizzas: pizzasSlice,
    cart: cartSlice,
    popups: popupsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const cartSelector = (state: RootState) => state.cart;
export const pizzasSelector = (state: RootState) => ({
  items: state.pizzas.items,
  status: state.pizzas.status,
});
export const sortingSelector = (state: RootState) => ({
  sorting: state.pizzas.sorting,
  sortingDuration: state.pizzas.sortingDuration,
});
export const filterSelector = (state: RootState) => state.filter.filter;
export const searchSelector = (state: RootState) => state.filter.search;
export const paymentSelector = (state: RootState) => state.popups.payment
