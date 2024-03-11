// slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const checkPaymentSlice = createSlice({
  name: "checkPayment",
  initialState: {},
  reducers: {
    setCheckPayment: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCheckPayment } = checkPaymentSlice.actions;
export default checkPaymentSlice.reducer;
