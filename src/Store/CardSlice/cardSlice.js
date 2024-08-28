import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [

   { id: '1', content: "abc", answer: "das", bookmarked: true },
   { id: '2', content: "abc", answer: "das", bookmarked: true },
   { id: '3', content: "abc", answer: "das", bookmarked: true },
   { id: '5', content: "abc", answer: "das", bookmarked: true },

   { id: '4', content: "abc", answer: "das", bookmarked: true },

   { id: '4', content: "abc", answer: "das", bookmarked: true },
   { id: '4', content: "abc", answer: "das", bookmarked: true },
   { id: '4', content: "abc", answer: "das", bookmarked: true },
   { id: '4', content: "abc", answer: "das", bookmarked: true },

   
   
]

const cardSlice = createSlice({
   name: "card",
   initialState,
   reducers: {

      cardAdded: {
         reducer(state, action) {
            state.push(action.payload)
         },
         prepare(content, answer, bookmarked) {

            return {
               payload: {
                  id: nanoid(),
                  content,
                  answer,
                  bookmarked

               }
            }
         }

      }

   }


})

export const selectCards = (state) => state.cards
export const { cardAdded } = cardSlice.actions
export default cardSlice.reducer