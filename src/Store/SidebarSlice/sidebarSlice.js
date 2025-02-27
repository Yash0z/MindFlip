import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   isOpen: false
}

const sidebarSlice = createSlice({
   name: "sidebar",
   initialState,
   reducers: {
      toggleSidebar: (state) => {
         state.isOpen = !state.isOpen
      },
      closeSidebar: (state) => {
         state.isOpen = false;
      },
   }
})
export const sidebarState = (state) => state.sidebar.isOpen
export const { toggleSidebar, closeSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer