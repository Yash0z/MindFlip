import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../CardSlice/cardSlice.js";
import sidebarReducer from "../SidebarSlice/sidebarSlice.js"


export const store = configureStore({
   reducer: {
      cards: cardReducer,
      sidebar: sidebarReducer,
   }
})