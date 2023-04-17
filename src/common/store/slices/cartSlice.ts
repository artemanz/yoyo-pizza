import { CartPizza } from "@/common/types/pizza";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface CartItem {
  id: string;
  pizza: CartPizza;
  value: number;
}

export interface PizzasState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: PizzasState =
  localStorage.getItem("cart_items") && localStorage.getItem("total_price")
    ? {
        items: JSON.parse(localStorage.getItem("cart_items")!),
        totalPrice: JSON.parse(localStorage.getItem("total_price")!),
      }
    : {
        items: [],
        totalPrice: 0,
      };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<CartPizza>) {
      const existedPizza = state.items.find((cartPizza) =>
        isSamePizzas(cartPizza.pizza, action.payload)
      );
      if (existedPizza) {
        existedPizza.value += 1;
      } else {
        state.items.push({ id: uuidv4(), pizza: action.payload, value: 1 });
      }

      calcTotalPrice(state);
      updateLocalStorage(state);
    },
    addItem(state, action: PayloadAction<CartItem["id"]>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.value += 1;
      calcTotalPrice(state);
      updateLocalStorage(state);
    },
    reduceItem(state, action: PayloadAction<CartItem["id"]>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.value -= 1;
        if (item.value == 0) {
          state.items = state.items.filter((i) => i !== item);
        }
      }
      calcTotalPrice(state);
      updateLocalStorage(state);
    },
    removeItem(state, action: PayloadAction<CartItem["id"]>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      calcTotalPrice(state);
      updateLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      updateLocalStorage(state);
    },
  },
});

export const { addPizza, clearCart, reduceItem, addItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;

// helpers
function isSamePizzas<T extends CartPizza>(pizza1: T, pizza2: T): boolean {
  return (
    pizza1.id === pizza2.id &&
    pizza1.type == pizza2.type &&
    pizza1.size == pizza2.size
  );
}

function updateLocalStorage(state: PizzasState) {
  localStorage.setItem("cart_items", JSON.stringify(state.items));
  localStorage.setItem("total_price", JSON.stringify(state.totalPrice));
}

function calcTotalPrice(state: PizzasState) {
  state.totalPrice = state.items.reduce(
    (acc, pizza) => acc + pizza.pizza.price * pizza.value,
    0
  );
}
