import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DESC,
  SORT_BY_RATING,
} from "../store/slices/pizzasSlice";

type SortingObject = {
  id: string;
  type: "rating" | "price";
  duration: "asc" | "desc";
  UI_text: string;
  action: ActionCreatorWithoutPayload;
};

const SORTING_TYPES: SortingObject[] = [
  {
    id: "rating_asc",
    type: "rating",
    duration: "asc",
    UI_text: "популярности",
    action: SORT_BY_RATING,
  },
  {
    id: "price_asc",
    type: "price",
    duration: "asc",
    UI_text: "цене (сначала дешевые)",
    action: SORT_BY_PRICE_ASC,
  },
  {
    id: "price_desc",
    type: "price",
    duration: "desc",
    UI_text: "цене (сначала дорогие)",
    action: SORT_BY_PRICE_DESC,
  },
];

export default SORTING_TYPES;
