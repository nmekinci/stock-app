import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    brands: [],
    products: [],
  },
  reducers: {
    fetchStart: (state) => {
      (state.loading = true), (state.error = false);
    },
    getStockSuccess: (state, { payload}) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },
    // getStockSuccess: (state, { payload: {url, data} }) => {
    //   state.loading = false;
    //   state[url] = data;
    // },
    fetchFail: (state) => {
        state.loading = false
        state.error = true
      },
  },
})

export const {fetchFail, fetchStart, getStockSuccess} = stockSlice.actions
export default stockSlice.reducer
