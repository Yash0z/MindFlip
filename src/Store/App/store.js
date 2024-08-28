import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../CardSlice/cardSlice";

export const store = configureStore({
   reducer: {
      cards: cardReducer
   }
})