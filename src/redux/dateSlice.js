import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
const date = moment().format("DD.MM.YYYY") 

const dateSlice = createSlice({
  name: "date",
  initialState: date,
  reducers: {
    setDate(state, action) {
      return action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;