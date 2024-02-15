// slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const resellerSlice = createSlice({
  name: "auth",
  initialState: {
    resellers: [],
  },
  reducers: {
    setResellers: (state, action) => {
      state.resellers = [...action.payload];
    },
  },
});

export const { setResellers } = resellerSlice.actions;
export default resellerSlice.reducer;
