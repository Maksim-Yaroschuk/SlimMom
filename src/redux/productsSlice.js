import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
// const date = moment().format("DD.MM.YYYY") 
const productsState = {
  date: moment().format("DD.MM.YYYY"),
  productsList: []
}

const productsSlice = createSlice({
  name: "products",
  initialState: productsState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload
    },
    setProducts(state, action) {
      state.productsList = action.payload
    },
  },
});

export const { setDate, setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;